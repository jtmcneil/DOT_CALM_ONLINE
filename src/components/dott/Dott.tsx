"use client";

import { useEffect, useRef, useState } from "react";
import "./Dott.css";
import { animations } from "./animations";
import type { Motion } from "./animations";

const ANIMATION_DELAY_MIN = 8;
const ANIMATION_DELAY_MAX = 12;

// const ANIMATION_DELAY_MIN = 0;
// const ANIMATION_DELAY_MAX = 2;

interface DottProps {
    audioEnabled?: boolean;
    className?: string;
}

export default function Dott({ className }: DottProps) {
    const [motion, setMotion] = useState<Motion>({
        leftEye: "blink",
        rightEye: "blink",
        t: 1,
        d: 2,
    });
    const initialized = useRef(false);

    function timeout(delay: number) {
        return new Promise((res) => setTimeout(res, delay));
    }

    // const runAnimation = () => {};

    useEffect(() => {
        const animateDott = async () => {
            const defaultMotion: Motion = {
                leftEye: "blink",
                rightEye: "blink",
                t: 1,
                d: 2,
            };
            initialized.current = true;

            const span = ANIMATION_DELAY_MAX - ANIMATION_DELAY_MIN;
            const delay =
                Math.floor(Math.random() * (span + 1)) + ANIMATION_DELAY_MIN;
            const randomIndex = Math.floor(Math.random() * animations.length);
            const animation = animations[randomIndex];

            await timeout(delay * 1000);
            for (const motion of animation.motions) {
                setMotion(motion);
                await timeout((motion.t + motion.d) * 1000);
            }
            setMotion(defaultMotion);
            animateDott();
        };

        if (!initialized.current) {
            animateDott();
        }
    }, []);

    return (
        <div className={`flex flex-col ${className}`}>
            <div className="flex flex-col justify-center flex-1">
                <div id="Dott" className=" p-10 relative items-center">
                    <div
                        id="Face"
                        className={`${
                            motion.face || ""
                        } w-full flex flex-col gap-10`}
                    >
                        <div
                            id="Eyes"
                            className="h-40 flex gap-15 w-full justify-center items-end"
                        >
                            <div
                                id="LeftEye"
                                className={`eye bg-secondary h-full border border-black ${motion.leftEye}`}
                                style={{
                                    transition: `all ${motion.t}s ease`,
                                }}
                            ></div>
                            <div
                                id="RightEye"
                                className={`eye bg-secondary h-full border border-black ${motion.rightEye}`}
                                style={{
                                    transition: `all ${motion.t}s ease`,
                                }}
                            ></div>
                        </div>
                        <div
                            id="Mouth"
                            className={`bg-secondary border border-black ${motion.mouth}`}
                            style={{ transition: `all ${motion.t}s ease` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
