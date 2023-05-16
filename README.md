# ReboundModulo3Sesion8

Rebound Módulo 3 Sesión 8

CUE: DATOS ÚNICOS Y OBJETOS ÚTILES DE ES6
REBOUND EXERCISE: UTILIZANDO DESTRUCTURING Y EL OPERADOR SPREAD
Para resolver este ejercicio, anteriormente debe haber revisado la lectura y los videos del CUE: Datos 
Únicos y Objetos Útiles de ES6.
EJERCICIO:
Dadas las demandas de salud para mantener el orden en el aforo de personas en su interior, un bar local 
ofrece a sus clientes una fecha de reserva que pueden elegir en línea. El formulario para hacerlo es el 
siguiente:
Como en cualquier establecimiento que vende alcohol, a este bar no pueden acceder personas menores 
de la edad legal para consumirlo, por lo que ningún menor de 18 años puede hacer una reserva en línea. 
Tu tarea es crear este formulario, e implementar la siguiente lógica: una vez que un usuario lo ha 
completado, y ha pulsado “enviar”, tu código tiene que almacenar todos los valores del formulario en un 
objeto "reserva". El desafío aquí es que debes utilizar un Proxy con su manejador para intervenir; pues si la 
edad es inferior a 18 años, tu proxy debe mostrar una alerta que indique lo siguiente:
Pero si la edad ingresada es mayor a 18 años, entonces tu Proxy debe manejar estos valores y realizar el 
almacenamiento de datos en el objeto “reserva”, el cual se mostrará por consola para comprobar el 
correcto funcionamiento de la lógica.
