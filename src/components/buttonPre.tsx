import * as React from 'react';
import "@/style/btnStyle.css"


export default function ButtonPre({ children, href, classn, type } : {
    children: string;
  href: string;
  classn: string;
  type: "submit" | "reset" | "button" | undefined;
}) {
    return <a
    href={href}
      className={`btn ${classn}`}
      type={type}
  >
    {children}
  </a>
}