import localFont from "next/font/local";
import "./globals.css";

//components
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import PageTransition from "../components/PageTransition";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-pretendard",
});

export const metadata = {
  title: "민족사관고등학교 옹달샘",
  description:
    "민족사관고등학교 재학생 및 졸업생으로 이루어진 적정기술 해외봉사 동아리입니다.",
  keywords: "적정기술, 봉사, 민족사관고등학교, 해외봉사, 옹달샘",
  author: "Ongdalsam",
  robots: "index",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={pretendard.variable}>
        <ScrollToTopButton />

        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
