import { Music } from "@/types/music";

const music: Music[] = [
    {
        title: "GO DJ!",
        releaseDate: new Date("2025-06-20T00:00:00.000Z"),
        cover: "https://calm-bucket.s3.us-east-1.amazonaws.com/GO+DJ!.jpeg",
        link: "https://too.fm/jjn6vgr",
    },
    {
        title: "BYTE SIZE",
        releaseDate: new Date("2024-12-01T05:00:00.000Z"), // Midnight EST is 04:00 UTC
        cover: "https://calm-bucket.s3.us-east-1.amazonaws.com/BYTE+SIZE.jpeg",
        link: "https://too.fm/5pqxeqb",
        description: "MY HELLO WORLD! WELCOME TO MY CYBERSPACE!",
        tracks: [
            {
                title: "a bit TOO much",
                releaseDate: new Date("2024-08-18T04:00:00.000Z"),
                cover: "https://calm-bucket.s3.us-east-1.amazonaws.com/BYTE+SIZE.jpeg",
            },
            {
                title: "boom bap",
                releaseDate: new Date("2024-12-01T05:00:00.000Z"),
                cover: "https://calm-bucket.s3.us-east-1.amazonaws.com/BYTE+SIZE.jpeg",
            },
            {
                title: "while true",
                releaseDate: new Date("2024-12-01T05:00:00.000Z"),
                cover: "https://calm-bucket.s3.us-east-1.amazonaws.com/BYTE+SIZE.jpeg",
            },
            {
                title: "android dreams",
                releaseDate: new Date("2024-12-01T05:00:00.000Z"),
                cover: "https://calm-bucket.s3.us-east-1.amazonaws.com/BYTE+SIZE.jpeg",
                collaborators: ["Echo Huang"],
            },
            {
                title: "backspace",
                releaseDate: new Date("2024-10-24T04:00:00.000Z"),
                cover: "https://calm-bucket.s3.us-east-1.amazonaws.com/BYTE+SIZE.jpeg",
            },
            {
                title: "god's domain",
                releaseDate: new Date("2024-12-01T05:00:00.000Z"),
                cover: "https://calm-bucket.s3.us-east-1.amazonaws.com/BYTE+SIZE.jpeg",
            },
            {
                title: "charades",
                releaseDate: new Date("2024-12-01T05:00:00.000Z"),
                cover: "https://calm-bucket.s3.us-east-1.amazonaws.com/BYTE+SIZE.jpeg",
            },
            {
                title: "no more mr nice guy",
                releaseDate: new Date("2024-12-01T05:00:00.000Z"),
                cover: "https://calm-bucket.s3.us-east-1.amazonaws.com/BYTE+SIZE.jpeg",
            },
        ],
    },
    {
        title: "backspace",
        releaseDate: new Date("2024-10-24T04:00:00.000Z"),
        cover: "https://calm-bucket.s3.us-east-1.amazonaws.com/backspace.png",
        link: "https://too.fm/xgj8a0k",
    },
    {
        title: "a bit TOO much",
        releaseDate: new Date("2024-08-18T04:00:00.000Z"),
        cover: "https://calm-bucket.s3.us-east-1.amazonaws.com/a+bit+TOO+much.png",
        link: "https://too.fm/b2p3yae",
    },
];

export default music;
