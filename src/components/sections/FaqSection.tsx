"use client";
import { useState } from "react";
import { faqPageSchema } from "@/data/schema";
import { useLeadModal } from "@/context/LeadModalContext";
import { FidelityHeading } from "@/components/ui/FidelityHeading";

const questions = [faqPageSchema.mainEntity[1], faqPageSchema.mainEntity[0], ...faqPageSchema.mainEntity.slice(2)];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openLeadModal } = useLeadModal();
  return <section id="faq" className="v3-faq"><div className="v3-faq-content">
    <div><FidelityHeading label="Preguntas frecuentes">Lo que nos <em>preguntan</em><br />antes de empezar.</FidelityHeading><div className="v3-faq-contact"><p>¿Tienes otra pregunta?</p><button type="button" onClick={() => openLeadModal("faq")}>Escríbenos y te respondemos, no un formulario.</button></div></div>
    <div className="v3-faq-list">{questions.map((item, index) => <div key={item.name}><button type="button" aria-expanded={index === openIndex} aria-controls={"faq-answer-" + index} onClick={() => setOpenIndex(current => current === index ? null : index)}><span>{item.name}</span><span aria-hidden="true">+</span></button><div id={"faq-answer-" + index} hidden={index !== openIndex}><p>{item.acceptedAnswer.text}</p></div></div>)}</div>
  </div></section>;
}
