const dateFormatter = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'full' });
export const format = (date:string): string => {
  return dateFormatter.format(new Date(date));
}
