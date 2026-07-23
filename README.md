# Sistema de Gestión de Contactos Agenda

## Objetivo del proyecto

El objetivo de este proyecto es gestionar información de contactos mediante una aplicación desarrollada con Angular e Ionic, conectada a una API REST desarrollada con .NET y una base de datos SQL Server.

El sistema permite la gestión de usuarios y contactos mediante una arquitectura que separa la aplicación cliente, la API y la base de datos.

Este repositorio funciona como depósito de elementos de configuración del proyecto, permitiendo mantener control sobre el código fuente, la documentación, las pruebas y los archivos de configuración.

## Estructura del repositorio

- `docs/SRS`: Documento de requisitos del sistema.
- `docs/SDD`: Documento de diseño y arquitectura del sistema.
- `src`: Código fuente del proyecto Agenda.
- `tests`: Archivos relacionados con las pruebas del sistema.
- `config`: Archivos de configuración de ejemplo.
- `scripts`: Scripts auxiliares del proyecto.
- `README.md`: Documentación general del repositorio.
- `CHANGELOG.md`: Registro de cambios importantes del proyecto.

## Tecnologías utilizadas

- Angular
- Ionic
- TypeScript
- .NET
- SQL Server
- Git
- GitHub

## Cómo ejecutar el proyecto

### Requisitos previos

Para ejecutar el proyecto se requiere tener instalado:

- Node.js y npm.
- Ionic CLI.
- .NET SDK.
- SQL Server.
- Visual Studio Code o Visual Studio.

### Ejecución de la API

1. Abrir la carpeta `src/Agenda/AgendaContactosAPI`.
2. Configurar la conexión con la base de datos SQL Server.
3. Restaurar las dependencias del proyecto.
4. Ejecutar la API utilizando el entorno de desarrollo de .NET.

### Ejecución de la aplicación

1. Abrir la carpeta principal de la aplicación Angular/Ionic.
2. Instalar las dependencias del proyecto utilizando npm.
3. Ejecutar la aplicación utilizando Ionic CLI.
4. Acceder a la aplicación desde el entorno de ejecución disponible.

> Nota: Las configuraciones reales de conexión y credenciales no se almacenan en este repositorio. El archivo `config/config.example` contiene únicamente valores de ejemplo.

## Baseline v1.0

La línea base `v1.0` representa una versión estable y aprobada del sistema en un momento determinado.

La Baseline v1.0 incluye:

- Documento de requisitos `docs/SRS/SRS_v1.md`.
- Documento de diseño `docs/SDD/SDD_v1.md`.
- Código fuente inicial del sistema.
- Archivo de configuración de ejemplo `config/config.example`.
- Estructura inicial de pruebas.
- Documentación del proyecto.
- Registro de cambios.

La línea base será identificada mediante el tag Git `v1.0` y publicada como un Release en GitHub.

Una vez creada la línea base, los cambios posteriores deberán gestionarse mediante el proceso de control de cambios establecido en el repositorio.

## Cómo crear la Baseline v1.0

Antes de crear la línea base se debe verificar que los documentos SRS y SDD estén completos, que el código fuente corresponda a la versión aprobada y que los archivos de configuración de ejemplo estén disponibles.

La línea base se crea mediante un tag anotado:

`git tag -a v1.0 -m "Baseline v1.0: SRS+SDD approved + minimal build"`

Posteriormente, el tag se publica en el repositorio remoto y se crea un Release v1.0 en GitHub.

La Baseline representa una versión congelada y trazable del proyecto. Cualquier modificación posterior debe registrarse mediante un cambio controlado y quedar identificada en el historial de Git.