import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <section className={`bg-slate-300 text-center`}>Music Browser</section>
      <main>{children}</main>
    </div>
  );
}
