import { Header } from "../components/Header";

export function Layout({
  children,
}: {
  children: [React.ReactNode, React.ReactNode];
}) {
  const [left, right] = children || [];
  return (
    <div className="layout__wrapper">
      <Header />
      <div className="layout__main-section">
        <div className="layout__left">{left}</div>
        <div className="layout__right">{right}</div>
      </div>
    </div>
  );
}
