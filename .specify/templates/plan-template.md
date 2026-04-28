# Plan de Implementación: [FEATURE]

**Rama**: `[###-feature-name]` | **Fecha**: [DATE] | **Spec**: [link]
**Entrada**: Especificación de feature desde `/specs/[###-feature-name]/spec.md`

**Nota**: Este template es completado por el comando `/speckit.plan`. Ver `.specify/templates/plan-template.md` para el flujo de ejecución.

## Resumen

[Extraer de la spec del feature: requerimiento principal + enfoque técnico de la investigación]

## Contexto Técnico

<!--
  ACCIÓN REQUERIDA: Reemplazar el contenido de esta sección con los detalles técnicos
  del proyecto. La estructura aquí presentada es orientativa para guiar el proceso.
-->

**Lenguaje/Versión**: [ej. Python 3.11, Swift 5.9, Rust 1.75 o NECESITA CLARIFICACIÓN]
**Dependencias Principales**: [ej. FastAPI, UIKit, LLVM o NECESITA CLARIFICACIÓN]
**Almacenamiento**: [si aplica, ej. PostgreSQL, CoreData, archivos o N/A]
**Testing**: [ej. pytest, XCTest, cargo test o NECESITA CLARIFICACIÓN]
**Plataforma Objetivo**: [ej. servidor Linux, iOS 15+, WASM o NECESITA CLARIFICACIÓN]
**Tipo de Proyecto**: [ej. librería/cli/servicio-web/app-móvil/compilador/app-escritorio o NECESITA CLARIFICACIÓN]
**Objetivos de Rendimiento**: [específico del dominio, ej. 1000 req/s, 10k líneas/seg, 60 fps o NECESITA CLARIFICACIÓN]
**Restricciones**: [específico del dominio, ej. <200ms p95, <100MB memoria, offline-capable o NECESITA CLARIFICACIÓN]
**Escala/Alcance**: [específico del dominio, ej. 10k usuarios, 1M LOC, 50 pantallas o NECESITA CLARIFICACIÓN]
**Rutas afectadas**: [listar las rutas nuevas o modificadas; indicar grupo `(auth)` / `(docs)` / `(roles)/admin` / `(roles)/tienda`; confirmar que están declaradas en `ROUTES_APP` y en `PUBLIC_ROUTES` o `AUTH_ROUTES`]

## Verificación Constitucional

*PUERTA: Debe pasar antes de la Fase 0 de investigación. Re-verificar tras el diseño de Fase 1.*

| # | Principio | Pregunta de Puerta | Estado |
|---|-----------|-------------------|--------|
| I | Arquitectura Feature-First | ¿El nuevo código está bajo `features/<dominio>/` sin imports cruzados entre features? | ☐ |
| II | Tipado Estricto y Validación de Esquemas | ¿Todos los límites externos de datos están validados con un esquema Zod? ¿Está ausente `any`? | ☐ |
| III | Control de Acceso Basado en Roles | ¿Las nuevas rutas están registradas en `middleware.ts`? ¿Los tokens se almacenan solo en cookies? | ☐ |
| IV | UI Declarativa mediante Composición | ¿La UI se compone de primitivos de shadcn/ui? ¿Sin estilos en línea? ¿Los nuevos componentes son RSC salvo que requieran `'use client'`? ¿Los nombres están en inglés (PascalCase)? ¿Se usa la estructura `export default function` + `export { Name }`? ¿Los componentes de feature siguen la ruta `features/nombre_feature/componentes/ComponentName/index.tsx`? | ☐ |
| V | Propiedad del Estado del Servidor | ¿Los datos remotos se obtienen mediante TanStack Query? ¿El estado del cliente está aislado en Zustand? | ☐ |

## Estructura del Proyecto

### Documentación (este feature)

```text
specs/[###-feature]/
├── plan.md              # Este archivo (salida del comando /speckit.plan)
├── research.md          # Salida de Fase 0 (comando /speckit.plan)
├── data-model.md        # Salida de Fase 1 (comando /speckit.plan)
├── quickstart.md        # Salida de Fase 1 (comando /speckit.plan)
├── contracts/           # Salida de Fase 1 (comando /speckit.plan)
└── tasks.md             # Salida de Fase 2 (comando /speckit.tasks - NO creado por /speckit.plan)
```

### Código Fuente (raíz del repositorio)
<!--
  ACCIÓN REQUERIDA: Reemplazar el árbol de marcadores de posición con la estructura
  concreta del feature. Eliminar las opciones no usadas y expandir con rutas reales
  (ej. apps/admin, packages/algo). El plan entregado no debe incluir etiquetas de Opción.
-->

```text
# [ELIMINAR SI NO SE USA] Opción 1: Proyecto único (DEFAULT)
src/
├── models/
├── services/
├── cli/
└── lib/

tests/
├── contract/
├── integration/
└── unit/

# [ELIMINAR SI NO SE USA] Opción 2: Aplicación web (cuando se detecte "frontend" + "backend")
backend/
├── src/
│   ├── models/
│   ├── services/
│   └── api/
└── tests/

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   └── services/
└── tests/

# [ELIMINAR SI NO SE USA] Opción 3: Móvil + API (cuando se detecte "iOS/Android")
api/
└── [igual que backend arriba]

ios/ or android/
└── [estructura específica de plataforma: módulos de feature, flujos de UI, tests de plataforma]
```

**Decisión de Estructura**: [Documentar la estructura seleccionada y referenciar los
directorios reales capturados arriba]

## Seguimiento de Complejidad

> **Completar SOLO si la Verificación Constitucional tiene violaciones que deben justificarse**

| Violación | Por qué es necesaria | Alternativa más simple rechazada porque |
|-----------|---------------------|----------------------------------------|
| [ej. 4to proyecto] | [necesidad actual] | [por qué 3 proyectos son insuficientes] |
| [ej. patrón Repository] | [problema específico] | [por qué acceso directo a BD es insuficiente] |
