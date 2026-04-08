¿Que significa staus 20l created? en donde aparece
¿Como verifico la actualización de los datos por medio de la terminal?
Cuales son los status existentes y comunes
¿Cuando haccer una peticion de tipo PATCH?
¿Que es SOAP, cuales son las diferencias con REST?
¿Que es GraphQl, cuales son las diferencias con REST?

Solucion

1.R/:El código de estado 201 Created indica que una solicitud fue exitosa y que un nuevo recurso ha sido creado en el servidor. Este código aparece comúnmente en peticiones de tipo POST cuando se envían datos para crear un nuevo registro.

2.R/La actualización de los datos se puede verificar mediante comandos en la terminal, como el uso de herramientas tipo curl. Por ejemplo, realizando una petición GET al servidor se pueden consultar los datos actuales y confirmar si los cambios realizados previamente fueron aplicados correctamente.

3.R/: Los códigos de estado HTTP se dividen en varias categorías: los informativos (1xx), los de éxito (2xx), los de redirección (3xx), los de error del cliente (4xx) y los de error del servidor (5xx). Algunos de los más comunes son 200 (OK), 201 (Created), 404 (No encontrado) y 500 (Error interno del servidor).

4.R/Una petición PATCH se utiliza cuando se necesita actualizar solo una parte de un recurso en el servidor, sin modificar completamente todos sus datos. Es útil cuando se desea cambiar uno o pocos campos específicos, haciendo el proceso más rápido y eficiente que otras peticiones como PUT.

5.R/SOAP es un protocolo que permite el intercambio de información entre sistemas mediante mensajes estructurados en formato XML. Es más estricto, seguro y complejo. Por otro lado, REST es un estilo de arquitectura que utiliza principalmente JSON para la comunicación, siendo más sencillo, flexible y rápido. La principal diferencia es que SOAP es más pesado y formal, mientras que REST es más ligero y fácil de implementar.

6.R/GraphQL es un lenguaje de consulta para APIs que permite al cliente solicitar exactamente los datos que necesita. A diferencia de REST, donde las respuestas son fijas y pueden incluir información innecesaria, GraphQL ofrece mayor flexibilidad, ya que trabaja generalmente con una sola ruta y permite optimizar las consultas.
