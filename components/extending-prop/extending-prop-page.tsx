import { ComponentPropsWithRef } from "react";

interface ButtonProp extends ComponentPropsWithRef<"button"> {
    variant: "primary" | "secondary";
    isLoading?: boolean;
}

export default function Button({
    variant,
    isLoading,
    children,
    className,
    disabled,
    ...props
}: ButtonProp) {
    return (
        <button
            className={`btn btn-${variant} ${className ?? ""}`}
            disabled={isLoading || disabled}
            {...props}
        >
            {isLoading ? "Loading..." : children}
        </button>
    );
}