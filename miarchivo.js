alert("BIENVENIDO/A! Comenzamos con el quiz!");


function ingresarUsuario(){
let nombre = prompt("Primero, ingresa tu usuario y/o mail:");
while(nombre==="" || nombre ===null){
	nombre = prompt("Ingresa tu usuario y/o mail:");
}
}

ingresarUsuario()


function rta1(){
	let pregunta1;

	do{
		pregunta1 = prompt("Segun la cancion `Despacito, suavemente, amame en... \n1) camara lenta´ \n2) esta habitacion´");
	} while(pregunta1 != 1 && pregunta1!= 2);

	switch (pregunta1) {
		case "1": 
			return "1";
		case "2":
			return "0";
	}	
}

rta1();
	

function rta2(){
	let pregunta2;

	do{
		pregunta2 = prompt("¿Qué cantante es conocido como el Rey del Pop? \n1) Justin Bieber \n2) Michael Jackson´");
	} while(pregunta2 != 1 && pregunta2!= 2);

	switch (pregunta2) {
		case "1": 
			return "0";
		case "2":
			return "1";
	}
}

rta2();


function rta3(){
	let pregunta3;

	do{
		pregunta3 = prompt("¿Rosa María es el verdadero nombre de qué actriz? \n1) Mirtha Legrand \n2) Marcela Tinayre");
	} while(pregunta3 != 1 && pregunta3 != 2);

	switch (pregunta3) {
		case "1": 
			return "1";
		case "2":
			return "0";
	}	
}

rta3();




let resultadoPregunta1 = 0
let resultadoPregunta2 = 0
let resultadoPregunta3 = 0
let resultadoFinal = 0

// bueno mi problema empieza acá . la idea seria generar estas variables aun vacias. despues no sé como traer el resultado de las preguntas para sumarlas y ahi que se devuelva un promp con el resultado

function resultadosParciales() {
	resultadoPregunta1 = rta1()
	resultadoPregunta2 = rta2()
	resultadoPregunta3 = rta3()
	resultadoFinal = sumaResultados(resultadoPregunta1, resultadoPregunta2, resultadoPregunta3)
}

function sumaResultados() {
	return resultadoPregunta1 + resultadoPregunta2 + resultadoPregunta3
}


function final(resultadoFinal) {
	if(resultado === 0){
		return prompt("OOPS. VOLVE A INTENTARLO")
	}else if(resultado === 1){
		return prompt("FLOJO PERO VA QUERIENDO")
	}
	else if(resultado === 2){
		return prompt("2 DE 3, MUY BIEN!")
	}
	else if(resultado === 3){
		return prompt("EXCELENTE!")
	}
}
