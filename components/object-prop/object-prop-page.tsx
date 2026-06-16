type User = {
    id: number;
    name: string;
    age: number;
    address: string;
}

type userCardProp = {
    user: User;
}

const UserCard = ({ user }: userCardProp) => {
    return (
        <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-bold text-gray-900">
                {user.name}
            </h2>

            <div className="space-y-2 text-gray-700">
                <p>
                    <span className="font-semibold">ID:</span> {user.id}
                </p>

                <p>
                    <span className="font-semibold">Age:</span> {user.age}
                </p>

                <p>
                    <span className="font-semibold">Address:</span>{" "}
                    {user.address}
                </p>
            </div>
        </div>
    )
}

export default UserCard