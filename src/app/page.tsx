import BytesSection from "@/components/BytesSection";
import StatusBar from "@/components/StatusBar";
import Subheader from "@/components/Subheader";
import Dott from "@/components/dott/Dott";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { RetroGrid } from "@/components/magicui/retro-grid";
import NewsSection from "@/components/news/NewsSection";

export default async function Home() {
    return (
        <div className="flex flex-col h-full min-h-0">
            <BlurFade className="md:order-2" inView delay={0.2}>
                <StatusBar className="border-b-2 border-secondary md:border-0 z-10 shadow-sm shadow-black" />
            </BlurFade>
            <div className="md:order-1 flex-1 flex flex-col md:flex-row py-2 md:gap-2 overflow-auto md:overflow-hidden">
                <div className="flex-3 flex flex-col mb-2 md:m-0 md:order-2">
                    <BlurFade className="" inView delay={0.3}>
                        <Subheader
                            variant="unfilled"
                            className="w-full sticky top-0 z-10 shadow-sm shadow-black mb-2"
                        >
                            DOTT
                        </Subheader>
                    </BlurFade>
                    <BlurFade
                        className="relative flex-1 flex flex-col backdrop-blur-sm border-2 border-secondary shadow-sm shadow-black"
                        inView
                        delay={0.5}
                    >
                        {/* <BorderBeam
                            duration={40}
                            size={300}
                            colorFrom="#5DDF72"
                            colorTo="#5DDF72"
                        /> */}
                        <RetroGrid
                            opacity={0.4}
                            lightLineColor="#5ddf72"
                            darkLineColor="#5ddf72"
                            className="absolute top-0 left-0"
                        />
                        {/* <div className="flex-1 flex flex-col"> */}

                        {/* <div className="h-full w-full md:mb-2 backdrop-blur-md bg-black/90" /> */}
                        <Dott className="flex-1" />
                        {/* <div className="h-full w-full md:mt-2 backdrop-blur-md bg-black/90" /> */}
                        {/* </div> */}
                    </BlurFade>
                </div>
                <div className="md:order-1 flex-2 text-secondary">
                    <BlurFade
                        className="h-full flex flex-col min-h-0"
                        inView
                        delay={0.6}
                    >
                        {/* <div className="h-full flex flex-col min-h-0 "> */}
                        <Subheader
                            variant="filled"
                            className="w-full mb-2 sticky top-0 shadow-sm shadow-black z-20"
                        >
                            NEWS!
                        </Subheader>
                        <NewsSection className="flex-1 overflow-auto scrollbar-xs border-2 border-secondary scroll-smooth shadow-sm shadow-black" />
                        {/* </div> */}
                    </BlurFade>
                </div>
                <div className="hidden md:flex flex-2 order-3 text-secondary">
                    <BlurFade
                        className="flex-1 flex flex-col"
                        inView
                        delay={0.9}
                    >
                        <Subheader
                            variant="filled"
                            className="w-full mb-2 shadow-sm shadow-black"
                        >
                            BYTES!
                        </Subheader>
                        <BytesSection className="flex-1 overflow-auto scrollbar-xs border-2 border-secondary bg-black/90 shadow-sm shadow-black" />
                    </BlurFade>
                </div>
            </div>
        </div>
    );
}
