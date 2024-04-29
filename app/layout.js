import "./globals.css";

export const metadata = {
  title: "Next Level Food",
  description: "A practice Next.js project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
