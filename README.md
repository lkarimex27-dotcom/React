# 🚀 React Hola Mundo

Cloné una carpeta desde GitHub llamada **react**, y dentro de esa carpeta inicialicé un proyecto con **Vite + React**, siguiendo el proceso de instalación paso a paso desde la terminal.

El objetivo es entender la estructura base de un proyecto React y comprobar su ejecución en entorno local.

---

## Proceso de instalacion

Antes de crear el proyecto, verifiqué lo siguiente en la consola:

Para abrir la consola utilice Ctrl + ñ

- Tener **Node.js** instalado correctamente, se puede verificar con este comando: 'node -v'
- Luego inicia el comando npm -v para que se instale los archivos de Node
- Inicie su proyecto en Git con: 'Git init', este comando le permite inicializar un nuevo repositorio en su dispositivo local

### 🚀️Creacion del proyecto

Siguiendo en la consola ->

Cloné el repositorio desde GitHub.
ej: git clone [url/ de su repositorio creado en git hub]

La carpeta del proyecto se llama **react**.

Dentro de esa carpeta inicialicé el proyecto con Vite y React:
Use este comando: npm create vite@latest

Durante la configuración:

* le preguntara si necesita instalar los paquetes para decirle si, presione Enter.
* Nombre como quiere que se llame su paquete de instalacion
* Seleccione **React** como framework
* Luego seleccione **Javascript** como variante
* Luego le dira si quiere usar una version experimental, presione no y luego Enter.
* Al preguntarle si quiere instalar con npm y empezar ahora, diga Si, eso hará que le instale todas las dependencias y archivos necesarios para utilizar y tambien activará el proyecto automaticamente en una nueva ventana  de su editor de codigo

El proyecto corre en el puerto que Vite asigna por defecto:
ejemplo:http://localhost:5173

y listo ya tienes tu estructura lista para empezar a construir en React

## Estructura del proyecto

React/
├── node_modules/
├── public/
├── src/
│   ├── assets/
|            └── react.svg
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
