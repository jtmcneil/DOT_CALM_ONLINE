"use client";
import Link from "next/link";
import { Music, Project, Single } from "@/types/music";
import { DiscAlbum, Play } from "lucide-react";

interface MusicListProps {
    className?: string;
    music: Music[];
    selected: string;
    onSelect: (slug: string) => void;
}

export default function MusicList({
    className,
    music,
    selected,
    onSelect,
}: MusicListProps) {
    return (
        <div
            className={`${className} flex-1 min-h-0 flex flex-col gap-1 border-secondary border-2 p-1 overflow-y-auto`}
        >
            {music.map((m) =>
                m.type == "single" ? (
                    <SingleItem
                        key={m.slug}
                        single={m}
                        selected={m.slug == selected}
                        onSelect={onSelect}
                    />
                ) : (
                    <ProjectItem
                        key={m.slug}
                        project={m}
                        selected={m.slug == selected}
                        onSelect={onSelect}
                    />
                )
            )}
        </div>
    );
}

interface SingleItemProps {
    single: Single;
    selected: boolean;
    onSelect: (slug: string) => void;
}

function SingleItem({ single, selected, onSelect }: SingleItemProps) {
    return (
        <div
            className={`border-2 border-secondary transition-colors duration-150 ease-out ${
                selected ? "bg-secondary text-black" : "bg-black text-secondary"
            }`}
            onClick={() => onSelect(single.slug)}
        >
            <Link
                className={"no-underline flex justify-between gap-2"}
                href={`/music#${single.slug}`}
            >
                <div className="flex overflow-hidden text-nowrap gap-2">
                    <Play />
                    {single.title}
                </div>
                {single.isNew ? (
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

interface ProjectItemProps {
    project: Project;
    selected: boolean;
    isNew?: boolean;
    onSelect: (slug: string) => void;
}

function ProjectItem({ project, selected, onSelect }: ProjectItemProps) {
    return (
        <div
            className={`border-2 border-secondary transition-colors duration-150 ease-out ${
                selected ? "bg-secondary text-black" : "bg-black text-secondary"
            }`}
            onClick={() => onSelect(project.slug)}
        >
            <Link
                className={"no-underline flex justify-between gap-2"}
                href={`/music#${project.slug}`}
            >
                <div className="flex overflow-hidden text-nowrap gap-2">
                    <DiscAlbum />
                    {project.title}
                </div>
                {project.isNew ? (
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
            <ol
                className={`bg-black text-secondary overflow-hidden transition-all duration-300 ease-out ${
                    selected ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                {project.tracks.map((t) => (
                    <li
                        key={t.title}
                        className="flex overflow-hidden text-nowrap gap-2 pl-5"
                    >
                        <Play />
                        {t.title}
                    </li>
                ))}
            </ol>
        </div>
    );
}
