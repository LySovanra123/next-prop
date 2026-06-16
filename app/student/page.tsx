import StudentCard from "@/components/student/student-card"
import { studentResponse } from "@/type/student-type"

type Props = {
    student?: studentResponse
}

export default function Page({ student }: Props) {
    const fallback: studentResponse = {
        id: 1,
        name: "Jane Doe",
        age: 20,
        email: "jane.doe@example.com",
        address: {
            street: "123 Main St",
            city: "Anytown",
            postalCode: "12345",
            country: "USA",
        },
        department: {
            id: 1,
            departmentName: "IT"
        }
    }

    const fallback2: studentResponse = {
        id: 2,
        name: "Vanra",
        age: 20,
        email: "lysovanra.it@gmail.com",
        address: {
            street: "271",
            city: "Phnom Penh",
            postalCode: "12000",
            country: "Cambodia",
        },
        department: {
            id: 1,
            departmentName: "IT"
        }
    }

    const s = student ?? fallback
    const s2 = student ?? fallback2

    return (
        <div>
            <StudentCard student={s} />
            <StudentCard student={s2} />
        </div>
    )
}