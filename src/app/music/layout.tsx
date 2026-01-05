"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import music from "@/lib/data/music";
import Subheader from "@/components/Subheader";
import { RetroGrid } from "@/components/magicui/retro-grid";
import MusicList from "@/components/music/MusicList";
import { useMemo, useState } from "react";
import MusicDisply from "@/components/music/MusicDisplay";

export default function MusicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [selected, setSelected] = useState(music[0].slug);

    return (
        <div className="flex flex-col h-full min-h-0">
            <div className="md:order-1 flex-1 flex flex-col md:flex-row py-2 md:gap-2 overflow-auto md:overflow-hidden min-h-0">
                {/* INFO PANE */}
                <div className="flex-1 md:flex-2 flex flex-col mb-2 md:m-0 md:order-2 min-h-0">
                    <BlurFade className="" inView delay={0.3}>
                        <Subheader
                            variant="unfilled"
                            className="w-full sticky top-0 z-10 shadow-sm shadow-black mb-2"
                        >
                            INFO
                        </Subheader>
                    </BlurFade>
                    <BlurFade
                        className="flex-1 flex flex-col backdrop-blur-sm border-2 border-secondary shadow-sm shadow-black min-h-0"
                        inView
                        delay={0.5}
                    >
                        {children}
                        <RetroGrid
                            opacity={0.4}
                            lightLineColor="#5ddf72"
                            darkLineColor="#5ddf72"
                            className="absolute top-0 left-0"
                        />
                    </BlurFade>
                </div>
                {/* MUSIC SELECTION PANE */}
                <div className="md:order-1 flex-1 text-secondary min-h-0">
                    <BlurFade
                        className="h-full flex flex-col min-h-0"
                        inView
                        delay={0.6}
                    >
                        <Subheader
                            variant="filled"
                            className="w-full mb-2 sticky top-0 shadow-sm shadow-black z-20"
                        >
                            MUSIC
                        </Subheader>
                        <MusicList
                            music={music}
                            selected={selected}
                            onSelect={setSelected}
                            className=""
                        />
                    </BlurFade>
                </div>
            </div>
        </div>
    );
}
