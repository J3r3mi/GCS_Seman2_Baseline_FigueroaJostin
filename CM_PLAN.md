# Plan de Gestión de Configuración (CM_PLAN)

## Elementos de Configuración

| EC | Elemento de Configuración | Ubicación | ¿Por qué es EC? | Quién lo modifica |
|---|---|---|---|---|
| EC-01 | SRS – Especificación de Requisitos | `/docs/SRS/SRS_v1.md` | Define los requisitos y alcance del sistema; cualquier cambio puede afectar el desarrollo y las pruebas. | Analista / Desarrollador |
| EC-02 | Código fuente | `/src/` | Contiene la implementación del sistema y cualquier cambio modifica su funcionamiento. | Desarrollador |
| EC-03 | Casos de prueba | `/tests/` | Permiten verificar que el sistema funciona correctamente y detectar regresiones. | QA / Desarrollador |
| EC-04 | Configuración del sistema | `/config/` | Contiene parámetros necesarios para la ejecución y configuración del sistema. | Desarrollador |
| EC-05 | Modelo de calidad | `/docs/Quality/Quality_Model.md` | Define los atributos y métricas utilizadas para evaluar la calidad del software. | Equipo de desarrollo / QA |
| EC-06 | Análisis del ciclo de desarrollo | `/docs/Lifecycle/Lifecycle_Impact.md` | Documenta el impacto de los cambios en las diferentes fases del desarrollo. | Equipo de desarrollo |
| EC-07 | Registro de cambios | `/CHANGELOG.md` | Permite conocer y rastrear las modificaciones realizadas en las diferentes versiones. | Desarrollador |
| EC-08 | Documentación del proyecto | `/README.md` | Describe el sistema, su propósito y estructura para facilitar su comprensión y mantenimiento. | Desarrollador |