const dateFormatter = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'full' });
const dateFormatterShort = new Intl.DateTimeFormat('fr-FR', {
  dateStyle: 'long',
});
export const format = (date: string): string => {
  return dateFormatter.format(new Date(date));
};
export const formatShort = (date: string): string => {
  return dateFormatterShort.format(new Date(date));
};

export const yesterday = (): Date => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  yesterday.setHours(0, 0, 0, 0);
  return yesterday;
};
export const afterYesterday = (date: Date) => {
  return date > yesterday();
};
