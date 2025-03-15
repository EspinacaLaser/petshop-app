# PetShop App

PetShop App es una aplicación desarrollada en **React** con **TypeScript** que permite gestionar una lista de mascotas. Los usuarios pueden agregar, visualizar y eliminar mascotas, con un enfoque en la validación de datos y una interfaz amigable.

## Características

- **Gestión de mascotas**: Agrega, visualiza y elimina mascotas de la lista.
- **Validación de formulario**: El formulario incluye restricciones específicas para garantizar que los datos ingresados sean válidos.
- **Interfaz atractiva**: Diseño limpio y profesional con un fondo de gradiente sutil y mensajes de error claros.
- **Uso de Context API**: Manejo del estado global de las mascotas mediante `React Context`.

## Validaciones del formulario

El formulario para agregar mascotas incluye las siguientes restricciones:

1. **Nombre**: Es obligatorio.
2. **Descripción**: Campo opcional para agregar detalles sobre la mascota.
3. **URL de Imagen**: Es obligatorio y debe ser una URL válida.
4. **Fecha de Nacimiento**: Es obligatorio y debe ser una fecha válida.
5. **Precio**: Es obligatorio y debe ser mayor a 0.
6. **Código**: Es obligatorio y debe seguir el formato `ABC123` (tres letras mayúsculas seguidas de tres números).

Si algún campo no cumple con las restricciones, se mostrará un mensaje de error claro debajo del campo correspondiente.

## Manejo del DOM

La aplicación utiliza **React** para manejar el DOM de manera eficiente. Los componentes se actualizan dinámicamente en función del estado global de la aplicación, que se gestiona mediante la **Context API**. Esto permite que los cambios en la lista de mascotas (como agregar o eliminar) se reflejen automáticamente en la interfaz sin necesidad de recargar la página.

## Tecnologías utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **CSS**: Para los estilos de la aplicación.
- **React Router**: Para la navegación entre páginas.
- **Context API**: Para el manejo del estado global.
