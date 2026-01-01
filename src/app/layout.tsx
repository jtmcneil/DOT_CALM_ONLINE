import type { Metadata } from "next";
import Header from "@/components/Header";
import Monitor from "@/components/Monitor";
import Dither from "@/components/reactbits/Dither/Dither";
import "./globals.css";

export const metadata: Metadata = {
    title: ".CALM",
    description: "official .calm website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // const aspectRatio = screen.width / screen.height;

    return (
        <html lang="en">
            <body>
                <div className="bg-black h-screen w-screen p-2 lg:px-20 xl:px-40 overflow-hidden">
                    <Monitor>
                        <main className="relative flex flex-col h-full min-h-0 min-w-0">
                            <Header />
                            <div className="flex-1 min-h-0 overflow-hidden relative">
                                <div className="z-0 absolute h-full w-full">
                                    <Dither
                                        waveColor={[0, 0.4, 0]}
                                        disableAnimation={false}
                                        enableMouseInteraction={false}
                                        mouseRadius={0.3}
                                        colorNum={4}
                                        waveAmplitude={0.4}
                                        waveFrequency={3}
                                        waveSpeed={0.05}
                                    />
                                </div>
                                {/* <div className="absolute h-3/5 w-3/5 bottom-[50%] right-[50%] translate-x-[50%] translate-y-[50%] backdrop-blur-sm rounded-4xl overflow-hidden" /> */}
                                {children}
                            </div>
                        </main>
                    </Monitor>
                </div>
            </body>
        </html>
    );
}
