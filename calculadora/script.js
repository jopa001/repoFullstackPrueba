var miVariable;		//nombre separado por mayusculas simbolos _$ y numeros
miVariable=1;
console.log(typeof(miVariable));		//esta el log completo
miVariable=false;
console.info(typeof(miVariable));		//
miVariable='cadena';
//alert('Mensaje emergente javascript ['+miVariable+']');
console.warn(typeof(miVariable));		//hay un mensaje de error
miVariable=[];
console.error(typeof(miVariable));	//hay un error y se puede trazar

var a,b;

a=5;
b=3;
c=90;

console.log("a mas b= "+a+b);
console.log(a+b);
console.log("a menos b= "+a-b);
console.log(a-	b);
console.log("a por b= "+a*b);
console.log("a dividido b= "+a/b);
console.log("a modulo b= "+a%b);


//operaciones matematicas complejas 
console.log("a elevado b= "+Math.pow(a, b));
console.log("Seno de c radianes= "+Math.sin(c));  // of the angle x (given in radians).
console.log("Seno de c grados= "+Math.sin(c * Math.PI / 180));  // of the angle x (given in radians).
console.log("Retorna Euler = "+Math.E);  // of the angle x (given in radians).
/*
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E

 */

var v,f;
v=true;
f=false;
//Operadores logicos
console.log("verdad y falso -> ", v&&f);
console.log("verdad o falso -> ", v||f);
console.log("Negacion -> ", !v);

console.log("");
console.log("Mayor que");
console.log(5>4);
console.log(5<4);
console.log(5>=5);
console.log(5<=4);
var x=1;
var y="1";
console.log("Solor por valor -> ", x==y);
console.log("Por valor y tipo -> ", x===y);
console.log("Por negacion y valor-> ", x!==y);
console.log("Por negacion y valor-> ", x!==y);



//Operadores unarios
var i=0;
i++; //sufijo
++i; //prefijo
i--;
--i;
i+=2;
i-=2;
i*=3;
i/=5;

var j=0;
console.log("Prefijos Sufijos");
console.log('antes',j++);
console.log('durante',j);
console.log('despues',++j);


//Estructuras de control
console.log("");
console.log("Estructuras de control");
if(5<3) {
	console.log("Entra al IF Verdadero");
	}
else if (5>9)
	{console.log("NO SE EJECUTA");
	}
else {console.log("SI SE EJECUTA");

}

console.log("");
console.log("SWITCH");
switch (1) {   //no se deja al break para ver el error
	case 1: {
		console.log("Entro numero 1");
		
	}
	case '1': {
		console.log("Entro caracter 1");
		break;
	}
	case 2: {
		console.log("Entro numero 2");
		break;
	}
	case 3: {
		console.log("Entro numero 3");
		break;
	}
	default: {
		console.log("Entra al caso por defecto");
	}
}


//Array
console.log("");
console.log("ARRAY");

var arreglo=[1,false,[],'ooo'];
console.log("Tamaño del array -> ",arreglo.length);
console.log("Tamaño del array -> ",arreglo[1]);

arreglo.push(8);		//asigna el valor despues como ultimo en la fila
console.log("Valor en celda 4 -> ",arreglo[4]);

arreglo[10]=3;
console.log("Tamaño del array -> ",arreglo.length);
arreglo.pop();  //saca el ultimo valor del array
console.log("Tamaño del array POP -> ",arreglo.length);

console.log("IndexOf 1 -> ",arreglo.indexOf(8));
console.log("Slice o Subarray -> ", arreglo.slice(1, 4));
console.log("IndexOf Numero inexistente -> ",arreglo.indexOf(547));

console.log("JOIN -> ",arreglo.join());
console.log("JOIN -> ",arreglo.join(' | '));

console.log("SPLICE O SUBARREGLO 0,20 -> ",arreglo.splice(0,20));



/*   FUNCIONES   */
 function imprimirSiete (xx) {
 	for (ii=0; ii<xx; ii++){
		console.log("Muchos siete impresos"); 		
 	}
 }

function multiplicaNumero (a,b) {
	console.log(a*b); 		
 }

 function retornaNumero (a,b) {
	return (a*b); 		
 }

imprimirSiete(10);
multiplicaNumero(2,3);
multiplicaNumero(3,5);
multiplicaNumero(2,11);

console.log(retornaNumero (5,14));

//===================================================================================================
/* Lenguaje Funcional */
/* Programacion funcional dentro de javascript  */

//CALLBACK

var f1= function (a,b) {  // esta variable es una funcion, ojo la funcion no esta definida, por tanto dentro de la variable queda.
	return a*b;
}

function recibeOtraFuncion (nuevaFuncion) {  //Aqui va a recibir funciones
	return nuevaFuncion(5,20);  //ESTOS SON LOS NUMEROS QUE ALIMENTAN LAS FUNCIONES
}

console.log("Mande una funcion como parametro", recibeOtraFuncion(f1));
console.log("Mande una resta embebida a una funcion", recibeOtraFuncion(function (ww,xx) { return ww-xx; }    )); 		


//===================================================================================================
/* Ciclos - Bucles */

function cicloFor () {
	for (i=0;i<10;i++) {  //No necesita unicializar la variable
		console.log("FOR - Va a hacer", i);
	}
}

function cicloWhile () {
	i=0; 	//No olvidar inicializar la variable
	while (i<10) {
		console.log("WHILE - Va a hacer", i);
		i++;	
	}
}

function cicloDoWhile () {
	i=0;	//No olvidar inicializar la variable
	do {
		console.log("DO WHILE - Va a hacer", i);
		i++;	
	}while (i<10);
}
console.log("Llama FOR");
cicloFor ();
console.log("Llama WHILE");
cicloWhile ();
console.log("Llama DO WHILE");
cicloDoWhile();

var arre = [1,2,3];

arre.forEach(function (item) {
	console.log("El elemento es: ->  ", (item*3));
});//ojo mirar como cierra este ciclo.


var t5 = arre.map(function (item) {
	return item*9;
});

console.log(t5);


function ejecuta () {
	var a = parseInt(document.getElementById('a').value);	
	var b = parseInt(document.getElementById('b').value);	
	var s = suma (a,b);
	document.getElementById('resultado').innerText = "El resultado es: -> " + s;
}


/* Tomar un par de input y calcular todos los valores, 
mostrando la alerta de división por cero y que acepte letras, 
lo que venga debe ser un numero.

CREAR DENTRO DE UNA CARPETA QUE SE LLAME CALCULADORA

*/

/* NODE Ejecuta por lado del servidor */


