<!--
INFORME DE IMPACTO DE SINCRONIZACIÓN
=====================================
Cambio de versión: 1.2.1 → 1.2.2
Principios modificados: Ninguno
Secciones modificadas:
  - Flujo de Desarrollo › Ramas — añadida convención de nombres de ramas:
    feature/name_feature y fix/name_fix.
Secciones añadidas: Ninguna
Secciones eliminadas: Ninguna
Templates que requieren actualización:
  ✅ .specify/templates/plan-template.md — Convenciones de rutas referenciadas en Contexto Técnico
  ⚠ .specify/templates/spec-template.md — Sin cambios requeridos
  ⚠ .specify/templates/tasks-template.md — Sin cambios requeridos
TODOs pendientes:
  - Ninguno. Todos los campos resueltos.
-->

# Constitución de Kioskopago

## Principios Fundamentales

### I. Arquitectura Feature-First

Toda la lógica de negocio DEBE organizarse por dominio de funcionalidad bajo `features/`,
no por capa técnica. Cada feature agrupa únicamente los subdirectorios que necesita; no
se crean carpetas vacías. Las utilidades compartidas entre features pertenecen a `shared/`;
los primitivos de UI globales(shadcn/ui) pertenecen a `components/`.

Ningún feature PUEDE importar desde los módulos internos de otro feature. La comunicación
entre features DEBE realizarse a través de contratos en `shared/` o navegación por URL.

#### Subdirectorios de un feature

| Subdirectorio | Propósito | Contenido típico |
|---|---|---|
| `api/` | Funciones de acceso a la API del backend. Cada archivo encapsula una o más llamadas HTTP con Axios y devuelve promesas tipadas. Estas funciones son consumidas exclusivamente desde hooks de TanStack Query. | `login.ts`, `stores.ts`, `sales.ts` |
| `store/` | Stores de Zustand para estado del cliente exclusivo de UI. Solo persiste estado que no proviene del servidor: apertura de modales, paso activo de un wizard, selecciones temporales. | `cart.ts`, `sheetOpen.ts` |
| `types/` | Interfaces TypeScript y esquemas Zod que modelan las entidades del dominio. Deben reflejar los contratos de la API. Son importados por `api/` y `components/` del mismo feature. | `types.ts` |
| `components/` | Componentes React específicos del feature, organizados un componente por subcarpeta (`ComponentName/index.tsx`). No deben reutilizarse desde otros features. | `FormLogin/`, `StepAmount/`, `WalletCard/` |
| `utils/` | Funciones utilizadas dentro el feature (cuando es necesario) | `formatDateNow/` |

Estructura de referencia de un feature completo:

```
features/nombre_feature/
├── utils/        # Funciones utilizadas dentro del feature (cuando sea necesario)
├── api/          # Llamadas HTTP → consumidas por TanStack Query
├── store/        # Estado de UI → Zustand
├── types/        # Tipos e interfaces → TypeScript / Zod
└── components/   # Componentes → React (un subdirectorio por componente)
    └── ComponentName/
        └── index.tsx
```

**Fundamento**: Colocar el código de dominio en un mismo lugar previene el acoplamiento y
hace que los features sean revisables e implementables de forma independiente.

### II. Tipado Estricto y Validación de Esquemas

TypeScript DEBE usarse en todo el código fuente. El tipo `any` está prohibido; `unknown`
DEBE usarse cuando el tipo sea genuinamente incierto, y luego acotarse explícitamente.

Todo dato que cruce un límite externo (respuestas de API, entradas de formulario, cookies)
DEBE validarse con un esquema Zod antes de usarse. Los datos externos sin validar NO DEBEN
llegar a la lógica de negocio.

**Fundamento**: El proyecto gestiona flujos de pago; la coerción de tipos silenciosa o las
entradas no validadas son una clase de error inaceptable.

### III. Control de Acceso Basado en Roles (INNEGOCIABLE)

Toda ruta protegida DEBE estar resguardada por el middleware de Next.js (`middleware.ts`).
El middleware es el único punto de verificación de sesión y rol.

Los dos roles reconocidos son `ADMIN` y `GROCER`. Las ramas de UI específicas por rol en
componentes están permitidas, pero la verificación de rutas del lado del servidor NO DEBE
duplicarse en los componentes de página — pertenece exclusivamente a `middleware.ts`.

Los tokens y afirmaciones de rol DEBEN transmitirse a través de cookies HTTP-only
(constantes `COOKIE_NAMES`). NO DEBEN almacenarse en `localStorage` ni en Zustand.

**Fundamento**: Centralizar la verificación de autenticación previene brechas al agregar
nuevas rutas; el almacenamiento en cookies evita la exposición de credenciales por XSS.

### IV. UI Declarativa mediante Composición de Componentes

La capa de UI DEBE construirse a partir de primitivos de shadcn/ui (Radix UI + Tailwind CSS v4).
Los componentes personalizados DEBEN componerse a partir de estos primitivos — reemplazarlos
con alternativas de terceros requiere una decisión arquitectónica documentada.

Los estilos en línea (`style={{...}}`) están prohibidos. Todo el estilado DEBE usar clases
utilitarias de Tailwind o variables CSS definidas en `globals.css`.

**Server Components por defecto**: Todo componente nuevo DEBE ser un React Server Component
(RSC) a menos que requiera interactividad del cliente (eventos, hooks de estado, APIs del
navegador). Solo en ese caso DEBE añadirse la directiva `'use client'` al inicio del archivo.
La directiva NO DEBE colocarse en componentes que no la necesiten.

**Nombres en inglés**: Los nombres de todos los componentes DEBEN escribirse en inglés,
en formato PascalCase (ej. `ProductCard`, `CheckoutSummary`). No se permiten nombres en
español ni en cualquier otro idioma.

**Estructura de exportación canónica**: Todo componente DEBE seguir esta estructura base,
sin variaciones:

```tsx
export default function ComponentName() {
    return ()
}

export { ComponentName }
```

El nombre de la función DEBE coincidir con el nombre del archivo. La exportación nombrada
al final es obligatoria para permitir importaciones nombradas en tests y re-exportaciones.

**Estructura de carpetas de componentes**: Todo componente de feature DEBE ubicarse bajo
la siguiente ruta, sin excepciones:

```
features/nombre_feature/components/ComponentName/index.tsx
```

- `nombre_feature` — nombre del dominio en snake_case (ej. `cart`, `auth`, `admin`).
- `components/` — carpeta fija; agrupa todos los componentes del feature.
- `ComponentName/` — carpeta con el mismo nombre PascalCase que el componente.
- `index.tsx` — único archivo de entrada; contiene la definición y las exportaciones.

Los componentes de uso global (no ligados a un feature) se ubican en `shared/components/`
siguiendo la misma convención de subcarpeta por componente.

**Fundamento**: La consistencia y las garantías de accesibilidad provienen de la biblioteca
de primitivos; el estilado ad-hoc las fragmenta. Preferir RSC reduce el bundle del cliente
y mejora el rendimiento de carga. La estructura uniforme, los nombres en inglés y la
convención de carpetas facilitan la navegación y las revisiones en todo el equipo.

### V. Propiedad del Estado del Servidor mediante TanStack Query

Todos los datos remotos DEBEN obtenerse y cachearse a través de TanStack Query
(`useQuery` / `useMutation`). Las llamadas directas a `axios` dentro de componentes React
o stores de Zustand están prohibidas.

El estado de UI exclusivo del cliente (sheet abierto/cerrado, paso de wizard de formulario,
etc.) DEBE usar Zustand. Mezclar el caché del servidor y el estado del cliente en el mismo
store de Zustand está prohibido.

**Fundamento**: Separar responsabilidades entre caché del servidor (TanStack Query) y estado
del cliente (Zustand) previene errores de datos obsoletos y simplifica la depuración.

## Estructura de Rutas de la Aplicación

El router de Next.js (App Router) organiza las rutas en tres **route groups** que no
generan segmento de URL. Toda nueva ruta DEBE ubicarse dentro del grupo que corresponda
a su función; crear rutas fuera de estos grupos está prohibido sin enmienda constitucional.

```
app/
├── layout.tsx                          # Layout raíz global
├── page.tsx                            # / — landing pública
├── not-found.tsx                       # Página 404
├── provider.tsx                        # Providers globales (QueryClient, etc.)
│
├── (auth)/                             # Grupo: flujos de autenticación
│   ├── layout.tsx
│   ├── inicia-sesion/page.tsx          # /inicia-sesion
│   ├── registro-de-tienda/page.tsx     # /registro-de-tienda
│   └── verificacion/page.tsx          # /verificacion
│
├── (docs)/                             # Grupo: páginas legales e informativas
│   ├── aviso-de-privacidad/page.tsx    # /aviso-de-privacidad
│   ├── preguntas-frecuentes/page.tsx   # /preguntas-frecuentes
│   └── terminos-y-condiciones/page.tsx # /terminos-y-condiciones
│
├── (roles)/                            # Grupo: rutas protegidas por rol
│   ├── admin/                          # Rol ADMIN
│   │   ├── layout.tsx
│   │   ├── page.tsx                    # /admin (dashboard)
│   │   ├── tiendas/page.tsx           # /admin/tiendas
│   │   ├── transacciones/page.tsx     # /admin/transacciones
│   │   └── usuarios/page.tsx         # /admin/usuarios
│   │
│   └── tienda/                         # Rol GROCER
│       ├── layout.tsx
│       ├── page.tsx                    # /tienda (dashboard)
│       ├── historial/page.tsx         # /tienda/historial
│       └── mi-perfil/page.tsx         # /tienda/mi-perfil
```

### Clasificación de rutas

Todas las rutas están clasificadas en `shared/utils/constants.ts` mediante
`PUBLIC_ROUTES` y `AUTH_ROUTES`, que el middleware consume directamente.

| Clasificación | Rutas | Comportamiento |
|---|---|---|
| **Pública** | `/`, `/inicia-sesion`, `/registro-de-tienda`, `/verificacion`, `/recupera-contrasena`, `/terminos-y-condiciones`, `/aviso-de-privacidad`, `/preguntas-frecuentes` | Accesible sin sesión |
| **Protegida GROCER** | `/tienda`, `/tienda/*` | Requiere token + rol `GROCER` |
| **Protegida ADMIN** | `/admin`, `/admin/*` | Requiere token + rol `ADMIN` |

### Reglas de extensión de rutas

1. Toda ruta nueva DEBE declararse en `ROUTES_APP` de `shared/utils/constants.ts`
   antes de crear el `page.tsx` correspondiente.
2. Si la ruta requiere autenticación, DEBE añadirse al array `AUTH_ROUTES`
   (prefijo del grupo, no la ruta exacta).
3. Si la ruta es pública, DEBE añadirse al array `PUBLIC_ROUTES`.
4. Ninguna ruta PUEDE asumir protección implícita; toda ruta no listada en
   `AUTH_ROUTES` se trata como pública por el middleware.

## Estándares del Stack Tecnológico

| Capa | Tecnología | Versión |
|---|---|---|
| Framework | Next.js (App Router) | 15.x |
| Librería UI | React | 19.x |
| Lenguaje | TypeScript | 5.x |
| Estilos | Tailwind CSS | 4.x |
| Primitivos UI | Radix UI / shadcn/ui | última compatible |
| Estado Servidor | TanStack Query | 5.x |
| Estado Cliente | Zustand | 5.x |
| HTTP | Axios | 1.x |

Las actualizaciones a una versión mayor de cualquier dependencia de primer nivel (Next.js,
React, TypeScript) DEBEN proponerse mediante una enmienda a esta constitución antes de adoptarse.

Las variables de entorno DEBEN declararse en `.env.local` (nunca comprometidas).
Las variables `NEXT_PUBLIC_*` son seguras para exponer al navegador; todas las demás son
exclusivas del servidor.

## Flujo de Desarrollo

**Ramas**: El trabajo en features DEBE partir de `dev`. `main` es la rama de producción;
las fusiones a `main` requieren un PR.

Las ramas DEBEN nombrarse según el tipo de cambio:

| Tipo | Patrón | Ejemplo |
|---|---|---|
| Nueva funcionalidad | `feature/name_feature` | `feature/payment-history` |
| Corrección de error | `fix/name_fix` | `fix/login-redirect` |

El nombre DEBE ser en inglés, en snake_case, descriptivo y conciso. No se permiten
nombres genéricos como `feature/cambios` o `fix/error`.

**Puertas de Calidad de Código** — un PR NO DEBE fusionarse si falla cualquiera de las siguientes:

1. ESLint reporta errores (`next lint`).
2. Una nueva ruta omite la verificación de autenticación del middleware (revisión manual).
3. Los datos de una API externa se consumen sin un esquema Zod.
4. Ejecutar yarn build para verificar el compilado correcto(`yarn build`)

**Formato**: Prettier es el formateador (`yarn format`). Todo el código comprometido DEBE
estar formateado.

**Mensajes de Commit**: Usar Conventional Commits (`feat:`, `fix:`, `chore:`,
`refactor:`, `docs:`). Usar scope del feature cuando sea útil (ej. `feat(auth):`).

**Contratos de API**: La documentación de la API del backend está en
`https://dev.apidevlab.com/kiosko-api/docs`. Toda nueva integración de API DEBE referenciar
el contrato en la spec o descripción del PR relacionado.

## Gobernanza

Esta constitución tiene precedencia sobre todas las demás prácticas documentadas cuando
surjan conflictos. Cualquier práctica que contradiga un principio aquí listado es inválida
hasta que la constitución sea enmendada.

**Procedimiento de enmienda**:

1. Abrir un PR contra `dev` que actualice este archivo.
2. Incrementar la versión siguiendo las reglas de versionado semántico:
   - **MAYOR** — eliminación, redefinición o cambio de gobernanza incompatible de un principio.
   - **MENOR** — nuevo principio o sección, o guía materialmente ampliada.
   - **PARCHE** — aclaración, corrección de redacción o refinamiento no semántico.
3. Actualizar `LAST_AMENDED_DATE` a la fecha de fusión.
4. Ejecutar la lista de verificación del Informe de Impacto de Sincronización (ver inicio
   de este archivo) y actualizar los templates dependientes según sea necesario.
5. La descripción del PR DEBE incluir la justificación del incremento de versión.

**Revisión de cumplimiento**: Todo PR DEBE verificarse contra las puertas de Verificación
Constitucional definidas en `plan-template.md`. Las violaciones DEBEN documentarse en la
tabla de Seguimiento de Complejidad del plan con una justificación antes de que el PR sea
aprobado.

**Versión**: 1.2.2 | **Ratificada**: 2026-04-28 | **Última Enmienda**: 2026-04-28
