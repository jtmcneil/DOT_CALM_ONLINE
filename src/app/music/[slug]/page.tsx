import MusicDisply from "@/components/music/MusicDisplay";
import music from "@/lib/data/music";

export default async function MusicPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const selectedMusic = music.find((m) => m.slug === slug);

    return <MusicDisply className="" music={selectedMusic} />;
}
