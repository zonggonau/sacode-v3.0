import Header from "@/components/config/header";
import Footerconfig from "@/components/config/footerconfig";
import Footer from "@/components/config/footer";
import JoinSection from "@/components/home/joinsection";
import Head from "./head";

export const metadata = {
  title: "SaCode",
  url: "https://sacode.web.id",
  description: "Komunitas Teknologi Informasi dan Sekolah Coding di Papua.",
  images: [
    {
      url: "../public/assets/img/avatar/footer-avatar.png",
      width: 800,
      height: 600,
    },
  ],
};

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
        <Footerconfig />
      </body>
    </html>
  );
}
