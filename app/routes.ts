import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/Home.tsx"), // Your Claim & Video
    route("evidence", "routes/Evidence.tsx"), // 4+ Evidence items
    route("media", "routes/Media.tsx"), // Audio & Text
] satisfies RouteConfig;