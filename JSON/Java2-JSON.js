/* EMASCRIPT 5
TYPESCRIPT -> ECMAScript (European Computer Manufacturer Association) 7, ANGULAR WOR   

Lenguaje orientado a prototipos


LA PALABRA RESERVADA PROTOTYPE EXPONE LOS METODOS PARA QUE PUEDAN SER LLAMADOS DESDE FUERA


OJO PASAR CONTEXTOS PARA QUE EXISTAN EN OTRAS FUNCIONES
*/

/*

//PARTE 1 VARIABLES LOCALES Y GLOBALES

var varGlobal = 1;

console.log("Variable Global -> ",varGlobal);

function sumar () {
 var _c = 1;
 console.log("_c ->",_c);
 ++varGlobal;
 ++_c;
 console.log("Variable Global -> ",varGlobal);
}

sumar();
sumar();
sumar();
sumar();

console.log("Variable Global -> ",varGlobal);

*/



/*

// PARTE 2 CLASES  EN JAVA CON ECMA-SCRIPT
var UserJJ = ( function () {
	function UserJJ (nombre, edad) {   //constructor, ojo el retorno se llama igual que abajo
		this.id= 1;
		this.nombre= nombre;
		this.edad= edad;
		this.lastname= "";
	}
	
	UserJJ.prototype.correr = function () {  //getter y setter
		console.log(this.nombre + ' esta corriendo ');
	};

	UserJJ.prototype.cambioNombre = function (nombre) {  
		this.nombre=nombre;
	};

	UserJJ.prototype.getEdad = function () {  
		return this.edad;
	};

	UserJJ.prototype.cumpleaños = function () {  
		return this.edad++;
	};
	return 	UserJJ;		//constructor, ojo el retorno se llama igual que constructor y que la variable de arriba

} ()  //con este parèntesis obliga a ejecutar esta clase.
);  


var UsuarioJose = new UserJJ ('andres', 12);
UsuarioJose.correr();
console.log(UsuarioJose.edad);
console.log(UsuarioJose.cumpleaños());
console.log(UsuarioJose.edad);
*/




//JSON INTERCAMBIO DE INFORMACION


var objeto = {
	edad:56,		//llaves unicas  	la forma correcta es  "edad":32,
	nombre: 'pepe',	//					la forma correcta es  "nombre":"pepe",
	documento: {
		tipo: ['cc', 'ce'],
		numero: 123456798
	}
};

objeto['edad'] = 45;
console.log(objeto);

function getKey (a) {
	switch (a) {
		case 1:
			return 'edad';  // como tiene el retorno, hay se detiene la funcion no necesita el break;
		case 2:
			return 'edad';  // como tiene el retorno, hay se detiene la funcion no necesita el break;
		default:
			return 'nombre';
	}
}

objeto['existe'] = 10;
objeto['existe'] = 10;
objeto.existe = 9;
console.log(objeto[getKey(1)]);
console.log(objeto[getKey(2)]);
console.log(objeto[getKey(89)]);



