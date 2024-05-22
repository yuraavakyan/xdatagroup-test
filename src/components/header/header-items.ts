import { ReactElement } from "react";

type MenuItem = {
  title: string;
  href: string;
  icon?: ReactElement;
};

export const headerItems: MenuItem[] = [
  {
    title: "About",
    href: "about",
  },
  {
    title: "Contact us",
    href: "contact",
  },
  {
    title: "Explore Products",
    href: "products",
  },
];
