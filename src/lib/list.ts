const formatter = new Intl.ListFormat('fr-FR', {
  style: 'short',
  type: 'conjunction',
});
export const list = (items: string[]) => formatter.format(items);
