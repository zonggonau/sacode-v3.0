import Script from "next/script";
import Header from "@/components/config/header";
import Footerconfig from "@/components/config/footerconfig";
import Footer from "@/components/config/footer";
import JoinSection from "@/components/home/joinsection";
import Head from "./head";

export default function RootLayout({ children }) {
  return (
    <html className="no-js" lang="en">
      <Head />
      <body className="homepage-4">
        <div id="scrollUp" title="Scroll To Top">
          <i className="fas fa-arrow-up"></i>
        </div>
        <div className="main">
          <Header />
          {children}
          <JoinSection />
          <Footer />
        </div>
        <div id="example"></div>
      </body>
      <Footerconfig />
    </html>
  );
}
