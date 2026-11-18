import { serviceFaq } from "@/lib/services";

// "Une fiche Google ne suffit-elle pas ?" first: it is the first doubt of the target.
const items = [
  ...serviceFaq.filter((item) => item.question.startsWith("Une fiche Google")),
  ...serviceFaq.filter((item) => !item.question.startsWith("Une fiche Google")),
];

export default function Faq() {
  return (
    <section id="questions" className="v-section" aria-labelledby="faq-title">
      <div className="v-wrap v-narrow">
        <h2 className="v-h2" id="faq-title">
          Questions fréquentes
        </h2>
        <div className="v-faq">
          {items.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
