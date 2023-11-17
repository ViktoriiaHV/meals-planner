import { PlannerCard } from "../components/PlannerCard";
import { formatMonthYear, formatWeekDay } from "../utils/dateUtils";

export function Planner() {
  let curr = new Date();
  let week = [];

  for (let i = 1; i <= 7; i++) {
    let first = curr.getDate() - curr.getDay() + i;
    let day = formatWeekDay(first, curr);
    week.push(day);
  }

  console.log(week);

  return (
    <div className="planner">
      <header className="planner__header">
        <h2>
          Current week: {week[0]} - {week[week.length - 1]}{" "}
        </h2>
        <h2>{formatMonthYear(curr.getMonth(), curr)}</h2>
      </header>
      <div className="planner__grid">
        {week.map((day) => <PlannerCard day={day}></PlannerCard>)}
      </div>
    </div>
  );
}
