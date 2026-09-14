import fs from 'fs';
import path from 'path';

const filePath = path.resolve('docs/elementor/generated/Alcancemos-2026-Elementor.json');

console.log('----------------------------------------------------');
console.log('ALCANCEMOS — ELEMENTOR JSON VALIDATOR (FASE E1)');
console.log('Inspecting file:', filePath);
console.log('----------------------------------------------------');

if (!fs.existsSync(filePath)) {
  console.error('ERROR: Target file does not exist.');
  process.exit(1);
}

const rawContent = fs.readFileSync(filePath, 'utf8');

// 1. JSON Parse
let data;
try {
  data = JSON.parse(rawContent);
  console.log('✓ JSON Parsing: SUCCESS');
} catch (err) {
  console.error('✗ JSON Parsing FAILED:', err.message);
  process.exit(1);
}

// 2. Top-level Schema Structure
const isPage = data.type === 'page';
const hasVersion = typeof data.version === 'string';
const hasContent = Array.isArray(data.content);
console.log(`✓ Top-level Schema: type="${data.type}", version="${data.version}", sections=${data.content?.length || 0}`);

if (!isPage || !hasVersion || !hasContent) {
  console.error('✗ Invalid top-level Elementor template structure.');
  process.exit(1);
}

// 3. Recursive Element Crawler
const allIds = new Set();
const duplicateIds = [];
let totalElements = 0;
let totalContainers = 0;
let totalWidgets = 0;
const widgetTypeCounts = {};
const thirdPartyWidgets = [];
let spacerCount = 0;

function crawlElement(el, parentPath = '') {
  totalElements++;
  const id = el.id;
  const currentPath = `${parentPath}/${el.elType || 'element'}:${id}`;

  if (!id) {
    console.error(`✗ Element missing ID at path: ${currentPath}`);
  } else if (allIds.has(id)) {
    duplicateIds.push(id);
  } else {
    allIds.add(id);
  }

  if (el.elType === 'container') {
    totalContainers++;
  } else if (el.elType === 'widget') {
    totalWidgets++;
    const wType = el.widgetType || 'unknown';
    widgetTypeCounts[wType] = (widgetTypeCounts[wType] || 0) + 1;

    if (wType.startsWith('tp-') || wType.startsWith('elementskit-') || wType.startsWith('ekit-')) {
      thirdPartyWidgets.push({ id, wType, path: currentPath });
    }

    if (wType === 'spacer') {
      spacerCount++;
    }
  }

  if (Array.isArray(el.elements)) {
    el.elements.forEach((child) => crawlElement(child, currentPath));
  }
}

data.content.forEach((section, index) => {
  crawlElement(section, `Section#${index + 1}`);
});

// 4. Duplicate ID Check
if (duplicateIds.length > 0) {
  console.error(`✗ Duplicate IDs found (${duplicateIds.length}):`, duplicateIds);
} else {
  console.log(`✓ ID Uniqueness: 100% Unique (${allIds.size} unique IDs verified)`);
}

// 5. Third-party Widget Check
if (thirdPartyWidgets.length > 0) {
  console.error(`✗ Third-party widgets detected (${thirdPartyWidgets.length}):`, thirdPartyWidgets);
} else {
  console.log('✓ Third-party Widget Purge: 0 third-party widgets found (tp-*, elementskit-*)');
}

// 6. Spacer Check
if (spacerCount > 0) {
  console.warn(`! Spacer widgets found: ${spacerCount}`);
} else {
  console.log('✓ Spacer Purge: 0 spacer widgets found');
}

// 7. Prohibited Legacy Fonts Check
const prohibitedFonts = ['Roboto', 'Urbanist', 'Playfair Display'];
const fontViolations = [];
prohibitedFonts.forEach((font) => {
  const matches = (rawContent.match(new RegExp(`"${font}"|'${font}'`, 'g')) || []).length;
  if (matches > 0) {
    fontViolations.push(`${font} (${matches} occurrences)`);
  }
});

if (fontViolations.length > 0) {
  console.error('✗ Prohibited fonts found in JSON:', fontViolations.join(', '));
} else {
  console.log('✓ Typography Integrity: 0 occurrences of Roboto, Urbanist, Playfair Display');
}

// 8. Summary Statistics
console.log('----------------------------------------------------');
console.log('VALIDATION SUMMARY STATISTICS:');
console.log(`- Total Top-level Sections: ${data.content.length}`);
console.log(`- Total Elements in Tree:   ${totalElements}`);
console.log(`- Total Containers:         ${totalContainers}`);
console.log(`- Total Widgets:            ${totalWidgets}`);
console.log('- Widget Types Breakdown:');
Object.entries(widgetTypeCounts).forEach(([type, count]) => {
  console.log(`    • ${type.padEnd(16)}: ${count}`);
});
console.log('----------------------------------------------------');

const isClean = duplicateIds.length === 0 && thirdPartyWidgets.length === 0 && fontViolations.length === 0;

if (isClean) {
  console.log('FINAL RESULT: PASSED ALL CHECKS (READY FOR IMPORT TEST)');
  process.exit(0);
} else {
  console.error('FINAL RESULT: FAILED CHECKS');
  process.exit(1);
}
