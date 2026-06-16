import Button from "@/components/extending-prop/extending-prop-page";

type PageProps = {
    searchParams: {
        name?: string;
        age?: string;
    };
};

export default function Page({ searchParams }: PageProps) {
    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Home Page</h1>

            <p>Name: {searchParams.name ?? "No name"}</p>
            <p>Age: {searchParams.age ?? "No age"}</p>

            <Button variant="primary" isLoading={false}>
                Click Me
            </Button>
        </div>
    );
}