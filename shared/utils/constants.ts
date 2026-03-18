export const ROUTES_APP = {
  HOME: { path: '/', name: 'Inicio' },
  LOGIN: { path: '/inicia-sesion', name: 'Iniciar sesión' },
  ADMIN_LOGIN: { path: '/admin', name: 'Admin' },
  REGISTER: { path: '/registro-de-tienda', name: 'Registro de tienda' },
  VERIFICATION: { path: '/verificacion', name: 'Verificación' },
  PROFILE: { path: '/mi-perfil', name: 'Mi perfil' },
  HISTORIAL: { path: '/historial', name: 'Historial' },
  DASHBOARD: { path: '/dashboard', name: 'Inicio' },
  ADMIN_DASHBOARD: { path: '/admin/dashboard', name: 'Admin Dashboard' },
  TERMSANDCONDITIONS: { path: '/terminos-y-condiciones', name: 'Términos y condiciones' },
  RECOVERPASSWORD: { path: '/recupera-contrasena', name: 'Recuperar contraseña' },
} as const

export const TYPE_SERVICE = 'SERVICE'
export const PHONE_MAX = 10
export const PHONE_PLACEHOLDER = '(442) 724 2100'
export const CODE_VERIFICATION_MAX = 6
export const FIELD_REQUIRED = 'Campo requerido'
export const WIDTH_BREAKPOINT_MD = 768
export const PATH_CART = {
  EMPTY: 0,
  CATEGORIES: 1,
  NOSERVICE: 2,
  PHONE: 3,
  AMOUNT: 4,
  SUMMARY: 5,
}
export const PUBLIC_ROUTES = [
  '/',
  '/inicia-sesion',
  '/admin',
  '/registro-de-tienda',
  '/recupera-contrasena',
  '/verificacion',
]
export const AUTH_ROUTES = ['/inicia-sesion', '/registro-de-tienda', '/admin']
export const ADMIN_ROUTES = ['/admin/dashboard', '/admin/tiendas', '/admin/usuarios', '/admin/transacciones']
export const GROCER_ROUTES = ['/dashboard', '/historial', '/mi-perfil']

export const IS_DEV = process.env.NODE_ENV === 'development'
export const DEV_OTP_HINT = '123456'
