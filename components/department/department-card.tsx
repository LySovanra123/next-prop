import { department } from "@/types/department-type"

type Props = {
    dep: department
}

const DepartmentCard = ({ dep }: Props) => {
    const d = dep

    return (
        <article style={{ border: "1px solid #e5e7eb", borderRadius: 8, padding: 20, background: "#ffffff", marginBottom: 16 }}>
            <header style={{ marginBottom: 12 }}>
                <h2 style={{ margin: "0 0 4px 0" }}>{d.departmentName}</h2>
                <p style={{ margin: 0, color: "#6b7280", fontSize: 14 }}>ID: {d.id}</p>
            </header>
        </article>
    )
}

export default DepartmentCard