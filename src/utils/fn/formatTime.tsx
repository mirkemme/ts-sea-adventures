// formatta l'orario nel formato italiano hh:mm
export function formatTime(date) {
  const dt = new Date(date);
  return dt.toLocaleTimeString("it-IT").slice(0, 5);
}
