# Especificación de Requisitos de Software (SRS)

## 1. Información general

### 1.1 Nombre del sistema

Sistema de Gestión de Contactos Agenda

### 1.2 Versión

SRS v1.0

### 1.3 Objetivo

El objetivo del sistema es permitir a los usuarios gestionar información de contactos mediante una aplicación desarrollada con Angular e Ionic, conectada a una API REST desarrollada con .NET y una base de datos SQL Server.

El sistema busca facilitar el registro y consulta de información de contactos, proporcionando una aplicación organizada y accesible para la gestión de datos.

## 2. Alcance del sistema

El sistema comprende una aplicación cliente desarrollada con Angular e Ionic y una API REST desarrollada con .NET. La aplicación permite a los usuarios autenticarse y realizar operaciones relacionadas con la gestión de contactos.

La API actúa como intermediario entre la aplicación cliente y la base de datos, procesando las solicitudes y gestionando la información almacenada.

El sistema contempla las siguientes funcionalidades principales:

- Registro de usuarios.
- Inicio de sesión.
- Registro de contactos.
- Consulta de contactos.

## 3. Requisitos funcionales

### REQ-001: Registro de usuarios

El sistema deberá permitir registrar nuevos usuarios proporcionando la información necesaria para crear una cuenta de acceso.

### REQ-002: Inicio de sesión

El sistema deberá permitir a los usuarios registrados iniciar sesión mediante sus credenciales de acceso.

### REQ-003: Registro de contactos

El sistema deberá permitir a los usuarios autenticados registrar nuevos contactos proporcionando la información correspondiente.

### REQ-004: Consulta de contactos

El sistema deberá permitir a los usuarios consultar la información de los contactos registrados.

## 4. Requisitos no funcionales

### RNF-001: Seguridad

El sistema deberá controlar el acceso a las funcionalidades mediante un mecanismo de autenticación de usuarios y deberá evitar la exposición de credenciales o información sensible en el repositorio.

### RNF-002: Comunicación y disponibilidad

El sistema deberá mantener una comunicación adecuada entre la aplicación cliente y la API REST mediante solicitudes HTTP, permitiendo el intercambio de información entre ambos componentes.

## 5. Restricciones y consideraciones

- El sistema requiere una API REST funcional para realizar las operaciones relacionadas con los datos.
- La aplicación requiere una conexión con la base de datos para almacenar y consultar información.
- Las credenciales y configuraciones sensibles no deberán almacenarse directamente en el repositorio.
- Los cambios posteriores a la versión estable deberán gestionarse mediante el control de versiones y el proceso de control de cambios definido en el repositorio.

## 6. Estado del documento

Este documento corresponde a la versión inicial de los requisitos del sistema y forma parte de la línea base `v1.0`.

Los requisitos definidos en esta versión representan el alcance aprobado para la versión inicial del sistema. Cualquier nuevo requisito o modificación posterior deberá registrarse y gestionarse mediante el proceso de control de cambios establecido en el repositorio.