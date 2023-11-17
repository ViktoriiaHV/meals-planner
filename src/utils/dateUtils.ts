export const formatWeekDay = (date: number, current: Date): string => {
  return new Intl.DateTimeFormat(navigator.language || "en-GB", {
    weekday: "long",
    day: "numeric",
  }).format(new Date(current.setDate(date)));
};

export const formatMonthYear = (date: number, current: Date): string => {
  return new Intl.DateTimeFormat(navigator.language || "en-GB", {
    year: "numeric",
    month: "long",
  }).format(new Date(current.setDate(date)));
};