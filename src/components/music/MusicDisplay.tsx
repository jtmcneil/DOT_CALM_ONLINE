import { Music } from "@/types/music";
import Image from "next/image";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface MusicDisplayProps {
    className?: string;
    music?: Music;
}

export default function MusicDisply({ className, music }: MusicDisplayProps) {
    if (!music) return <></>;
    return (
        <div className={`${className} flex-1 flex flex-col min-h-0`}>
            <h2 className="p-1 bg-secondary">{music.title}</h2>
            <div className="flex-1 flex md:flex-col">
                <div className="flex-1 min-h-0 flex flex-col">
                    <div className="flex-1 relative w-full max-h-full">
                        <Image
                            src={music.coverDigital}
                            alt={`${music.title} cover`}
                            fill
                            className="z-10 object-contain"
                        />
                    </div>
                    <Dialog>
                        <DialogTrigger className="w-full text-center text-secondary underline md:text-2xl md:py-2">
                            PRINT
                        </DialogTrigger>
                        <DialogContent className="rounded-none w-100 h-140 md:w-120 md:h-170">
                            <DialogHeader className="text-left">
                                <DialogTitle className="text-xl font-black">
                                    {music.title}
                                </DialogTitle>
                                <DialogDescription>
                                    RELEASED{" "}
                                    {`${music.releaseDate.getMonth()}/${music.releaseDate.getDate()}/${music.releaseDate.getFullYear()}`}
                                </DialogDescription>
                            </DialogHeader>
                            <div className="relative w-full h-100">
                                <Image
                                    src={music.cover}
                                    alt={`${music.title} cover`}
                                    fill
                                    className="z-10 object-contain"
                                />
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
                <div className="bg-secondary z-10 flex flex-col md:flex-row gap-1 md:justify-between md:text-center p-2 text-secondary">
                    <Link className="bg-black px-1" href={music.links.spotify}>
                        Spotify
                    </Link>
                    <Link
                        className="bg-black px-1"
                        href={music.links.appleMusic}
                    >
                        Apple Music
                    </Link>
                    {music.links.youtube ? (
                        <Link
                            className="bg-black px-1"
                            href={music.links.youtube}
                        >
                            Music Video
                        </Link>
                    ) : (
                        <></>
                    )}
                    <Link className="bg-black px-1" href={music.links.tooLost}>
                        More
                    </Link>
                </div>
            </div>
        </div>
    );
}
