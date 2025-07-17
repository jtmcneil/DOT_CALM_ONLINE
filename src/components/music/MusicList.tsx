"use client";
import { Music, Project, Track } from "@/types/music";
import { File, Folder, Tree } from "@/components/magicui/file-tree";

interface MusicListProps {
    music: Music[];
    selected: Music | null;
    onSelect: (music: Music) => void;
}

export default function MusicList({
    music,
    selected,
    onSelect,
}: MusicListProps) {
    return (
        <div className="h-full flex flex-col gap-4 border-secondary border-2">
            <Tree className="">
                {music.map((item, idx) => {
                    if ("tracks" in item) {
                        // It's a Project
                        return (
                            <ProjectItem
                                key={idx}
                                project={item}
                                selected={selected?.title === item.title}
                                onSelect={onSelect}
                            />
                        );
                    } else {
                        // It's a Track
                        return (
                            <TrackItem
                                key={idx}
                                track={item}
                                selected={selected?.title === item.title}
                                onSelect={onSelect}
                            />
                        );
                    }
                })}
            </Tree>
        </div>
    );
}

interface TrackItemProps {
    track: Track;
    selected: boolean;
    onSelect?: (track: Track) => void;
}

function TrackItem({ track, selected, onSelect }: TrackItemProps) {
    return (
        <File
            value={track.title}
            className={`font-dot text-md text-secondary font-semibold text-left ${
                selected && "bg-secondary text-black rounded-none font-black"
            }`}
            onClick={() => {
                if (onSelect) {
                    onSelect(track);
                }
            }}
        >
            {track.title}
        </File>
    );
}

interface ProjectItemProps {
    project: Project;
    selected: boolean;
    onSelect: (project: Project) => void;
}

function ProjectItem({ project, selected, onSelect }: ProjectItemProps) {
    return (
        <Folder
            value={project.title}
            element={project.title}
            className={`font-dot text-md text-secondary font-semibold ${
                selected && "bg-secondary text-black rounded-none font-black"
            }`}
            onClick={() => onSelect(project)}
        >
            {project.tracks.map((t) => (
                <TrackItem key={t.title} selected={false} track={t} />
            ))}
        </Folder>
    );
}
