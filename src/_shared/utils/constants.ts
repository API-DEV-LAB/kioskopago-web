export const ROUTES_APP = {
	HOME: { path: '/', name: 'Inicio' },
	LOGIN: { path: '/inicia-sesion', name: 'Iniciar sesión' },
	REGISTER: { path: '/registro-de-tienda', name: 'Registro de tienda' },
	VERIFICATION: { path: '/verificacion', name: 'Verificación' },
	PROFILE: { path: '/mi-perfil', name: 'Mi perfil' },
	HISTORIAL: { path: '/historial', name: 'Historial' },
	TERMSANDCONDITIONS: {
		path: '/terminos-y-condiciones',
		name: 'Términos y condiciones',
	},
} as const

export const PHONE_MAX = 10
