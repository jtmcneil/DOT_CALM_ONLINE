import { BlurFade } from "@/components/magicui/blur-fade";
import { RetroGrid } from "@/components/magicui/retro-grid";
import MusicDisply from "@/components/music/MusicDisplay";
import Subheader from "@/components/Subheader";
import music from "@/lib/data/music";
import { useMemo } from "react";

export default async function MusicPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const selectedMusic = music.find((m) => m.slug === slug);

    return <MusicDisply className="" music={selectedMusic} />;
}
