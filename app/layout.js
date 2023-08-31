import "../styles/main.scss";
import { Inter } from "next/font/google";
import AuthProvider from "@/context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GITKnow",
  description: "GITKnow Created By Kisakye Moses",
};

export default function RootLayout({ children }) {
  // bg-sky-950
  return (
    <html lang='en'>
      <AuthProvider>
        <body className={inter.className ? " bg-slate-950" : ""}>
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
