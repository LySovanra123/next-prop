import { Teacher } from "@/types/teacher-type"

type prop = {
    teacher:Teacher
}

const TeacherCard = ({teacher}:prop) => {
    return(
        <main style={{ padding: 24, fontFamily: "Inter, Arial, sans-serif" }}>
            <article style={{ maxWidth: 720, margin: "0 auto", border: "1px solid #e5e7eb", borderRadius: 8, padding: 20 }}>
                <header style={{ marginBottom: 16 }}>
                    <h1 style={{ margin: 0 }}>Teacher Profile</h1>
                    <p style={{ margin: "8px 0 0", color: "#6b7280" }}>ID: {teacher.id}</p>
                </header>

                <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div>
                        <p style={{ margin: "0 0 4px 0" }}><strong>Name:</strong> {teacher.name}</p>
                        <p style={{ margin: "0 0 4px 0" }}><strong>Email:</strong> {teacher.email}</p>
                        <p style={{ margin: 0 }}><strong>Phone:</strong> {teacher.phone}</p>
                    </div>
                    <div>
                        <p style={{ margin: "0 0 4px 0" }}><strong>Qualifications:</strong> {teacher.qualifications}</p>
                        <p style={{ margin: 0 }}><strong>Experience:</strong> {teacher.experience} years</p>
                    </div>
                </section>

                <section style={{ marginTop: 16 }}>
                    <h2 style={{ margin: "0 0 8px 0" }}>Department</h2>
                    <p style={{ margin: "0 0 4px 0" }}><strong>Name:</strong> {teacher.department.departmentName}</p>
                    <p style={{ margin: 0 }}><strong>Dept ID:</strong> {teacher.department.id}</p>
                </section>
            </article>
        </main>
    )
}

export default TeacherCard