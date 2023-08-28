import "../styles/main.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pricing App",
  description: "Created By Kisakye Moses",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className ? "bg-sky-950" : ""}>{children}</body>
    </html>
  );
}
