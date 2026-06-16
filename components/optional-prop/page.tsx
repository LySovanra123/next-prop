"use client"

type ButtonProp = {
    text: string
    color: string
}

const Button = ({ text, color }: ButtonProp) => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <button className="border rounded" style={{ color }}>{text}</button>
        </div>
    )
}

export default Button