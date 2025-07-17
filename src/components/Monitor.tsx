"use client";

import { useEffect, useRef, useState } from "react";

interface MonitorProps {
    children?: React.ReactNode;
}

export default function Monitor({ children }: MonitorProps) {
    const [aspectRatio, setAspectRatio] = useState(1);
    const monitorDepthRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const s = monitorDepthRef.current?.offsetHeight;
        console.log(aspectRatio);
    }, []);

    // monitorDepthRef.current?.offsetWidth;

    return (
        <div className="h-full rounded-xl overflow-hidden bg-radial-[at_50%_30%] from-[#fcf2df] to-[#c3bb9b] p-16">
            <div className="absolute top-0 left-0 w-screen h-screen p-5 pointer-events-none">
                <div className="border-[1px] border-black rounded-md h-full"></div>
            </div>
            <div
                ref={monitorDepthRef}
                className="h-full rounded-lg screen-depth p-10 border-[0.01px] border-black"
            >
                <div className="h-full rounded-md bg-black over flow-hidden p-4 overflow-hidden">
                    <div className="h-full flex flex-col">{children}</div>
                </div>
            </div>
        </div>
    );
}
