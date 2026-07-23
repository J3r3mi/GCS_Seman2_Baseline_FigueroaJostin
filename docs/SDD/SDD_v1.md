# Documento de Diseño de Software (SDD)

## 1. Información general

### 1.1 Nombre del sistema

Sistema de Gestión de Contactos Agenda

### 1.2 Versión

SDD v1.0

### 1.3 Descripción

El Sistema de Gestión de Contactos Agenda es una aplicación orientada a la administración de información de contactos. El sistema permite a los usuarios autenticarse y gestionar información de contactos mediante una aplicación cliente desarrollada con Angular e Ionic, que se comunica con una API REST desarrollada con .NET.

Este documento describe de manera general la arquitectura, los componentes principales y las decisiones técnicas utilizadas en el diseño del sistema.

---

## 2. Arquitectura del sistema

El sistema utiliza una arquitectura de tres capas, compuesta por una aplicación cliente, una API REST y una base de datos.

La comunicación entre los componentes se realiza de la siguiente manera:

```text
+-----------------------------+
|       Usuario final         |
+--------------+--------------+
               |
               v
+-----------------------------+
|     Aplicación Cliente      |
|       Angular / Ionic       |
+--------------+--------------+
               |
               | HTTP / API REST
               v
+-----------------------------+
|     AgendaContactosAPI      |
|          .NET               |
+--------------+--------------+
               |
               | Acceso a datos
               v
+-----------------------------+
|       Base de Datos         |
|          SQL Server         |
+-----------------------------+