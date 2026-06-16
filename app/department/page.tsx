import DepartmentCard from "@/components/department/department-card";
import { department } from "@/types/department-type"

type Props = {
    dep?: department
}

export default function Page({ dep }: Props) {

    const departments: department[] = [];
    for (let i = 1; i <= 5; i++) {
        departments.push({
            id: i,
            departmentName: `IT ${i}`
        })
    }

    const deplayDepartment = dep ? [dep] : departments

    return (
        <main style={{ padding: 24, fontFamily: "Inter, Arial, sans-serif" }}>
            <section style={{ maxWidth: 720, margin: "0 auto" }}>
                <h1>Department</h1>
                <p>This department page is now available.</p>
            </section>
            {
                deplayDepartment.map((d) => (
                    <DepartmentCard
                        key={d.id}
                        dep={d} />
                ))
            }
        </main>
    )
}
