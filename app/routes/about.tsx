import type { MetaFunction } from "@remix-run/node";
import { About as AboutComponent } from "~/components/About/About";

export const meta: MetaFunction = () => {
  return [
    { title: "Pat Dunn Productions - About" },
    { name: "description", content: "Hey! Learn more about me" },
  ];
};

export default function About() {
  return (
    <div>
      <AboutComponent />
    </div>
  );
}
