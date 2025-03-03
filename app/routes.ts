import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("CV", "./pages/CV.jsx"),
  route("Projects", "./pages/Projects.tsx")

] satisfies RouteConfig;
