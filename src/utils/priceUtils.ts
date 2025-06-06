
export const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

export const extractNumericPrice = (priceString: string): number => {
  if (!priceString) return 0;
  // Remove "R$", espaços.
  let numericString = priceString.replace(/R\$\s*/, '');
  // Remove pontos de milhar.
  numericString = numericString.replace(/\.(?=\d{3})/g, ''); 
  // Substitui a vírgula decimal por ponto.
  numericString = numericString.replace(',', '.');
  return parseFloat(numericString) || 0;
};
