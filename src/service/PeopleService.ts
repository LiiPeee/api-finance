import { People } from '../model/People'
import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { PeopleRepository } from '../repository/PeopleRepository';
const prisma = new PrismaClient();

export class PeopleService {
    constructor(
        private readonly peopleRepository: PeopleRepository
    ) { }

    async createPeople(input: any): Promise<People | null> {
        const person = {
            id: input.id,
            firstName: input.firstName,
            lastName: input.firstName,
            email: input.email,
            birthDate: input.birthDate,
            balanceMonth: input.balanceMonth
        }

        const people = await this.peopleRepository.createPeople(person)
        return people;
    }
    async getPeople(input: any): Promise<People | null> {
        const { id } = input;
        const people = await this.peopleRepository.getPeople({
            where: {
                id,
            }
        })
        return people;
    }
    async updatePeople(id: any, data: any): Promise<People | any> {

        const people = await prisma.people.update({
            where: {
                id,
            },
            data,
            select: {
                birthDate: true,
                email: true,
                balanceMonth: true,
            }
        })
        return people;

    }
    async deletePeople(id: any): Promise<People | any> {

        const people = await prisma.people.delete({
            where: {
                id,
            },
        })
        return people;

    }
}
