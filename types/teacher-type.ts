import { department } from "./department-type"

export type Teacher = {
    id: number
    name: string
    email: string
    phone: string
    qualifications: string
    experience: number
    department: department
}
