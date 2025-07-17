import Header from "@/components/Header";
import NavBar from "@/components/Navbar";
import Subheader from "@/components/Subheader";
import BlogColumn from "@/components/blog/BlogColumn";
import Dott from "@/components/dott/Dott";
import { BlurFade } from "@/components/magicui/blur-fade";

export default async function Home() {
    return (
        <div className="flex h-full gap-4 ">
            <div className="flex-1">
                <BlurFade className="flex-1 flex flex-col" inView delay={0.7}>
                    <Subheader>NEW!</Subheader>
                </BlurFade>
            </div>
            <div className="flex-2 flex flex-col">
                <BlurFade className="flex-1 flex flex-col" inView delay={0.3}>
                    <Subheader variant="unfilled">DOTT</Subheader>
                    <Dott />
                    <div className="h-20"></div>
                </BlurFade>
            </div>
            <div className="flex-1"></div>
        </div>
    );
}
