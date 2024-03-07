var ingresar = document.getElementById("botones")
ingresar.addEventListener("click", calculoController);
var Buscar = document.getElementById("buscar2")
Buscar.addEventListener("click", calculoController2);


function calculoController(event) {
    event.preventDefault();

    // Recibir datos de caja de texto
    let numeroIngresado = parseInt(document.querySelector("#txtNumero").value);
    let numeroIngresadoInput = document.querySelector("#txtNumero");

    // Validar si la caja de texto está vacía
    if (numeroIngresadoInput.value.trim() == "") {
        alert("Ingresa un valor en la caja de texto");
        return;  // Detener la ejecución si está vacía
    }

   

    numeroTDA(numeroIngresado);
}
function calculoController2(event) {
    event.preventDefault();

    // Recibir datos de caja de texto
    let buscarValor = parseInt(document.querySelector("#buscar").value);
    let buscarValorInput = document.querySelector("#buscar");

    // Validar si la caja de texto está vacía
    if (buscarValorInput.value.trim() == "") {
        alert("Ingresa un valor en la caja de texto");
        return;  // Detener la ejecución si está vacía
    }
    

   

    searchElement(buscarValor);
}
let arrayToSearch = [];

const numeroTDA = (numeroIngresado) => {
    
 
     // Obtener el número de elementos
     const arrayLength = numeroIngresado;
 
     // Validar que se haya ingresado un número positivo
     if (arrayLength <= 0 || isNaN(arrayLength)) {
         alert('Ingrese un número válido de elementos.');
         return;
     }
 
     // Solicitar al usuario ingresar cada elemento uno por uno
     for (let i = 0; i < arrayLength; i++) {
         const element = prompt(`Ingrese el elemento ${i + 1}:`);
         arrayToSearch.push(parseInt(element));
         if (!element) {
            alert("Introduzca números válidos para todos los elementos.");
            return;
        }
     }
 
     // Mostrar el input para buscar el elemento
     document.getElementById('buscar').style.display = 'block';
     document.getElementById('buscar2').style.display = 'block';
     document.getElementById('icono').style.display = 'block';

    
   
}
function searchElement(buscarValor) {
    // Obtener el elemento a buscar
    const searchKey = buscarValor;

    // Validar que se haya ingresado un número
    if (isNaN(searchKey)) {
        alert('Ingrese un número válido.');
        return;
    }

    // Realizar la búsqueda secuencial
    sequentialSearch(parseInt(searchKey));
}

function sequentialSearch(searchKey) {
    let found = false;
    let index = -1;

    for (let i = 0; i < arrayToSearch.length; i++) {
        if (arrayToSearch[i] === searchKey) {
            found = true;
            index = i;
            break;
        }
    }

    // Mostrar el resultado en la página
    displayResult(found, index,searchKey);
}

function displayResult(found, index,searchKey) {
    const outputDiv = document.getElementById('resultado2');
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ` [${arrayToSearch.join(', ')}]`;
    
    

    if (found) {
        outputDiv.innerHTML = `El número ${searchKey} fue encontrado en la posición ${index}.`;
    } else {
        outputDiv.innerHTML = `El número no fue encontrado en el array.`;
    }
}



