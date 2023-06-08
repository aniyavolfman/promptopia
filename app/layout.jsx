import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Footer from "@components/Footer";
import { Suspense } from "react";


export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <div className="app">
            <header className="header">
              <Nav />
            </header>
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
