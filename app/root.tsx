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
import "./gradient.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

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

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header-gradient w-full shadow p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img
          src="./assets/logo/logo.png"
          alt="Logo"
          className="h-16 w-auto border-2 border-white rounded-full"
        />
      </div>
      <div className="flex items-center gap-4">
        <button
          className="text-white text-lg md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <nav className="hidden md:flex gap-6">
          <Link
            to="/"
            className="text-lg font-bold hover:underline text-white"
          >
            About
          </Link>
          <Link
            to="/events"
            className="text-lg font-bold hover:underline text-white"
          >
            Events
          </Link>
        </nav>
      </div>

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-36 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-[10] ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>
        <nav className="flex flex-col gap-4 p-6">
          <Link
            to="/"
            className="text-lg font-bold hover:underline text-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/events"
            className="text-lg font-bold hover:underline text-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Events
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-transparent z-[5]"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer-gradient w-full text-center p-4 mt-8">
      <nav className="flex justify-center gap-6 mb-2">
        <Link to="/" className="text-white">
          About
        </Link>
        <Link to="/events" className="text-white">
          Events
        </Link>
      </nav>
      <small>&copy; {new Date().getFullYear()} bity-community</small>
    </footer>
  );
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
      <body>
        <Header />
        <div className="min-h-[80vh]">{children}</div>
        <Footer />
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
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
