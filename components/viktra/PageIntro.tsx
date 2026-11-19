import type { ReactNode } from "react";

/** Top of an inner page: H1, one sentence, then the actions if any. */
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
    <div className="v4-page-intro">
      <div className="v4-wrap">
        <h1 className="v4-h1 v4-h1--page">{h1}</h1>
        <p className="v4-lead">{lead}</p>
        {children}
      </div>
    </div>
  );
}
