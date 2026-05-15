export const metadata = {
  title: 'SPEC_beverage — 논알콜 칵테일 원데이 클래스',
  description: '3가지 논알콜 칵테일 — 무드와 균형, 그리고 시그니처',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
