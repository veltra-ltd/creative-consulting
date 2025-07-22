// import Footer from "@/components/layouts/footer";
import { Footer } from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import NavBar from "@/components/layouts/nav-bar";
import getLangData from "@/lib/translator/getLangData";
import type {
  // FooterData,
  HeaderData,
  NavData,
  SupportedLang,
} from "@/types/lang";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: SupportedLang }>;
}) {
  const { lang } = await params;

  const headerData: HeaderData = await getLangData(lang, "header");
  const navData: NavData = await getLangData(lang, "nav");
  // const footerData: FooterData = await getLangData(lang, "footer");

  return (
    <html lang={lang}>
      <body className="bg-white text-black">
        {/* Fixed Header */}
        <Header data={headerData} />

        {/* Optional sticky NavBar, or just flow element */}
        <NavBar data={navData} />

        {/* Page Content */}
        {children}

        {/* Footer */}
        <Footer />
        {/* <Footer data={footerData} /> */}
      </body>
    </html>
  );
}
