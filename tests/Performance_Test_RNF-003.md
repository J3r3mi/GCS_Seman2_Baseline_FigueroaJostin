# Prueba de Rendimiento RNF-003

## Requisito evaluado

**RNF-003:** El sistema deberá responder las búsquedas frecuentes de contactos en un tiempo menor o igual a 2 segundos en al menos el 95% de las operaciones realizadas bajo condiciones normales de funcionamiento.

**Relacionado con:** REQ-007 – Gestión de búsqueda de contactos.

## Objetivo de la prueba

Verificar que la funcionalidad de búsqueda de contactos cumpla con el tiempo de respuesta establecido en el requisito no funcional RNF-003.

## Criterio de aceptación

La prueba será considerada satisfactoria cuando al menos el 95% de las búsquedas realizadas tengan un tiempo de respuesta menor o igual a 2 segundos.

## Procedimiento

1. Iniciar la API REST y la aplicación cliente.
2. Verificar que la conexión con la base de datos SQL Server se encuentre disponible.
3. Ejecutar múltiples búsquedas de contactos utilizando diferentes nombres y apellidos.
4. Registrar el tiempo de respuesta de cada búsqueda.
5. Calcular el porcentaje de búsquedas que cumplen con el límite de 2 segundos.
6. Comparar el resultado obtenido con el criterio de aceptación establecido.

## Resultado esperado

Al menos el 95% de las búsquedas frecuentes de contactos deberán completarse en un tiempo menor o igual a 2 segundos.

## Estado

**Pendiente de ejecución:** La prueba deberá ejecutarse en el entorno de funcionamiento del sistema y registrar los resultados obtenidos como evidencia.

## Trazabilidad

| Elemento | Referencia |
|---|---|
| Requisito funcional | REQ-007 – Gestión de búsqueda de contactos |
| Requisito no funcional | RNF-003 – Tiempo de respuesta en búsquedas |
| Modelo de calidad | Eficiencia de desempeño |
| Elemento de configuración | EC-03 – Casos de prueba |
| Cambio relacionado | Mejora de rendimiento de búsquedas |