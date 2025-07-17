import React from "react";

interface SubheaderProps {
    children: React.ReactNode;
    variant?: "filled" | "unfilled";
}

export default function Subheader({
    children,
    variant = "filled",
}: SubheaderProps) {
    return (
        <h2
            className={`text-xl font-black px-2 border-2 border-secondary uppercase 
                ${variant === "filled" && "bg-secondary text-black"}
                ${variant === "unfilled" && "bg-black text-secondary"}`}
        >
            {children}
        </h2>
    );
}
