
const feedback = document.querySelector(".feedback");
//show cart

(function(){
	const cartInfo = document.getElementById("cart-info");
	const cart = document.getElementById("cart");


   cartInfo.addEventListener("click", function() {
      cart.classList.toggle("show-cart");
      //console.log(cart);

});
})();




// agregando items al cart

(function(){
		//selecciono todos los elemnt de esa clase
		const cartBtn = document.querySelectorAll(".store-img-icon");
			
	
		//iterar los elementos de cartBtn
			cartBtn.forEach(function(btn){
				//detector de eventos

				btn.addEventListener('click', function(llamada){
					//escuchando el click
					//console.log(llamada.target);

					//me aseguro q solo una vez se dispara el evento
					if(llamada.target.parentElement.classList.contains('store-img-icon')){
						//llamada completa a cada imagen al hacer click en el carro
						let fullCamino = llamada.target.parentElement.previousElementSibling.src;
						let pos = fullCamino.indexOf('img')+3;
						//console.log(pos);
						//una parte
						let partPath = fullCamino.slice(pos);
						//console.log(partPath);
						//objeto vacio
						const item = {};
						//la direccion donde estan las imagenes //uso de comillas invertidad //item.img = `img-cart${partPath}`;
						item.img = `img-cart${partPath}`;
					


						let nombre = llamada.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
						//console.log(nombre);

						let preci = llamada.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
						item.nombre = nombre;

						let partPreci = preci.slice(1).trim();
						item.preci = partPreci;

							//console.log(item);


						const cartItem = document.createElement('div');
						cartItem.classList.add(
							"cart-item",
							"d-flex",
							"justify-content-between",
							"text-capitalize",
							"my-3"
						);
												``
						cartItem.insertAdjacentHTML('afterbegin', `<img src="${item.img}" class="img-fluid  rounded-circle" id="item-img">
							<div class="item-text">
            <p id="cart-item-title" class="font-weight-bold mb-0">${item.nombre}</p>
              <span>$</span>
             <span id="cart-item-price" class="cart-item-price mb-0">${item.preci}</span>
        </div>
        <a href="#" id="cart-item-remove" class="cart-item-remove">
          <i class="fas fa-trash"></i>
        </a>`);


const cartt = document.getElementById('cart');
const total = document.querySelector('.cart-total-container');


cartt.insertBefore(cartItem, total);
showfeedback("agregado al carro Exitosamente","primary");

showtotal();
remover();

					}


				});

			});


			function showtotal(){

				const total = [];
				var sumatotal = 0;
				const items = document.querySelectorAll('.cart-item-price');
              	const totalfinal = document.querySelector('.cart-total-container');
			

				for(i=0; i<items.length; i++){

				total.push(parseFloat(items[i].textContent));
				sumatotal = total[i] + sumatotal;
				sumatotal.toFixed(2);
				}
				
				console.log(total);
				console.log(sumatotal);

	 			
			document.querySelector(".item-count").textContent = items.length;
			document.querySelector(".item-total").textContent = sumatotal.toFixed(2);
			document.querySelector("#cart-total").textContent = sumatotal.toFixed(2);

		

			}



			function remover(){
				const cartBorrar = document.querySelectorAll('.cart-item-remove');
				
				const  elem = document.querySelectorAll('.cart-item');

				elem.forEach(function(btn, pos, arreglo){

					




					    btn.addEventListener('click', function(llamada){
						console.log(btn);
						console.log(pos);
						console.log(arreglo);

						if(btn.parentNode){
							btn.parentNode.removeChild(btn);
						}
						



					});

				});
				
			}

	function showfeedback(text, action){
	feedback.classList.add("showItem", `alert-${action}`);
	feedback.innerHTML = `<p>${text}</p>`;
	setTimeout(function(){
		feedback.classList.remove("showItem", `alert-${action}`);
	}, 2000);
}			


		})();


