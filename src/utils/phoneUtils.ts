export const formatPhoneNumber = (value: string): string => {
  // Remove todos os caracteres não numéricos
  const numbers = value.replace(/\D/g, '');
  
  // Se não tiver números, retorna vazio
  if (numbers.length === 0) return '';
  
  // Formata o número de acordo com o padrão +55 DD 9XXXX-XXXX
  let formatted = '+55';
  
  // Adiciona o DDD
  if (numbers.length >= 2) {
    formatted += ' ' + numbers.substring(0, 2);
  }
  
  // Adiciona os primeiros 5 dígitos do número
  if (numbers.length >= 7) {
    formatted += ' ' + numbers.substring(2, 7);
  }
  
  // Adiciona os últimos 4 dígitos do número
  if (numbers.length >= 11) {
    formatted += '-' + numbers.substring(7, 11);
  }
  
  return formatted;
}; 