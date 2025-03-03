import type { Route } from "./+types/home";
import { Welcome } from "../pages/welcome";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Portfolio" },
    { name: "description", },
  ];
}

export default function Home() {
  return <Welcome />;
}
