var formul = document.getElementById('formulario');
var result = document.getElementById('resultado');
var container = document.querySelector('.container ');

window.addEventListener('load', () => {
    formul.addEventListener('submit',buscarClima);
});


function buscarClima(event){
    
var ciudad_ = document.getElementById('ciudad').value;
var pais_ = document.getElementById('pais').value;

    event.preventDefault();
    
    

     if (ciudad_.trim()==="" && pais_.trim()==="" ){
        mostrarError('ambos campos son obligatorios');
    } else if(ciudad_.trim()==='') {  
        mostrarError('ambos campos son obligatorios');
    
    } else if (pais_.trim()===''){
    
        mostrarError('ambos campos son obligatorios');
    
    } else {
    
console.log('buscando clima...');

console.log(ciudad_);
console.log(pais_);
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

function consultarAPI(){


}
 }

 