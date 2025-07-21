# 🧠 App de Gestión de Accesos - Angular + NestJS + PostgreSQL
Este proyecto implementa una solución fullstack para administrar accesos a sistemas mediante aplicaciones, menús y perfiles de usuario.

## 🧰 Tecnologías usadas
- **Frontend**: Angular 19
- **Backend**: NodeJS 22 con NestJS + Sequelize
- **Base de Datos**: PostgreSQL 16
- **Contenedores**: Docker + Docker Compose

## 🚀 Cómo levantar el proyecto (modo Docker)
1. Clona el repositorio:
```bash
git clone https://github.com/tu_usuario/tu_repo.git
cd tu_repo
```
2. Levanta los servicios:
```bash
docker-compose up --build
```
3. Accede a:
- Frontend: http://localhost:4200  
- Backend API: http://localhost:3000

## 🛠️ Configuración de la Base de Datos
- Usuario: `nestuser`
- Contraseña: `nestpass`
- Base de datos: `accesosdb`
Puedes cargar el modelo ejecutando el script `Entidades.sql` en la base de datos.

## 📁 Estructura
```
├── backend/      → Proyecto NestJS
├── frontend/     → Proyecto Angular
├── docker-compose.yml
├── README.md
└── Entidades.sql
```