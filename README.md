# 🛠️ Stock Motores - Backend

Este proyecto es un backend hecho con **NestJS** + **Prisma ORM** + **PostgreSQL**, pensado para manejar el stock de motores. Tiene endpoints básicos para crear, leer, actualizar y borrar motores.

---

## ⚙️ Requisitos previos

Asegurate de tener instalado:

- Node.js (recomendado: 18.x o superior)
- PostgreSQL corriendo (local o en la nube)
- Git

---

## 🚀 Instalación

Cloná el repo:

```bash
git clone https://github.com/christopherhess0/Stock-Motores.git
cd Stock-Motores
npm install
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/nombreDeTuBase"
npx prisma generate
Para aplicar los modelos a la base (solo la primera vez o si migrás):


npx prisma migrate dev --name init
🧪 Levantar el servidor en desarrollo
npm run start:dev


📬 Endpoints disponibles
Ejemplos con Postman:

GET /motores → Lista todos los motores

POST /motores → Crea un motor nuevo

GET /motores/:id → Muestra un motor por ID

PATCH /motores/:id → Actualiza un motor por ID

DELETE /motores/:id → Elimina un motor por ID