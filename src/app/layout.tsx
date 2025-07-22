
import "./globals.css";

export const metadata = {
  title: "Creative Consulting",
  description: "Next.js i18n app root layout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
