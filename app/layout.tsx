import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { motion, AnimatePresence } from "framer-motion";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="main-layout">
          <Navbar />
          <div className="flex">
            <div className="w-32 md:block hidden">
              <Sidebar />
            </div>
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
