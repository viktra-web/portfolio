import { serviceFaq } from "@/lib/services";

/** FAQ items picked by the first words of their question (see lib/viktra-pages.ts). */
export function pickFaq(prefixes: string[]) {
  return prefixes.flatMap((prefix) => serviceFaq.filter((item) => item.question.startsWith(prefix)));
}

/** French typography: a no-break space before "?" so it never starts a line alone. */
export const nbsp = (text: string) => text.replace(/ ([?!:;])/g, "\u00a0$1");

export default function FaqList({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="v4-faq">
      {items.map((item) => (
        <details key={item.question}>
          <summary>{nbsp(item.question)}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
