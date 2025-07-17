import Link from "next/link";
import { BorderBeam } from "./magicui/border-beam";
import { HomeIcon, DiscAlbum, CassetteTape } from "lucide-react";

export default function NavBar() {
    return (
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center z-50">
            <nav className="relative justify-center border-2 border-secondary gap-2 p-2 rounded-full flex-nowrap inline-flex">
                <NavLink href="/">
                    <HomeIcon />
                </NavLink>
                <NavLink href="/music">
                    <DiscAlbum />
                </NavLink>
                <NavLink href="/visuals">
                    <CassetteTape />
                </NavLink>
            </nav>
        </div>
    );
}

interface NavLinkProps {
    href: string;
    children?: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
    return (
        <Link
            className={
                "h-12 w-22 rounded-full border-secondary border-2 flex items-center justify-center text-secondary hover:text-black hover:bg-secondary hover:w-25 transition-all duration-300 ease"
            }
            href={href}
        >
            {children}
        </Link>
    );
}
