import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function meta(): Route.MetaDescriptor[] {
  return [
    { title: "Dotcorr - DCFlight Framework | Native Cross-Platform Development" },
    { 
      name: "description", 
      content: "Build native mobile apps with Dart using DCFlight. No platform views, no abstractions. React-like development experience with true native UI rendering." 
    },
    { name: "keywords", content: "DCFlight, Dart, mobile development, cross-platform, native UI, React Native alternative" },
    { property: "og:title", content: "DCFlight - Native Cross-Platform Framework" },
    { property: "og:description", content: "Build native mobile apps with Dart. No platform views, no abstractions." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-background text-foreground font-sans antialiased min-h-screen flex flex-col items-center justify-center transition-colors duration-300">
        <div className="w-full max-w-3xl px-6 py-10">
          <div className="card rounded soft-shadow">
            {children}
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="card rounded soft-shadow max-w-xl w-full text-center">
        <h1>{message}</h1>
        <p>{details}</p>
        {stack && (
          <pre className="w-full p-4 overflow-x-auto bg-muted rounded mt-4 text-left">
            <code>{stack}</code>
          </pre>
        )}
      </div>
    </main>
  );
}
