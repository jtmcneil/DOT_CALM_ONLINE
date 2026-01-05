import { Visual } from "@/types/visuals";
import { PlayCircle } from "lucide-react";
import Image from "next/image";

interface VisualDisplayProps {
    className?: string;
    visual?: Visual;
}

export default function VisualDisplay({
    className,
    visual,
}: VisualDisplayProps) {
    if (!visual) return <>NO VISUAL SELECTED</>;
    return (
        <div className={`${className} flex-1 flex flex-col min-h-0`}>
            <h2 className="p-1 pl-2 bg-secondary">{visual.title}</h2>
            <div className="flex-1 flex md:flex-col">
                <div className="flex-1 min-h-0 flex p-4 md:p-10">
                    <a
                        className="flex-1 relative w-full max-h-full shadow-sm"
                        href={visual.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={visual.cover}
                            alt={`${visual.title} cover`}
                            fill
                            className="z-10 object-contain bg-secondary border-2 border-secondary"
                        />
                        <div className="absolute z-50 left-[50%] top-[50%] -translate-[50%] flex items-center justify-center">
                            <PlayCircle className="text-secondary bg-black rounded-full border-2 border-black size-10 md:size-15 opacity-80" />
                        </div>
                    </a>
                </div>
                <div className="bg-secondary z-10 flex text-center p-2 text-secondary justify-center text-xl">
                    <a
                        className="bg-black px-1"
                        href={visual.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LOAD
                    </a>
                </div>
            </div>
        </div>
    );
}
