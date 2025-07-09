## 📝 Lista de Tareas (API RESTful)

Este proyecto es una API RESTful desarrollada con **NestJS** y **TypeScript** que permite gestionar tareas (To-Do List) de forma segura mediante un sistema de autenticación y autorización. La aplicación se conecta a una base de datos **MySQL**, donde se almacenan los usuarios y sus respectivas tareas.

---

### 🚀 Funcionalidades principales

- Registro y login de usuarios con JWT
- Protección de rutas mediante **guards**
- Crear nuevas tareas
- Obtener todas las tareas
- Obtener una tarea específica
- Actualizar tareas
- Eliminar tareas
- Acceso restringido: cada usuario solo puede acceder a sus propias tareas

---

### ⚙️ Tecnologías utilizadas

- [NestJS](https://nestjs.com/)
- TypeScript
- MySQL
- TypeORM
- JWT
- Passport
- Bcrypt

---

### 🔐 Seguridad y buenas prácticas

- Contraseñas cifradas con **bcrypt**
- Uso de tokens JWT (Bearer Token) para autenticación
- Rutas protegidas con `JwtAuthGuard`
- Acceso controlado por usuario
- Uso de variables de entorno (`.env`) para datos sensibles

---

### Estructura del proyecto
task/
│
├── dist/                     # Archivos compilados (generados por TypeScript)
├── node_modules/             # Dependencias del proyecto
├── src/                      # Código fuente principal
│   ├── auth/                 # Lógica de autenticación (login, JWT, estrategia)
│   ├── decorators/           # Decoradores personalizados (como @roles)
│   ├── guards/               # Guards para proteger rutas (ej.JwtAuthGuard)
│   ├── rol/                  # Módulo para roles (si es utilizado)
│   ├── tareas/               # CRUD de tareas
│   └── usuarios/             # Registro de usuarios
│   ├── app.controller.ts     # Controlador raíz
│   ├── app.module.ts         # Módulo raíz que importa todos los demás módulos
│   ├── app.service.ts        # Servicio raíz (opcional)
│   └── main.ts               # Punto de entrada de la aplicación
│
├── test/                     # Pruebas unitarias
├── .env                      # Variables de entorno (secretos, config DB)
├── README.md                 # Documentación del proyecto
├── package.json              # Configuración del proyecto y dependencias
├── tsconfig.json             # Configuración de TypeScript
└── eslint.config.mjs         # Reglas de ESLint


### 📦 Instalación y ejecución

```bash
git clone https://github.com/Brayan127814/TASKLIST_NESTJS
cd TASKLIST_NESTJS/task
npm install
npm run start:dev



  

