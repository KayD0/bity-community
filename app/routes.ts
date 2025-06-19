import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("", "routes/about.tsx"),
  route("events", "routes/events.tsx"),
] satisfies RouteConfig;
