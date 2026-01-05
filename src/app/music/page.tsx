import { redirect } from "next/navigation";
import music from "@/lib/data/music";

export default function MusicIndexPage() {
    redirect(`/music/${music[0].slug}`);
}
