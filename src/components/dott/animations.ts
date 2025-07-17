type Animation = {
    name: string;
    motions: Motion[];
};

type Motion = {
    t: number; //the time it takes to do the animation
    d: number; //the delay after the animation is done
    leftEye?: string;
    rightEye?: string;
    mouth?: string;
    face?: string;
};

const animations: Animation[] = [
    {
        name: "lookAround1",
        motions: [
            {
                t: 0.5,
                d: 1,
                leftEye: "lookLeft",
                rightEye: "lookLeft",
                mouth: "lookLeft",
            },
            {
                t: 0.8,
                d: 1.5,
                leftEye: "lookRight",
                rightEye: "lookRight",
                mouth: "lookRight",
            },
        ],
    },
    // {
    //     name: "lookAround2",
    //     motions: [
    //         {
    //             t: 0.2,
    //             d: 2,
    //             leftEye: "lookRight",
    //             rightEye: "lookRight",
    //             mouth: "lookRight",
    //         },
    //         {
    //             t: 3,
    //             d: 1,
    //             leftEye: "lookLeft",
    //             rightEye: "lookLeft",
    //             mouth: "lookRight",
    //         },
    //     ],
    // },
    // {
    //     name: "yawn",
    //     motions: [
    //         {
    //             t: 3,
    //             d: 4,
    //             leftEye: "squint",
    //             rightEye: "squint",
    //             mouth: "yawn",
    //             face: "rollUp",
    //         },
    //     ],
    // },
    // {
    //     name: "reboot",
    //     motions: [
    //         {
    //             t: 0,
    //             d: 2,
    //             leftEye: "xEye",
    //             rightEye: "xEye",
    //             mouth: "zigZag",
    //         },
    //         {
    //             t: 0,
    //             d: 0.5,
    //             leftEye: "none",
    //             rightEye: "none",
    //             mouth: "none",
    //             face: "reboot1",
    //         },
    //         {
    //             t: 0,
    //             d: 0.5,
    //             leftEye: "none",
    //             rightEye: "none",
    //             mouth: "none",
    //             face: "reboot2",
    //         },
    //         {
    //             t: 0,
    //             d: 0.5,
    //             leftEye: "none",
    //             rightEye: "none",
    //             mouth: "none",
    //             face: "reboot3",
    //         },
    //     ],
    // },
];

export { animations };
export type { Animation, Motion };
