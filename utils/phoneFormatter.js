export default function formatPhone(phoneNumber) {
  if (phoneNumber) {
    return phoneNumber.replace(/(\d{2})(\d{2})(\d{0,1})(\d{4})(\d{4})/, '+$1 ($2) $3 $4-$5');
  }
}