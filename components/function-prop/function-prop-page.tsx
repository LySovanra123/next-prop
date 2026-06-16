'use client'

type Prop = {
    sum: () => void;
    sub: () => void;
    result: string;
}

const FunctionProp = ({ sum, sub, result }: Prop) => {
    return (
        <div className="grid">
            <button className="border-b-blue-600" onClick={sum}>Sum</button>
            <h1>{result}</h1>
            <button className="border-amber-300" onClick={sub}>Sub</button>
        </div>
    )
}
export default FunctionProp