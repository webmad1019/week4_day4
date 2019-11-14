# week4_day4

> Express | Route Params & Query String (GET)
>
> Express | Requesta body (POST)


## Main points: MVC

- El Modelo Vista Controlador es un patrón de diseño de software [(ver imagen)](https://i.imgur.com/LUhoPkS.png):

  * La petición del cliente (GET o POST) es gestionada mediante la ruta, que contiene el modelo.
  * El modelo realiza la consulta a la BBDD.
  * El modelo recoge la respuesta de la BBDD y la envía a la vista.
  * La vista integra los datos previo a ser devuelta al navegador para ser renderizada.


## Main points: Route params & Query strings

- Los Route Params & Query Strings permiten enviar información en una petición de tipo GET desde el navegador al servidor, a través de la URL.

- Son secciones de la URL con valores que pueden ser recibidos en el endpoint, en forma de objeto.

- Los Route Params son recibidos como un objeto presente en **req.params**, donde cada clave es el nombre indicado en el endpoint (tras dos puntos), y el valor es el indicado en esa posición de la URL.

- Los Query Strings son recibidos como un objeto presente en **req.query**, que recibe todos los pares key=value indicados en la URL tras la interrogación (?)


## Main points: Request body

- El req.body contiene la información enviada mediante una petición de tipo POST desde el navegador al servidor, a través de la URL.

- Cada clave del objeto es el valor del atributo **name** del input, asumiendo como su valor el del propio input.



## Apuntes finales

- La etiqueta **form** dispone de dos atributos: action (dónde se envía la información) y method (método de envío - GET por defecto)

- Es posible disponer de dos controladores para un mismo endpoint (uno para GET y otro para POST)

- Express puede acceder al **req.body** de las peticiones POST gracias a la dependencia Body Parser
