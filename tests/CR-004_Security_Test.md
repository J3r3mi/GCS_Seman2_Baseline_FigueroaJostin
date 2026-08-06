# Pruebas de Seguridad CR-004

## Cambio evaluado

CR-004: Cambio de configuración de seguridad JWT.

## Objetivo

Verificar que la reducción del tiempo de expiración de tokens y la rotación de llaves no afecten el funcionamiento de autenticación del sistema.

## Casos de prueba

| ID | Prueba | Resultado esperado |
|---|---|---|
| TC-001 | Inicio de sesión con usuario válido | El sistema genera un token correctamente |
| TC-002 | Uso de token válido durante la sesión | El usuario puede acceder a los recursos autorizados |
| TC-003 | Uso de token expirado | El sistema rechaza el acceso y solicita autenticación nuevamente |
| TC-004 | Renovación de sesión | El usuario puede obtener un nuevo token válido |

## Resultado

Estado: Aprobado

Las pruebas permiten validar que el cambio de configuración mantiene la seguridad y funcionalidad del sistema.

## Trazabilidad

| Elemento | Referencia |
|---|---|
| Solicitud de cambio | CR-004-SEM4-FIGUEROA-JOSTIN |
| Configuración modificada | config/config.example |
| Pull Request | PR #2 |
| Commit | d68c25f |