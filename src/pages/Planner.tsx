export function Planner() {
  let curr = new Date();
  let week = [];

  const formatWeekDay = (date: number): string => {
    return new Intl.DateTimeFormat(navigator.language || "en-GB", {
      weekday: "long",
      day: "numeric",
    }).format(new Date(curr.setDate(date)));
  };

  const formatMonthYear = (date: number): string => {
    return new Intl.DateTimeFormat(navigator.language || "en-GB", {
      year: "numeric",
      month: "long",
    }).format(new Date(curr.setDate(date)));
  };

  for (let i = 1; i <= 7; i++) {
    let first = curr.getDate() - curr.getDay() + i;
    let day = formatWeekDay(first);
    week.push(day);
  }

  console.log(week);

  return (
    <div className="planner">
      <header className="planner__header">
        <h2>Current week: {week[0]} - {week[week.length - 1]}{" "}</h2>
        <h2>{formatMonthYear(curr.getMonth())}</h2>
      </header>
      <div className="planner__grid">
        {week.map((day) => (
          <div key={day}>{day.split(" ").join(", ")}</div>
        ))}
      </div>
    </div>
  );
}
