// Función para verificar el inicio de sesión del usuario
function checkLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Verifica las credenciales
  if (username === "agustina" && password === "123") {
      // Redirige a la página del alumno con el nombre de usuario como parámetro
      window.location.href = `alumno.html?usuario=${username + " ledesma"}`;
      
  } else if (username === "rodrigo" && password === "123") {
      // Redirige a la página del docente con el nombre de usuario como parámetro
      window.location.href = `docente.html?usuario=${username + " Cianciulli"}`;
    
  } else {
      // Muestra un mensaje de error si las credenciales son incorrectas
      alert("Credenciales incorrectas. Inténtalo de nuevo.");
  }
}




// PARA LOS ALUMNOS.
// verifico si entro un usuario y lo envio.
document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get('usuario');

  //Paso a mayusculas para enviar nombres o apellidos sin mayusculas
  const usernameMayusculas = username.toUpperCase();
  const usernameElement = document.getElementById("username");
  
  if (usernameElement) {
    usernameElement.innerText = usernameMayusculas;
  }
});



function reservaCurso() {
  // Obtener los valores del formulario
  const charla = document.getElementById("charla").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;
  const email = document.getElementById("email").value;
  const observaciones = document.getElementById("observaciones").value;

  // Validar que todos los campos estén completos ( si falta uno que avise, entra por el else.)
  if (charla && fecha && hora && email && observaciones) {
    // Mostrar mensaje de éxito
    document.getElementById("comentario").innerText = "Se reservo tu correctamente";
  } else {
    // Mostrar mensaje de error
    document.getElementById("comentario").innerText = "Verifique los datos del formulario, falta completar uno o mas campos!";
  }
}

// Tuve que poner el json directamente en el codigo porque si lo traia desde el json algunos
// navegadores me lo evitaba ( saltaba el cortafuego del navegador)
const clasesData = [

    {
      "dia": "Lunes",
      "hora": "9:00 AM",
      "materia": "Programacion Arduino",
      "aula": "Aula 101",
      "temario": "Definir puertos de entrada y salida"
    },
    {
      "dia": "Martes",
      "hora": "14:00 PM",
      "materia": "Programacion Arduino",
      "aula": "Aula 102",
      "temario": "Definir puertos de entrada y salida"
    },
    {
      "dia": "Miércoles",
      "hora": "18:00 PM",
      "materia": "Mecatronica I",
      "aula": "Aula Magna",
      "temario": "Presentacion del programa Robotica para adolescentes"
    },
    {
        "dia": "Jueves",
        "hora": "14:00 PM",
        "materia": "Programacion C",
        "aula": "Aula 101",
        "temario": "While y do While"
      },
      {
        "dia": "Viernes",
        "hora": "18:00 PM",
        "materia": "Programacion C",
        "aula": "Aula 102",
        "temario": "While y do While"
      },
      {
        "dia": "Sabado",
        "hora": "10:00 AM",
        "materia": "Mecatronica I",
        "aula": "Aula 103",
        "temario": "Armado de proyecto"
      }
];

// Corrige la clase del contenedor
const clasesContainer = document.querySelector('.clases-container');

clasesData.forEach((clase) => {
  // Creo divs para luego editarlos en CSS
  const card = document.createElement('div');
  card.classList.add('clase-recuadro');
  card.innerHTML = 
  `
      <h4>${clase.dia} - ${clase.hora}</h4>
      <p><strong>Materia:</strong> ${clase.materia}</p>
      <p><strong>Aula:</strong> ${clase.aula}</p>
      <p><strong>Temario:</strong> ${clase.temario}</p>
  `;
  clasesContainer.appendChild(card);
});
