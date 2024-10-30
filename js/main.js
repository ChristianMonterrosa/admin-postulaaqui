// Importar Bootstrap CSS y JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Importar jQuery
import $ from 'jquery';

// Asegurar que jQuery esté funcionando
$(document).ready(() => {
    console.log('Bootstrap 4.6.1 y jQuery están listos.');
});

// Toggle switch
// $(function () {
//     $("#customSwitch2").change(function () {
//         $(".show-info-law").hide();
//         if ($(this).is(":checked")) {
//             $(".show-info-law").hide();
//         } else {
//             $(".show-info-law").show();
//         }
//     });
// });


document.getElementById('customSwitch2').addEventListener('change', function () {
    const infoLaw = document.querySelector('.show-info-law');
    if (this.checked) {
        infoLaw.style.display = 'block'; // Mostrar
    } else {
        infoLaw.style.display = 'none';  // Ocultar
    }
});