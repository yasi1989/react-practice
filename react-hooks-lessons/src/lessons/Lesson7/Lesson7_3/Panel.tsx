import { ReactNode } from "react";

export default function Panel({ children }: { children: ReactNode }) {
  return <section className="panel">{children}</section>;
}
