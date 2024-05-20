export function formatDateText(date) {
  const options = { month: 'long', year: 'numeric', timeZone: 'UTC' };
  const formattedDate = new Date(date).toLocaleDateString('pt-BR', options);
  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}

export function formatDate(date) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'UTC' };
  return new Date(date).toLocaleDateString('pt-BR', options);
}

export function formatMoney(value) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}