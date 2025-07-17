import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import NavBar from "@/components/Navbar";
import { BlurFade } from "@/components/magicui/blur-fade";
import {} from "lucide-react";
import Monitor from "@/components/Monitor";

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
            <body className="h-screen p-2 bg-black">
                <Monitor>
                    <Header />
                    <main className="h-full gap-10 py-4">
                        {children}
                        <BlurFade inView>
                            <NavBar />
                        </BlurFade>
                    </main>
                </Monitor>
            </body>
        </html>
    );
}
