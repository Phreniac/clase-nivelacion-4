// const lista_colores = [
//     '#800080', // Púrpura
//     '#8A2BE2', // Azul violáceo
//     '#9932CC', // Orquídea oscura
//     '#A020F0', // Violeta oscuro
//     '#BA55D3', // Orquídea media
//     '#C71585', // Rojo violeta medio
//     '#DA70D6', // Orquídea clara
//     '#DB7093', // Rosa claro
//     '#DDA0DD', // Lavanda
//     '#E6E6FA', // Lavanda claro
//     '#FF00FF', // Magenta
//     '#FF69B4', // Rosa intenso
//     '#FFB6C1', // Rosa claro
//     '#FFC0CB', // Rosa cáscara de huevo
//     '#FFD700', // Oro
//     '#FFDA79', // Melocotón
//     '#FFDEAD', // Almendra
//     '#FFE4E1', // Rosa nieve
//     '#FFE4FF', // Lavanda rosada
//     '#FFEBCD'  // Almendra claro
// ];
const tasks = [
  '<p>1. Agrega un evento con el método "addEventListener" <br> que permita que al posicionar el cursor sobre cualquier elemento de la lista de clases <br> "haciaejercicio" cambie el color de fondo de este a un color aleatorio</p>',
  "<p>2. El color debe quedar momentaneamente, de manera que quede seleccionado </p>",
  '<p>3. Al estar todos los elementos seleccionados se habilitará el botón al siguiente ejercicio "ejercicio2.html"</p>',
];

let index = 0;
const content_container = document.getElementById("content_container");
const changeText = (index) => {
  content_container.innerHTML = tasks[index];
};
content_container.addEventListener("mouseenter", () => {
  content_container.addEventListener("click", function () {
    index == 0 ? (index = 1) : index++;
    index == 3 ? (index = 0) : "";
    changeText(index);
  });
});
content_container.addEventListener("mouseleave", () => {
  index = 0;
});
//=======================================================
// Selecciona todos los elementos con la clase 'haciaejercicio'
const elements = document.querySelectorAll(".haciaejercicio");

// Función para generar un color aleatorio en formato RGB
const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

// Agrega un evento de 'mouseenter' y 'mouseout' a cada elemento
elements.forEach((element) => {
  // Genera un color aleatorio para el elemento
  const randomColor = getRandomColor();

  element.addEventListener("mouseover", () => {
    // Cambia el color de fondo del elemento al color aleatorio generado anteriormente
    element.style.backgroundColor = randomColor;
  });

  element.addEventListener("mouseout", () => {
    // Restablece el color de fondo del elemento a su valor original
    element.style.backgroundColor = "";
  });
});
const avanzarJuego = () => {
  location.href = "ejercicio2.html";
};
