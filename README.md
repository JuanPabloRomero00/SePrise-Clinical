# SePrise Clinical

Sistema web para gestión clínica y atención médica. Plataforma desarrollada para la Clínica SePrise, que ofrece servicios de salud y bienestar desde 1940.

## Descripción

SePrise Clinical es una aplicación web que proporciona una interfaz moderna y responsive para la gestión de servicios clínicos, incluyendo funcionalidades de autenticación de usuarios, panel administrativo y gestión de pacientes.

## Tecnologías

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos personalizados y diseño responsive
- **JavaScript (ES6+)**: Lógica del cliente y manipulación del DOM
- **Bootstrap 5.3.0**: Framework CSS para componentes responsivos

### Dependencias Externas
- Bootstrap 5.3.0 (CDN): Framework de diseño responsive
- Fuentes e iconos personalizados

## Estructura del Proyecto

```
SePrise-Clinical/
├── index.html              # Página principal
├── README.md               # Documentación del proyecto
├── css/                    # Estilos CSS
│   ├── styles.css          # Estilos principales del sitio
│   └── iniciarsesion.css   # Estilos específicos para login
├── js/                     # Scripts JavaScript
│   ├── inicioSesion.js     # Lógica de autenticación
│   ├── scrollTopButton.js  # Funcionalidad de scroll to top
│   └── toggleMenu.js       # Menú hamburguesa responsive
├── img/                    # Recursos gráficos
│   └── [imágenes del sitio]
└── sections/               # Páginas secundarias
    ├── admin.html          # Panel administrativo
    ├── iniciarsesion.html  # Página de inicio de sesión
    └── user.html           # Panel de usuario
```

## Funcionalidades

### Página Principal (index.html)
- Diseño responsive con menú hamburguesa
- Secciones: Inicio, Nosotros, Servicios, Contacto
- Navegación fluida y optimizada para dispositivos móviles
- Metadatos SEO y Open Graph implementados

### Sistema de Autenticación
- Formulario de inicio de sesión con validación
- Manejo de errores de autenticación
- Redirección a paneles específicos según tipo de usuario

### Paneles de Usuario
- **Panel Administrativo** (`admin.html`): Gestión de sistema
- **Panel de Usuario** (`user.html`): Interfaz para pacientes

### Características Técnicas
- Diseño mobile-first
- Navegación accesible
- Validación de formularios en el cliente
- Estructura modular de archivos

## Instalación y Uso

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional para desarrollo)

### Ejecución Local
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/JuanPabloRomero00/SePrise-Clinical.git
   ```

2. Navegar al directorio del proyecto:
   ```bash
   cd SePrise-Clinical
   ```

3. Abrir `index.html` en un navegador o servir con un servidor local:
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Node.js (http-server)
   npx http-server
   ```

4. Acceder a `http://localhost:8000` en el navegador

## Navegación

- **Página Principal**: `/index.html`
- **Inicio de Sesión**: `/sections/iniciarsesion.html`
- **Panel Administrativo**: `/sections/admin.html`
- **Panel de Usuario**: `/sections/user.html`

## Desarrollo

### Estructura de Archivos
- Los estilos están organizados por funcionalidad
- Los scripts JavaScript siguen principios de separación de responsabilidades
- Las páginas secundarias están agrupadas en la carpeta `sections/`

### Estándares de Código
- HTML semántico y accesible
- CSS modular y reutilizable
- JavaScript vanilla sin frameworks adicionales
- Nomenclatura consistente en archivos y clases

## Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crear una rama para la nueva funcionalidad
3. Realizar los cambios siguiendo los estándares establecidos
4. Probar la funcionalidad en diferentes dispositivos
5. Enviar un pull request con descripción detallada

## Licencia

Este proyecto está desarrollado para uso específico de la Clínica SePrise.
