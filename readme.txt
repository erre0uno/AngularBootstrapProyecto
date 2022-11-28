ng serve
ng serve -o

//modulos
ng generate module modulos/seguridad --routing
ng generate module modulos/administracion --routing

//componentes por modulos
ng g component modulos/seguridad/login
ng g c modulos/seguridad/cambioClave
ng g c modulos/seguridad/recuperarClave
ng g c modulos/seguridad/cerrar-sesion

//componentes por modulos
ng g c modulos/administracion/clientes/crear-cliente
ng g c modulos/administracion/clientes/editar-cliente
ng g c modulos/administracion/clientes/eliminar-cliente
ng g c modulos/administracion/clientes/buscar-cliente


ng g c modulos/administracion/empleados/crear-empleado
ng g c modulos/administracion/empleados/editar-empleado
ng g c modulos/administracion/empleados/eliminar-empleado
ng g c modulos/administracion/empleados/buscar-empleado


npm install materialize-css@next

ng g c template/navbar
ng g c template/inicio
ng g c template/footer
ng g c template/error
ng g c template/aside

npm install crypto-js

#ng generate service
ng g s services/autenticacion

ng g s services/cliente



npm i @types/crypto-js



#NEW
echo "# prueba" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/erre0uno/prueba.git
git push -u origin main

#EXISTING
git remote add origin https://github.com/erre0uno/prueba.git
git branch -M main
git push -u origin main


1. EL APP-COMPONENT DEBE TENER TRES COMPONENTES <NAVBAR, ASIDE,FOOTER>,
LOS CUALES SE VAN A VISUALIZAR EN TODOS LOS MENUS 

2. EL MENU INCIO DEBERA PRESENTAR INFORMACION SOBRE LA EMPRESA MISION, VISION 
Y RAZON SOCIAL <COLUMNAS>

3. EL MENU QUIENES SOMOS DEBERA PRESENTAR LA INFORMACION DE LA HISTORIA DE LA 
EMPRESA <INCLUIR IMAGENES> 

3. EL MENU SERVICIOS DEBERAN PRESENTAR UN BROCHURE 
CON TODOS LA INFORMACION DE LOS PRODUCTOS Y/O SERVICIOS QUE COMERCIALIZARA 
LA EMPRESA< CARDS>, 

4. EL MENU TESTIMONIOS DEBERA PRESENTAR UN VIDEO QUE SIMULE A ALGUIEN DANDO BUEN
 TESTIMONIO DE LA EMPRESA 
 
5. EL MENU CONTACTANOS DEBERA INCLUIR UN MAPA<UBICACION> 
Y UN FORMULARIO QUE PERMITA INGRESAR INFORMACION DE LOS CLIENTES QUE VAN A REALIZAR
ALGUN PEDIDO. 

EL ASIDE DEL APP COMPONENT DEBERA TENER LINKS QUE TE LLVEN A OTROS COMPONENTES.
NOTA: APLICA CSS, BOOSTRAP Y QUE TODO LA APP SEA RESPONSIVE. 
LOS DATOS DEL FOOTER COLOCALOS CON INTERPOLACION