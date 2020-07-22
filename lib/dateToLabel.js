const fixNumberDigits = (number, digits = 2) =>
  `${"0".repeat(digits - 1)}${number}`.slice(
    -Math.max(digits, `${number}`.length)
  );

export const spainMonths = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

export const dateToParts = (date) => {
  const [day, month, year] = new Date(
    new Date(date || new Date()).toISOString()
  )
    .toLocaleDateString()
    .split("/")
    .map(Number);

  const [hour, minute, seconds] = new Date(
    new Date(date || new Date()).toISOString()
  )
    .toLocaleTimeString()
    .split(":")
    .map(Number);

  const monthLabel = spainMonths[month - 1];

  return {
    day,
    month,
    monthTwoDigits: fixNumberDigits(month),
    year,
    monthLabel,
    hour,
    minute,
    seconds,
  };
};

export const dateToLabel = (date, time) => {
  const { day, monthLabel, year, hour, minute, seconds } = dateToParts(date);
  return `${fixNumberDigits(day)} de ${monthLabel} de ${year}${
    time ? ` ${fixNumberDigits(hour)}:${fixNumberDigits(minute)}` : ""
  }`;
};

export const yearsDiffToNow = (date) => {
  const { year } = dateToParts(date);
  const { year: currentYear } = dateToParts();
  return currentYear - year;
};

export const timeToLabel = (date) => {
  const { hour, minute } = dateToParts(date);
  return `${fixNumberDigits(hour)} : ${fixNumberDigits(minute)}`;
};
