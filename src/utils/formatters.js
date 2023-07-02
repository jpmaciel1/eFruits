export const CurrencyFormat = (value) => {
  const formattedValue = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return formattedValue;
};
