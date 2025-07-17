"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import MusicList from "@/components/music/MusicList";
import music from "@/lib/data/music";
import { Music } from "@/types/music";
import { useState } from "react";
import MusicDisply from "@/components/music/MusicDisplay";
import MusicCover from "@/components/music/MusicCover";
import Subheader from "@/components/Subheader";

export default function MusicPage() {
    const [selected, setSelected] = useState<Music | null>(null);

    return (
        <div className="flex h-full gap-4 ">
            <div className="flex-1">
                <BlurFade
                    className="flex-1 flex flex-col h-full"
                    inView
                    delay={0.7}
                >
                    <section className="h-full flex flex-col gap-4">
                        <Subheader>Music</Subheader>
                        <MusicList
                            music={music}
                            selected={selected}
                            onSelect={(music: Music) => {
                                setSelected(music);
                            }}
                        />
                    </section>
                </BlurFade>
            </div>
            <div className="flex-2 flex flex-col h-full ">
                <BlurFade
                    className="flex-1 flex flex-col justify-between gap-4"
                    inView
                    delay={0.3}
                >
                    <section className="h-full flex flex-col gap-4">
                        <MusicCover music={selected} />
                        <div className="h-16"></div>
                    </section>
                </BlurFade>
            </div>
            <div className="flex-1">
                <BlurFade
                    className="flex-1 flex flex-col h-full"
                    inView
                    delay={0.6}
                >
                    <section className="h-full flex flex-col gap-4">
                        <MusicDisply music={selected} />
                    </section>
                </BlurFade>
            </div>
        </div>
    );
}
