import React from "react";

interface SubheaderProps {
    children?: React.ReactNode;
    className?: string;
    variant?: "filled" | "unfilled";
}

export default function Subheader({
    children,
    variant = "filled",
    className,
}: SubheaderProps) {
    return (
        <h2
            className={`text-2xl font-black px-2 border-2 border-secondary uppercase 
                ${variant === "filled" && "bg-secondary text-black"}
                ${
                    variant === "unfilled" && "bg-black text-secondary"
                } ${className}`}
        >
            {children}
        </h2>
    );
}
