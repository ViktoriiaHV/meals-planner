export function SidePanel({ children }: { children: React.ReactNode[] }) {
  return <div className="side-panel__wrapper">
    {children.map(component => component)}
  </div>
}