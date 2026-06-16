import StudentCard from "@/components/student/student-card"
import { studentResponse } from "@/types/student-type"

type Props = {
    student?: studentResponse
}

export default function Page({ student }: Props) {
    const students: studentResponse[] = []

    for (let i = 1; i <= 10; i++) {
        students.push({
            id: i,
            name: `Student ${i}`,
            age: 18 + i,
            email: `student${i}@example.com`,
            address: {
                street: `${i} Main St`,
                city: "Phnom Penh",
                postalCode: `1200${i}`,
                country: "Cambodia",
            },
            department: {
                id: 1,
                departmentName: "IT",
            },
        })
    }

    const displayedStudents = student ? [student] : students

    return (
        <main style={{ padding: 24, fontFamily: "Inter, Arial, sans-serif" }}>
            <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gap: 24 }}>
                <header>
                    <h1 style={{ margin: 0 }}>Student Directory</h1>
                    <p style={{ margin: "8px 0 0", color: "#6b7280" }}>
                        Showing {displayedStudents.length} student{displayedStudents.length === 1 ? "" : "s"}
                    </p>
                </header>

                {displayedStudents.map((item) => (
                    <StudentCard key={item.id} student={item} />
                ))}
            </div>
        </main>
    )
}