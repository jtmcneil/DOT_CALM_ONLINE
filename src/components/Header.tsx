import Link from "next/link";
import { HyperText } from "@/components/magicui/hyper-text";

export default function Header() {
    return (
        <div className="w-full flex text-secondary p-2 border-b-[1px] border-secondary">
            <Link href={"/music"}>
                <HyperText
                    className="text-4xl font-dot"
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
