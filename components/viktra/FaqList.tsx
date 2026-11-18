import { serviceFaq } from "@/lib/services";

/** FAQ items picked by the first words of their question (see lib/viktra-pages.ts). */
export function pickFaq(prefixes: string[]) {
  return prefixes.flatMap((prefix) => serviceFaq.filter((item) => item.question.startsWith(prefix)));
}

export default function FaqList({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="v-faq">
      {items.map((item) => (
        <details key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
