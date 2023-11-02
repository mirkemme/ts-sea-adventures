// aggiunge uno "0" davanti ai giorni e ai mesi da 1 a 9
function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

// formatta la data nel formato gg-mm-aaa
export function formatDate(date) {
  const dt = new Date(date);

  return [
    padTo2Digits(dt.getDate()),
    padTo2Digits(dt.getMonth() + 1),
    dt.getFullYear(),
  ].join("/");
}
