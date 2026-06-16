import { studentResponse } from "@/type/student-type"

type Props = {
    student: studentResponse
}

const StudentCard = ({ student }: Props) => {
    const s = student

    return (
        <main style={{ padding: 24, fontFamily: "Inter, Arial, sans-serif" }}>
            <article style={{ maxWidth: 720, margin: "0 auto", border: "1px solid #e5e7eb", borderRadius: 8, padding: 20 }}>
                <header style={{ marginBottom: 16 }}>
                    <h1 style={{ margin: 0 }}>Student Profile</h1>
                    <p style={{ margin: 0, color: "#6b7280" }}>ID: {s.id}</p>
                </header>

                <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div>
                        <h2 style={{ margin: "0 0 8px 0" }}>{s.name}</h2>
                        <p style={{ margin: "0 0 4px 0" }}><strong>Age:</strong> {s.age}</p>
                        <p style={{ margin: "0 0 4px 0" }}><strong>Email:</strong> {s.email}</p>
                    </div>

                    <div>
                        <h3 style={{ margin: "0 0 8px 0" }}>Address</h3>
                        <p style={{ margin: "0 0 4px 0" }}>{s.address.street}</p>
                        <p style={{ margin: "0 0 4px 0" }}>{s.address.city}, {s.address.postalCode}</p>
                        <p style={{ margin: 0 }}>{s.address.country}</p>
                    </div>
                </section>

                {s.department && (
                    <section style={{ marginTop: 16 }}>
                        <h3 style={{ margin: "0 0 8px 0" }}>Department</h3>
                        <p style={{ margin: 0 }}><strong>Name:</strong> {s.department.departmentName}</p>
                        <p style={{ margin: 0 }}><strong>Dept ID:</strong> {s.department.id}</p>
                    </section>
                )}
            </article>
        </main>
    )
}

export default StudentCard