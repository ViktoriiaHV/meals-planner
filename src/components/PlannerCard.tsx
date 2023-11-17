export function PlannerCard({ day, children }: { day: string, children?: React.ReactNode }) {
  return (
    <div key={day} className="planner-card">
      <h3>{day.split(" ").join(", ")}</h3>
        <div>Planned meal 1</div>
        <div>Planned meal 2</div>
        {children}
    </div>
  );
}
