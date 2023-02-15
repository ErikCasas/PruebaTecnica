## Ecomerce-prueba-tecnica

<img  alt="Coding" width="400" src="https://github.com/ErikCasas/PruebaTecnica/blob/master/Files/Captura%20de%20pantalla%202023-02-15%20081756.png?raw=true">


<em> #Preuba tecnica Ecommerce Supermercado  </em>

Esta es una prueba Tecnica echa para la empresa Osnet, se tuvo un plazo de una semana para ser realizada, esta prueba es basada en el stack MERN 

  - **M**ongo
  - **E**xpress
  - **R**eact
  - **N**ode

El proyecto debía ser de un inventario de supermercado, en el que tiene que ser posible, crear, actaulizar, leer y eliminar los productos, ademas de contar con manejo de usuarios que se debidiran en dos categorias: 
  - **Master** Puede realizar todas las acciones anteriormente nombradas además de crear nuevos usuarios y modificarlos.
  - **Read** Solamente puede ver los productos actuales en el sistema.

## :hammer:Entrega final y funcionalidades del proyecto

- `Funcionalidad 1`: Se creo un sistema de logueo local con peticiones al back-end y verificaciones en el front-end
- `Funcionalidad 2`: Se tiene un sistema de ruteo para los tres tipos de ususarios contemplados, no logueado, logueado y master
- `Funcionalidad 3`: Se tiene un sistema de redireccionamiento que evita que usuarios no logueados o usuarios sin acceso master, accedan a ciertas rutas de funcionalidades para el master
- `Funcionalidad 4`: Se tiene un total de 8 formularios con distinto enfoque, tales como dejar que se cree un nuevo usuario, que un usuario de tipo read sea capaz de cambiar su información, junto con los 4 principales, que son la edición y creaciión de productos y usuarios por parte de los usuarios master- 
- `Funcionalidad 5`: se dio prioridad al funcionamiento intuitivo, con el fin de que las funcionalidades de cada componente sean faciles de encontrar

-  `Funcionaliad 6`: Se utilizó la tecnologia de cloudinary para que el usuario master quien tiene la capacidad de editar y crear, pueda utilizar archivos directos de su pc

-  `Funcionalidad 7`: la pagina es en su gran mayoria de tipo responsive

#previsualización del proyecto 

<img align="center" alt="Coding" width="300" src="https://github.com/ErikCasas/PruebaTecnica/blob/master/Files/Captura%20de%20pantalla%202023-02-15%20081908.png?raw=true">
<img align="center" alt="Coding" width="300" src="https://github.com/ErikCasas/PruebaTecnica/blob/master/Files/Captura%20de%20pantalla%202023-02-15%20081948.png?raw=true">
<img align="center" alt="Coding" width="300" src="https://github.com/ErikCasas/PruebaTecnica/blob/master/Files/Captura%20de%20pantalla%202023-02-15%20082244.png?raw=true">
<img alt="Coding" width="300" src="https://github.com/ErikCasas/PruebaTecnica/blob/master/Files/Captura%20de%20pantalla%202023-02-15%20082356.png?raw=true">
<img alt="Coding" width="300" src="https://github.com/ErikCasas/PruebaTecnica/blob/master/Files/Captura%20de%20pantalla%202023-02-15%20082322.png?raw=true">
<img alt="Coding" width="300" src="https://github.com/ErikCasas/PruebaTecnica/blob/master/Files/Captura%20de%20pantalla%202023-02-15%20082958.png?raw=true">

<img  alt="Coding" width="300" src="https://github.com/ErikCasas/PruebaTecnica/blob/master/Files/Captura%20de%20pantalla%202023-02-15%20081756.png?raw=true">
<img  alt="Coding" width="300" src="https://github.com/ErikCasas/PruebaTecnica/blob/master/Files/Captura%20de%20pantalla%202023-02-15%20081756.png?raw=true">


# Probar el proyecto

se cuentan con dos carpetas api y client, en ambas se debe hacer previamente un NPM install para traer todas las dependencias, sin embargo para el fron no hace falta levantar el back, ya que este ya esta haciendo las solicitudes en railway (el back- end deployado),


para levantar el back de manera local se usa el comando npm run dev, ya que de ese modo se activa con nodemon en localhoost3001 y es mas facil seguir los cambios

Para levantar el front se uso npx-create-react-app y con el comando npm start, se levanta el proyecto de forma local en localhost3000

cada archivo tiene su respectiva dosumentación explicando el porque de esa ruta o componente, para el back se le dio prioridad a la modularización, debido a que de ese modo es mas facil saber sobre que trabajar para encontrar los errore.

para el front se mezclaron distintos frameworks de css al igual que tecnologias como formik.

para el proyecto se iniciara en una landding page en donde podran ir a la seccion de login, donde tiene la opcion de iniciar sesión o registrarse llenando un formulario. sin embargo aqui dejo el usuario y clave tanto para usuario no master que esta limitado a solo ver los productos y editar su propio perfil,
y de usuario master, que puede acceder a mas componentes, a la vez que editar crear y/o eliminar usuarios o productos

# usuario master 

email: Erik@osnetpr.com
password: 12345

# usuario NO master 

email: maicol@osnetpr.com
password: 12345

agradezco la oprtunidad y cualquier feedback, espero el proyecto cumpla con las espectativas
y pido disculpas por no poder presentar el proyecto deployado en la red
