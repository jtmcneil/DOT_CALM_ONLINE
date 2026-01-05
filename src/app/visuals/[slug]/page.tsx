import VisualDisplay from "@/components/visuals/VisualDisplay";
import visuals from "@/lib/data/visuals";

export default async function VisualPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const selectedVisual = visuals.find((v) => v.slug === slug);

    return <VisualDisplay className="" visual={selectedVisual} />;
}
