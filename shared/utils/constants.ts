export const ROUTES_APP = {
	HOME: { path: '/', name: 'Inicio' },
	LOGIN: { path: '/inicia-sesion', name: 'Iniciar sesión' },
	REGISTER: { path: '/registro-de-tienda', name: 'Registro de tienda' },
	VERIFICATION: { path: '/verificacion', name: 'Verificación' },
	PROFILE: { path: '/mi-perfil', name: 'Mi perfil' },
	HISTORIAL: { path: '/historial', name: 'Historial' },
	DASHBOARD: { path: '/dashboard', name: 'Inicio' },
	TERMSANDCONDITIONS: {
		path: '/terminos-y-condiciones',
		name: 'Términos y condiciones',
	},
} as const
export const TYPE_SERVICE = 'SERVICE'
export const PHONE_MAX = 10
export const PHONE_PLACEHOLDER = '(442) 724 210'
export const CODE_VERIFICATION_MAX = 6
export const FIELD_REQUIRED = 'Campo requerido'
export const WIDTH_BREAKPOINT_MD = 768
export const PATH_CART = {
	EMPTY: 0,
	CATEGORIES: 1,
	NOSERVICE: 2,
	PHONE: 3,
	AMOUNT: 4,
	SUMMARY: 5
}
export const PUBLIC_ROUTES = ['/', '/inicia-sesion', '/registro-de-tienda', '/recupera-contrasena', '/verificacion']
export const AUTH_ROUTES = ['/inicia-sesion', '/registro-de-tienda']