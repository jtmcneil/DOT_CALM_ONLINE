import { Music } from "@/types/music";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowBigDown } from "lucide-react";

interface MusicDisplayProps {
    music: Music | null;
}

export default function MusicDisply({ music }: MusicDisplayProps) {
    return (
        <div className="h-full flex flex-col gap-4">
            {!music && <UnselectedDisplay />}
            {music && (
                <div className="border-secondary border-2 h-full p-2 text-secondary flex flex-col justify-between font-dot">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-6xl wrap-anywhere">
                            {music.title}
                        </h2>
                        <h3 className="font-black">
                            RELEASED {music.releaseDate.toLocaleDateString()}
                        </h3>
                        <div className="w-full flex gap-2 items-center">
                            <span className="flex-1 border-t-2 border-secondary" />
                            <span className="font-black text-2xl">
                                {"//////////"}
                            </span>
                            <span className="flex-1 border-t-2 border-secondary" />
                        </div>
                        <p>{music.description}</p>
                    </div>
                    {music.link && (
                        <div className="flex flex-col gap-2">
                            <div className="flex">
                                <ArrowBigDown
                                    size={64}
                                    className="text-center w-full"
                                />
                                <ArrowBigDown
                                    size={64}
                                    className="text-center w-full"
                                />
                                <ArrowBigDown
                                    size={64}
                                    className="text-center w-full"
                                />
                            </div>

                            <Button className="rounded-none bg-secondary font-black text-xl text-foreground">
                                <Link href={music.link}>LISTEN</Link>
                            </Button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

function UnselectedDisplay() {
    return <></>;
}
