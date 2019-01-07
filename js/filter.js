
(function(){
	const filtroBtn = document.querySelectorAll('.fliter-btn');




filtroBtn.forEach(function(elemento, pos, arreglo){



   elemento.addEventListener("click", function(evento) {
      
      console.log("hizo click");

      evento.preventDefault();
      const value =  event.target.dataset.filter;

      // console.log(evento.target.textContent);
      console.log(value);
      const items = document.querySelectorAll(".store-item");

      items.forEach(function(filtro){

      	if(value === 'all'){
      		filtro.style.display = 'block';

      	}else {

      		if(filtro.classList.contains(value)){
      			filtro.style.display = 'block';
      		}
      		else {
      				filtro.style.display = 'none';
      		}
      	}


      });





});


});



})();



//search buscador por input
(function(){

const input = document.querySelector(".form-control");
const buscar = document.querySelector(".input-group-text");
                                    

  
buscar.addEventListener('click', function (e) {


   
    console.log("presiono buscar");
   // 13 is enter
const items = document.querySelectorAll(".store-item");


    items.forEach(function(filtro){
        console.log(input.value);
       // if (e.keyCode == 13) {
      if(input.value == 'todo'){
      	filtro.style.display = 'block';

      }else {

      		if(filtro.classList.contains(input.value)){
      			filtro.style.display = 'block';
      		}
      		else {
      				filtro.style.display = 'none';
      		}
      	}
//}

      })
    	

      // code for enter

 });  





})();