"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface MonitorProps {
    children?: React.ReactNode;
}

export default function Monitor({ children }: MonitorProps) {
    // const [aspectRatio, setAspectRatio] = useState(1);
    // const monitorDepthRef = useRef<HTMLDivElement>(null);
    // useEffect(() => {
    //     const s = monitorDepthRef.current?.offsetHeight;
    //     console.log(aspectRatio);
    // }, []);
    // monitorDepthRef.current?.offsetWidth;
    // return (
    //     <div className="h-full rounded-xl overflow-hidden bg-radial-[at_50%_30%] from-[#fcf2df] to-[#c3bb9b] p-16">
    //         <div className="absolute top-0 left-0 w-screen h-screen p-5 pointer-events-none">
    //             <div className="border-[1px] border-black rounded-md h-full"></div>
    //         </div>
    //         <div
    //             ref={monitorDepthRef}
    //             className="h-full rounded-lg screen-depth p-10 border-[0.01px] border-black"
    //         >
    //             <div className="h-full rounded-md bg-black over flow-hidden p-4 overflow-hidden">
    //                 <div className="h-full flex flex-col">{children}</div>
    //             </div>
    //         </div>
    //     </div>
    // );

    return (
        <div className="flex flex-col h-[calc(100vh-16px)] bg-[#a78e65] rounded-2xl overflow-hidden m-2">
            <div className="flex-2 relative bg-[url('/monitor/top.png')] bg-no-repeat bg-[length:100%_100%]">
                {/* <Image
                    src="/monitor/topScreen.jpeg"
                    alt="monitor top"
                    width={0}
                    height={0}
                    fill
                    className="object-fit"
                /> */}
            </div>
            <div className="flex flex-10 md:flex-12">
                <div className="relative w-10 md:w-30 bg-[url('/monitor/left.png')] bg-no-repeat bg-[length:100%_100%]">
                    {/* <Image
                        src="/monitor/left.png"
                        alt="monitor left"
                        width={0}
                        height={0}
                        fill
                    /> */}
                </div>
                <div className="flex-1 flex flex-col bg-[#2b2111]">
                    <div className="relative h-8 bg-[url('/monitor/topBorder.png')] bg-no-repeat bg-[length:100%_100%]">
                        {/* <Image
                            src="/monitor/topBorder.png"
                            alt="monitor top border"
                            fill
                        /> */}
                    </div>
                    <div className="bg-black flex-1 rounded-md -m-1 z-10">
                        {children}
                    </div>
                    <div className="relative h-5 bg-[url('/monitor/bottomBorder.png')] bg-no-repeat bg-[length:100%_100%]">
                        {/* <Image
                            src="/monitor/bottomBorder.png"
                            alt="monitor bottom border"
                            width={0}
                            height={0}
                            fill
                        /> */}
                    </div>
                </div>
                <div className="relative w-10 md:w-30 bg-[url('/monitor/right.png')] bg-no-repeat bg-[length:100%_100%]">
                    {/* <Image
                        src="/monitor/right.png"
                        alt="monitor right"
                        width={0}
                        height={0}
                        fill
                    /> */}
                </div>
            </div>
            <div className="flex-3 relative bg-[url('/monitor/bottom.png')] bg-no-repeat bg-[length:100%_100%]">
                {/* <Image
                    src="/monitor/bottom.png"
                    alt="monitor bottom"
                    width={0}
                    height={0}
                    fill
                /> */}
            </div>
        </div>
    );
}
