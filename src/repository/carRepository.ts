import prisma from "../config/database"
import { Car } from "@prisma/client"

async function getCars() {
  return await prisma.car.findMany()

}

async function getCar(id: number) {
  return await prisma.car.findUnique({ where: { id } })

}

async function getCarWithLicensePlate(licensePlate: string) {
  return await prisma.car.findUnique({ where: { licensePlate } })
}

async function createCar(model: string, licensePlate: string, year: number, color: string) {
  return await prisma.car.create({
    data: {
      model,
      licensePlate,
      year,
      color,
    },
  })
}

async function deleteCar(id: number) {
  return await prisma.car.delete({ where: { id } })
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;