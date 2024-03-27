export const DateParser = (date: string) => {
  const parsedDate = new Date(date);
  const formattedDate = parsedDate.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const hours = parsedDate.getHours();
  const minutes = parsedDate.getMinutes();
  const formattedTime =
    (hours % 12) +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    " " +
    (hours < 12 ? "AM" : "PM");

  return `${formattedDate}, ${formattedTime}`;
};
