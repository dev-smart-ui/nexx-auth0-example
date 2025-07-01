import { Auth0Client } from "@auth0/nextjs-auth0/server";

const getAppBaseUrl = () => {
    if (typeof window !== "undefined") {
        console.log("is client");
        return window.location.origin;
    }

    const rawEnvUrl = process.env.APP_BASE_URL || process.env.VERCEL_BRANCH_URL || process.env.VERCEL_URL;

    if (rawEnvUrl && rawEnvUrl !== "undefined") {
        return rawEnvUrl.startsWith("http") ? rawEnvUrl : `https://${rawEnvUrl}`;
    }

    if (process.env.VERCEL_ENV === "production" && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
        return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
    }

    return "http://localhost:3000";
};

export const appBaseUrl = getAppBaseUrl();
console.log({appBaseUrl});

export const auth0 = new Auth0Client({
    appBaseUrl: appBaseUrl,
});