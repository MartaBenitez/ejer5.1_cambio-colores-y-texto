function cambiarColoresYTexto()
{
	let lista_parrafos=document.getElementsByTagName("p");
		for(i=0;i<lista_parrafos.length;i++){
			lista_parrafos[i].style.color="red";
			lista_parrafos[i].innerHTML="ROJO";
		}

	let lista_divs=document.getElementsByTagName("div");
		for(i=0;i<lista_divs.length;i++){
			lista_divs[i].style.color="green";
			lista_divs[i].innerHTML="VERDE";
		}
}