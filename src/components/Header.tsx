import Link from "next/link";
import { HyperText } from "@/components/magicui/hyper-text";

interface HeaderProps {
    className?: string;
}

export default function Header({ className }: HeaderProps) {
    return (
        <div
            className={`w-full flex text-secondary border-b-2 border-secondary ${className}`}
        >
            <Link href={"/"}>
                <HyperText
                    className={`text-4xl font-dot`}
                    duration={2000}
                    animateOnHover={true}
                    characterSet={["%", "#", "@", "0", "!", "$"]}
                >
                    .CALM
                </HyperText>
            </Link>
        </div>
    );
}
