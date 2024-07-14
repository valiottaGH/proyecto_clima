var formul = document.getElementById('formulario');
var result = document.getElementById('resultado');
var container = document.querySelector('.container ');

window.addEventListener('load', () => {
    formul.addEventListener('submit',buscarClima);
});


function buscarClima(event){
    
var ciudad= document.getElementById('ciudad').value;
var pais= document.getElementById('pais').value;

    event.preventDefault();
    
    

     if (ciudad.trim()==="" && pais_.trim()==="" ){
        mostrarError('ambos campos son obligatorios');
    } else if(ciudad.trim()==='') {  
        mostrarError('ambos campos son obligatorios');
    
    } else if (pais.trim()===''){
    
        mostrarError('ambos campos son obligatorios');
    
    } else {
    
console.log('buscando clima...');

console.log(ciudad);
console.log(pais);
 }
}
function mostrarError(mensaje){
    const alerta = document.createElement('div');
   alerta.textContent=mensaje;
   alerta.classList.add ('bg-red-100', 'border-red-400',
   'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center') 
   alerta.innerHTML = `<strong class="font-bold"> Error! </strong>
<span class="block"> ${mensaje} </span>`
 container.appendChild(alerta);

    setTimeout(function() {
        alerta.remove(); 
}, 5000);
return

function consultarAPI(ciudad, pais){
    const appId = '70b869dad88fa9bc91529e05fab4cde8';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`)
    .then(response =>  {response.json(); } )

     .then(data => {console.log(data); } )
   }

 }

