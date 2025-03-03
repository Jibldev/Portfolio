import type { Route } from "./+types/home";
import Home from "../pages/welcome";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Portfolio" },
    { name: "description", },
  ];
}

export default function Homepage() {
  return <Home />;
}
