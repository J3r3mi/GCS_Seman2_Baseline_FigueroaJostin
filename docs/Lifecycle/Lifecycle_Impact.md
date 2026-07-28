# Impacto de un Cambio en el Ciclo de Desarrollo

## Cambio simulado

Se propone incorporar un nuevo requisito no funcional al Sistema de Gestión de Contactos Agenda:

**RNF-001: El sistema debe responder en un tiempo menor o igual a 2 segundos en al menos el 95% de las búsquedas frecuentes de contactos.**

Este cambio busca mejorar el rendimiento del sistema y garantizar una respuesta adecuada durante las consultas realizadas por los usuarios.

## Análisis del impacto por fase

| Fase | ¿Qué cambia? | EC afectados | Riesgo si no se controla | Evidencia de validación |
|---|---|---|---|---|
| Requisitos | Se incorpora el RNF-001 relacionado con el tiempo de respuesta de las búsquedas. | `/docs/SRS/SRS_v1.md` | Requisitos ambiguos o incompletos que pueden generar retrabajo. | Revisión del SRS y checklist de requisitos. |
| Diseño | Se revisa el diseño de las consultas y la interacción entre la aplicación y la base de datos para mejorar el rendimiento. | `/src/`, `/docs/SRS/SRS_v1.md` | Diseñar una solución que no cumpla con el tiempo de respuesta esperado. | Revisión técnica del diseño y de las consultas utilizadas. |
| Implementación | Se optimiza el código y las consultas relacionadas con la búsqueda de contactos. | `/src/` | El sistema puede presentar tiempos de respuesta elevados. | Prueba de ejecución de las búsquedas. |
| Pruebas | Se agregan pruebas para medir el tiempo de respuesta de las búsquedas frecuentes. | `/tests/` | El problema de rendimiento podría llegar a los usuarios sin ser detectado. | Registro de resultados de las pruebas de rendimiento. |
| Despliegue y mantenimiento | Se verifica que la configuración del entorno permita mantener el rendimiento esperado y se registran los cambios realizados. | `/config/`, `/CHANGELOG.md`, `/README.md` | El rendimiento podría variar entre entornos o perderse en futuras modificaciones. | Registro del cambio y validación en el entorno de ejecución. |

## Elementos de Configuración afectados

El cambio afecta principalmente a los siguientes Elementos de Configuración:

1. **EC-01 – SRS:** Se agrega el nuevo requisito no funcional de rendimiento.
2. **EC-02 – Código fuente:** Puede requerir modificaciones para optimizar las búsquedas.
3. **EC-03 – Casos de prueba:** Se incorporan pruebas para verificar el tiempo de respuesta.
4. **EC-04 – Configuración del sistema:** Puede ser necesario revisar parámetros relacionados con la conexión y ejecución.
5. **EC-07 – Registro de cambios:** Se documenta la modificación realizada.

## Riesgo del cambio sin control de configuración

Si el cambio se realiza sin utilizar Gestión de Configuración del Software, el requisito podría implementarse sin actualizar la documentación ni las pruebas correspondientes. Esto podría provocar inconsistencias entre los requisitos y el código, dificultar la identificación de los elementos afectados y generar errores o retrabajo durante el desarrollo.

## Evidencia de validación

La validación del cambio se realizará mediante:

- Revisión del requisito actualizado en el SRS.
- Pruebas de rendimiento sobre las búsquedas frecuentes.
- Registro de los cambios realizados mediante Git.
- Relación entre el requisito, el código modificado y las pruebas.
- Registro del cambio en `CHANGELOG.md`.