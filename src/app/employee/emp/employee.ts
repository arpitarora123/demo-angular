import { IEmployee } from "./emp";

export class Employee implements IEmployee {
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    dateOfBirth: Date;
}