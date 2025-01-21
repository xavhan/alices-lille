export const time = (t: string, locale = "fr-FR") => {
  const [h = 0, m = 0, s = 0] = t.split(":").map(Number);
  const dummyDate = new Date(2000, 0, 0, h, m, s);

  return dummyDate.toLocaleTimeString(locale, { hour: "numeric" });
};

export const timerange = (range = ["", ""], locale?: string) => {
  return range.map((t) => time(t, locale)).join(" - ");
};
