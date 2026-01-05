"use client";
import Link from "next/link";
import { Visual } from "@/types/visuals";
import { Play } from "lucide-react";

interface VisualsListProps {
    className?: string;
    visuals: Visual[];
    selected: string;
    onSelect: (slug: string) => void;
}

export default function VisualsList({
    className,
    visuals,
    selected,
    onSelect,
}: VisualsListProps) {
    return (
        <div
            className={`${className} flex-1 min-h-0 flex flex-col gap-1 border-secondary border-2 p-1 overflow-y-auto`}
        >
            {visuals.map((v) => (
                <VisualItem
                    key={v.slug}
                    visual={v}
                    selected={v.slug == selected}
                    onSelect={onSelect}
                />
            ))}
        </div>
    );
}

interface VisualItemProps {
    visual: Visual;
    selected: boolean;
    onSelect: (slug: string) => void;
}

function VisualItem({ visual, selected, onSelect }: VisualItemProps) {
    return (
        <div
            className={`border-2 border-secondary transition-colors duration-150 ease-out ${
                selected ? "bg-secondary text-black" : "bg-black text-secondary"
            }`}
            onClick={() => onSelect(visual.slug)}
        >
            <Link
                className={"no-underline flex justify-between gap-2"}
                href={`/visuals/${visual.slug}`}
            >
                <div className="flex overflow-hidden text-nowrap gap-2">
                    <Play />
                    {visual.title}
                </div>
                {visual.isNew ? (
                    <span
                        className={`${
                            selected
                                ? "bg-black text-secondary"
                                : "bg-secondary text-black"
                        } pl-2 font-black`}
                    >
                        NEW!
                    </span>
                ) : (
                    <></>
                )}
            </Link>
        </div>
    );
}
