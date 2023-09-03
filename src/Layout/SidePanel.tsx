export function SidePanel({ children }: { children: React.ReactNode[] }) {
  return <div className="layout__side-panel">
    {children.map(component => component)}
  </div>
}