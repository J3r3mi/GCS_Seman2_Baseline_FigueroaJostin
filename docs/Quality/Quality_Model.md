# Modelo de Calidad del Software

## Modelo seleccionado

Para evaluar la calidad del Sistema de Gestión de Contactos Agenda se utilizará el modelo de calidad ISO/IEC 25010. Este modelo permite analizar diferentes características de calidad del software mediante atributos y métricas verificables.

## Atributos y métricas de calidad

| Atributo | Definición | Métrica verificable | EC que lo soporta |
|---|---|---|---|
| Adecuación funcional | El sistema debe proporcionar las funciones necesarias para gestionar usuarios y contactos. | El 100% de los requisitos funcionales definidos en el SRS deben estar implementados y validados mediante pruebas. | `/docs/SRS/SRS_v1.md`, `/src/`, `/tests/` |
| Eficiencia de desempeño | El sistema debe responder de manera adecuada durante las operaciones de consulta y gestión de contactos. | El 95% de las consultas de contactos debe completarse en un tiempo menor o igual a 2 segundos. | `/src/`, `/tests/` |
| Seguridad | El sistema debe proteger las cuentas de los usuarios y evitar accesos no autorizados. | 0 contraseñas almacenadas en texto plano y el 100% de los accesos debe requerir autenticación. | `/src/`, `/config/`, `/tests/` |
| Fiabilidad | El sistema debe mantener su funcionamiento correcto y evitar pérdida de información durante las operaciones. | El 100% de las operaciones críticas de registro, consulta, modificación y eliminación debe completarse correctamente en las pruebas. | `/src/`, `/tests/` |
| Mantenibilidad | El sistema debe poder modificarse y corregirse sin afectar innecesariamente otras funcionalidades. | El 100% de los cambios realizados debe registrarse en `CHANGELOG.md` y mantenerse versionado mediante Git. | `/src/`, `/CHANGELOG.md` |
| Compatibilidad | El sistema debe poder ejecutarse correctamente junto con los componentes tecnológicos requeridos para su funcionamiento. | El sistema debe ejecutarse correctamente en el entorno de desarrollo definido sin errores críticos de configuración. | `/config/`, `/README.md` |

## Métricas estrella

### Métrica 1: Seguridad de las credenciales

El sistema debe garantizar que el **0% de las contraseñas de los usuarios se almacene en texto plano**, utilizando mecanismos adecuados de protección de credenciales.

**EC relacionados:**
- `/src/`
- `/config/`
- `/tests/`

### Métrica 2: Rendimiento de consultas

El sistema debe responder las consultas frecuentes de contactos en un tiempo **menor o igual a 2 segundos en al menos el 95% de las operaciones realizadas** durante las pruebas.

**EC relacionados:**
- `/src/`
- `/tests/`