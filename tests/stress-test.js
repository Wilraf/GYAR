// Importera k6
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  // Konfigurationer till stresstestet
  stages: [
    { duration: '2m', target: 20 },  // Under 2 minuter ökar virtuella användare från 0 till 20.
    { duration: '2m', target: 40 },  // Efter 2 minuter till ökas det upp till 40 virtuella användare.
    { duration: '2m', target: 60 },  // Efter 2 minuter till ökas det upp till 60 virtuella användare.
    { duration: '2m', target: 80 },  // Efter 2 minuter till ökas det upp till 80 virtuella användare.
    { duration: '2m', target: 100 }, // Efter 2 minuter till ökas det upp till 100 virtuella användare.
  ],
};

// Nedan finns alla directory funktioner, det är bara att ta bort kommentarerna för den sidan man vill köra
// PS: Ha ej på fler än en funktion uppe samtidigt.

// // UTGANGSPUNKT
// export default function () {
//   // Den sida virtuella användarna ska åt
//   http.get('https://blixter.online/utgangspunkt/index.html');

//   // Pausa virtuella användare sova 1 sekund
//   sleep(1);
// };

// MATERIALIZE
// export default function () {
//   // Den sida virtuella användarna ska åt
//   http.get('https://blixter.online/materialize/index.html');

//   // Pausa virtuella användare sova 1 sekund
//   sleep(1);
// };

// BOOTSTRAP
// export default function () {
//   // Den sida virtuella användarna ska åt
//   http.get('https://blixter.online/bootstrap/index.html');

//   // Pausa virtuella användare sova 1 sekund
//   sleep(1);
// };

// Spectre CSS
export default function () {
  // Den sida virtuella användarna ska åt
  http.get('https://blixter.online/spectre/index.html');

  // Pausa virtuella användare sova 1 sekund
  sleep(1);
};