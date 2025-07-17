import { Music } from "@/types/music";
import { RetroGrid } from "../magicui/retro-grid";
import Image from "next/image";
import Dott from "../dott/Dott";

interface MusicCoverProps {
    music: Music | null;
}

export default function MusicCover({ music }: MusicCoverProps) {
    return (
        <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-secondary border-2 border-secondary text-xl font-black px-2">
                {music ? music.title : "..."}
            </h2>

            <div className="flex-1 relative flex border-secondary border-2 items-center justify-center overflow-hidden">
                <RetroGrid
                    opacity={0.3}
                    lightLineColor="#5ddf72"
                    darkLineColor="#5ddf72"
                    className=""
                />

                {music ? (
                    <Image
                        alt=""
                        src={music.cover}
                        width={300}
                        height={300}
                        className="absolute z-100 border-secondary border-2 m-6"
                    />
                ) : (
                    <div>
                        <Dott />
                    </div>
                )}
            </div>
        </div>
    );
}
