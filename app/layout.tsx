import Header from "../components/Header";
import "../styles/global.css";

export const metadata = {
  title: {
    template: "%s | 개쩌는사이트",
    default: "진짜쩌는사이트",
  },
  description: "아직도 모르세유?",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
