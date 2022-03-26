const formatter = new Intl.ListFormat('fr-FR', {
  style: 'short',
  type: 'disjunction',
});
export const list = (items: string[]) => formatter.format(items);
