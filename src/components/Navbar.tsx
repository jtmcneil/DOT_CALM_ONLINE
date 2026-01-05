import Link from "next/link";
import Image from "next/image";

interface NavLinkProps {
    href: string;
    classname?: string;
    children?: React.ReactNode;
    external?: boolean;
}

function NavLink({ href, external, children }: NavLinkProps) {
    if (external) {
        return (
            <a
                className={`relative inline-block w-15 h-15 transition active:brightness-75 active:scale-95`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        );
    } else
        return (
            <Link
                className={`relative inline-block w-15 h-15 transition active:brightness-75 active:scale-95`}
                href={href}
            >
                {children}
            </Link>
        );
}

export default function NavBar() {
    return (
        <div className="h-full flex flex-col md:flex-row px-8 md:px-28 pb-10 pt-2">
            <div className="flex-1 md:flex-2 md:order-2 flex items-center justify-center gap-4">
                <NavLink href="/" classname="shadow-md shadow-black">
                    <Image src="/monitor/home.png" alt="Home" fill />
                </NavLink>
                <NavLink href="/music">
                    <Image src="/monitor/music.png" alt="Music" fill />
                </NavLink>
                <NavLink href="/visuals">
                    <Image src="/monitor/visuals.png" alt="Visual" fill />
                </NavLink>
                <NavLink href="mailto:wwwdottcalm@gmail.com" external>
                    <Image src="/monitor/contact.png" alt="Contact" fill />
                </NavLink>
            </div>
            <div className="flex-1 md:flex-3 md:order-1 bg-[url('/monitor/vent.png')] bg-no-repeat bg-[length:100%_100%] mix-blend-darken" />
        </div>
    );
    // return (
    //     <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center z-50">
    //         <nav className="relative justify-center border-2 border-secondary gap-2 p-2 rounded-full flex-nowrap inline-flex">
    //             <NavLink href="/">
    //                 <HomeIcon />
    //             </NavLink>
    //             <NavLink href="/music">
    //                 <DiscAlbum />
    //             </NavLink>
    //             <NavLink href="/visuals">
    //                 <CassetteTape />
    //             </NavLink>
    //         </nav>
    //     </div>
    // );
}
