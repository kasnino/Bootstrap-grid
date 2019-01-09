



/*
* Expresion de funcion indemidatemnte invocada  IIFE
* 
*
*
*
*
**/
(function(){

let imagenList =[];
let counter =0;

const images    =  document.querySelectorAll('.store-img');
const container =  document.querySelector('.lightbox-container');
const cerrar    =  document.querySelector('.lightbox-close');
const item      =  document.querySelector('.lightbox-item');
const btnLeft   =  document.querySelector('.btnLeft');
const btnRight  =  document.querySelector('.btnRight');



//agrego las img en un vector
images.forEach(function(evento){
	imagenList.push(evento.src);
      });	console.log(imagenList);


//add la clase show 
images.forEach(function(evento){
	evento.addEventListener("click", function(llamada){
	      container.classList.add("show"); //add la clase show
	      let srcc = llamada.target.src;
	      counter = imagenList.indexOf(srcc);
	      

         item.style.backgroundImage = `url(${srcc})`;
	  });
});

cerrar.addEventListener("click", function(){
      container.classList.remove("show"); //add la clase show

})

btnLeft.addEventListener("click",function(){
	counter--;
	if(counter < 0){
		counter = imagenList.length - 1;
	}
	item.style.backgroundImage = `url(${imagenList[counter]})`;
	console.log(counter);


});

btnRight.addEventListener("click",function(){
counter++;
	if(counter > imagenList.length - 1){
		counter =0;
	}
	item.style.backgroundImage = `url(${imagenList[counter]})`;
	console.log(counter);
});



})();