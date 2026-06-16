import TeacherCard from "@/components/teacher/teacher-card"
import { Teacher } from "@/types/teacher-type"

type Prop = {
    teacher?: Teacher
}

const Page = ({ teacher }: Prop) => {
    const fallbackTeacher: Teacher = {
        id: 1,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+855 12 345 678",
        qualifications: "M.Sc. in Computer Science",
        experience: 8,
        department: {
            id: 1,
            departmentName: "IT",
        },
    }

    const displayedTeacher = teacher ?? fallbackTeacher

    return <TeacherCard teacher={displayedTeacher}/>
}

export default Page