# Kioskopago

## 1. Objetivo

Aplicación web responsivo destinada a comercios pequeños donde se podrán realizar pagos de servicios como agua, luz e internet, además de poder hacer recargas a diferentes compañías telefónicas como Telcel y AT&T. También permitirá la compra de tarjetas de regalos de servicios como Netflix, Xbox, etc.

## 2. Funcionalidades principales

* **Compras**
	- **Historial de compras**
	    - La aplicación mostrará un listado de las compras realizadas.
	    - Cada compra tendrá un detalle que incluye:
	        - ID de la compra
	        - Fecha de la compra
	        - Estatus de la compra
	        - Número de celular / Número de servicio
	        - Nombre de la compañía
	        - Subtotal
	        - Comisión
	        - Total

- **Inicio**
    - **Buscador**
        - El usuario podrá buscar por el nombre del servicio.
        - No contará con filtros avanzados.
    - **Catálogo de servicios**
        - La aplicación mostrará un listado del catálogo de servicios.

- **Registro de la tienda**
    - El usuario podrá registrarse con los siguientes campos:
        - Nombre de la tienda
        - Dirección de la tienda
        - Geolocalización de la tienda
        - Nombre del dueño de la tienda
        - Número de celular
        - RFC (opcional)
        - Correo electrónico (opcional)
        - Términos y condiciones

- **Inicio de sesión**
    - El usuario podrá iniciar sesión con su número de celular y código de verificación.

## 3. Casos de uso

### Inicio de sesión

1. El usuario escribe el número de teléfono de 10 caracteres.
2. La aplicación mandara un SMS al número de teléfono del usuario el código de verificación.
3. El usuario escribe el código de verificación a 6 caracteres.
4. Si es correcto el código, se envia a la pantalla de inicio.

### Registro de la tienda

1. El usuario escribe los siguientes datos:
	- Nombre de la tienda.
	- Dirección de la tienda
	- Geolocalización de la tienda
	- Nombre del dueño de la tienda
	- Número de celular
	- RFC (opcional)
	- Correo electrónico (opcional)
	- Términos y condiciones
2. Si todos los datos son correctos, se envia a la pantalla de inicio de sesión.

###### Pagar un servicio / tarjetas de regalo

1. El usuario abre la pantalla de inicio y selecciona el servicio a pagar.
2. El usuario escribe el numero de referencia o servicio.
3. El usuario escribe el monto a pagar.
4. En caso de no tener sesión activa, el usuario escribe tu numero de teléfono para iniciar sesión.
5. En caso de tener sesión activa, se procesa el pago.
6. La aplicación muestra el resumen del pago.

###### Realizar una recarga

1. La aplicación muestra los paquetes de las recargas, el usuario selecciona un paquete del servicio.
2. El usuario escribe el número de teléfono a recargar.
3. La aplicación muestra el resumen del pago.


## 4. Arquitectura de la información

El siguiente mapa muestra la estructura jerárquica de las páginas y secciones principales de la aplicación.

- **Inicio (Home)**
    - Buscador de servicios
    - Listado de servicios (Catálogo)
        - Recargas
        - Pago de servicios
        - Tarjetas de regalo
- **Compras (Historial de Compras)**
    - Listado de compras
    - Detalle de la compra
- **Perfil de la tienda (Configuración)**
    - Información de la tienda
        - Nombre de la tienda
        - Dirección de la tienda
        - Geolocalización de la tienda
        - Nombre del dueño de la tienda
        - Número de celular
        - RFC (opcional)
        - Correo electrónico (opcional)
        - Términos y condiciones
- **Inicio de sesión / Registro**
    - Formulario de registro (para nuevas tiendas)
    - Formulario de inicio de sesión (con verificación por celular)

## 5. Etiquetado (Labeling)

- **Menú principal / Barra de navegación:**
    - **Inicio:** La pantalla principal con el buscador y el catálogo.
    - **Historial de Compras:** La sección donde el usuario puede ver todas sus transacciones pasadas.
    - **Perfil:** La sección para ver y editar la información de la tienda.
    - **Cerrar Sesión:** La opción para salir de la cuenta.

- **Títulos y Botones:**
    - **Pagar Servicio:** Etiqueta para el botón que inicia el proceso de pago.
    - **Realizar Recarga:** Etiqueta para el botón que inicia el proceso de recarga.
    - **Catálogo de Servicios:** Título de la sección que lista todas las opciones disponibles.
    - **Historial de Compras:** Título de la página de transacciones.
    - **Ver Detalle:** Botón dentro del historial para expandir la información de una compra.
    - **Registrar Tienda:** Botón o enlace para el proceso de registro.
    - **Iniciar Sesión:** Botón para la autenticación.
    - **Verificar:** Botón para confirmar el código de verificación.