import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/sign-in", "/sign-up", "/callback", "/"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next|api).*)", "/"],
};
