import "../styles/main.scss";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import AuthProvider from "@/context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pricing App",
  description: "Created By Kisakye Moses",
};

export default function RootLayout({ children }) {
  // bg-sky-950
  return (
    <html lang='en'>
      <AuthProvider>
        <body className={inter.className ? " bg-slate-950" : ""}>
          {/* <NavBar /> */}
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
