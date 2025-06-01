-- CreateTable
CREATE TABLE "Motor" (
    "id" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "vehiculo" TEXT NOT NULL,
    "cilindrada" DOUBLE PRECISION NOT NULL,
    "valvulas" INTEGER NOT NULL,
    "modelo" INTEGER NOT NULL,
    "combustible" TEXT NOT NULL,
    "fechaIngreso" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaEgreso" TIMESTAMP(3),
    "fotoUrl" TEXT,

    CONSTRAINT "Motor_pkey" PRIMARY KEY ("id")
);
