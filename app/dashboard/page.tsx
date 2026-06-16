type prop = {
    title:string
    description:string;
}

const Dashboard = ({title,description}:prop) =>{
    return(
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-semibold mb-2">Welcome to Dashboard</h1>
                <h2 className="text-lg mb-1">Title: {title}</h2>
                <p className="text-sm text-gray-600">Description: {description}</p>
            </div>
        </div>
    )
}
export default Dashboard