import { redirect } from "next/navigation";
import visuals from "@/lib/data/visuals";

export default function VisualsIndexPage() {
    redirect(`/visuals/${visuals[0].slug}`);
}
