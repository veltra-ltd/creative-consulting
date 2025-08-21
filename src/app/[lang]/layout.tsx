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
    <html lang={lang || "en"}>
      <body className="bg-white text-black">
        {/* Fixed Header */}

        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
          <Header data={headerData} />

          {/* Optional sticky NavBar, or just flow element */}
          <NavBar data={navData} />
        </div>

        {/* Page Content */}
        <div className="py-[110px]">{children}</div>

        {/* Footer */}
        <Footer />
        {/* <Footer data={footerData} /> */}
      </body>
    </html>
  );
}
