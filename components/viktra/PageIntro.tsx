import type { ReactNode } from "react";

/** Top of an inner page: H1 and one sentence, on the hero colour. */
export default function PageIntro({
  h1,
  lead,
  children,
}: {
  h1: string;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <div className="v-intro">
      <div className="v-wrap">
        <h1 className="v-h1 v-h1--page">{h1}</h1>
        <p className="v-lead">{lead}</p>
        {children}
      </div>
    </div>
  );
}
