import List from "@/components/generic/generic-page";

type User = {
    id: number;
    name: string;
};

export default function Page() {
    const users: User[] = [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
    ];

    return (
        <List
            items={users}
            renderItem={(user) => (
                <div key={user.id}>
                    {user.name}
                </div>
            )}
        />
    );
}