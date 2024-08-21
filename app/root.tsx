import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Navbar from "./components/Navbar/Navbar";
import type { LinksFunction } from "@remix-run/node";
// import { cssBundleHref } from "@remix-run/css-bundle";

// import stylesHref from "./global.module.css";
import { Footer } from "./components/Footer/Footer";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "./global.css" },
  { rel: "icon", type: "image/svg+xml", href: "/pd-logo.svg" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&family=Sofia&family=Tangerine:wght@400;700&display=swap",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <Footer />
      </body>
    </html>
  );
}
