import { Poppins } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"]
})


export const metadata = {
  title: "GitHub User Finder",
  description: "GitHub user finder by Yusuf Hussein.",
  keywords: "GitHub Git Developer HTML CSS JavaScript React.js Next.js Software SEO optimized Yusuf Hussein"
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Toaster/>
        <Header/>
        {children}
      </body>
    </html>
  );
}
