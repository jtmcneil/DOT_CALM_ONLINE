import { Music } from "@/types/music";

const music: Music[] = [
    {
        type: "single",
        slug: "stopdroproll",
        title: "STOP DROP & ROLL!",
        releaseDate: new Date("2025-07-18T00:00:00.000Z"),
        // releaseDate: "7/18/2025",
        coverDigital: "/images/stop drop roll cover.gif",
        cover: "/images/stop drop roll cover.jpeg",
        links: {
            tooLost: "https://too.fm/jw3dn04",
            spotify:
                "https://open.spotify.com/track/5IHnIrtg9kQHFUasNFatfl?si=71fdb8d4fbbd4e8d",
            appleMusic:
                "https://music.apple.com/us/album/stop-drop-roll/1826759860?i=1826759987",
        },
        isNew: true,
    },
    {
        type: "single",
        slug: "godj",
        title: "GO DJ!",
        releaseDate: new Date("2025-06-20T00:00:00.000Z"),
        // releaseDate: "6/20/2025",
        coverDigital: "/images/go dj cover.gif",
        cover: "/images/go dj cover.jpeg",
        links: {
            tooLost: "https://too.fm/jjn6vgr",
            spotify:
                "https://open.spotify.com/track/7jNZzjN2AXsPcDAqICiOe3?si=39fbd51a18c1422c",
            appleMusic:
                "https://music.apple.com/us/album/go-dj/1819609177?i=1819609179",
        },
        isNew: true,
    },
    {
        type: "project",
        slug: "bytesize",
        title: "BYTE SIZE",
        releaseDate: new Date("2024-12-01T05:00:00.000Z"), // Midnight EST is 04:00 UTC
        coverDigital: "/images/byte size cover.gif",
        cover: "/images/byte size cover.jpeg",
        links: {
            tooLost: "https://too.fm/5pqxeqb",
            spotify:
                "https://open.spotify.com/album/0oEsRH85rANeBBcHV7b4o8?si=Hrof80dCTACdfeaqbPcDCQ",
            appleMusic: "https://music.apple.com/us/album/byte-size/1780875244",
        },
        description: "MY HELLO WORLD! WELCOME TO MY CYBERSPACE!",
        tracks: [
            {
                title: "a bit TOO much",
            },
            {
                title: "boom bap",
            },
            {
                title: "while true",
            },
            {
                title: "android dreams",
                collaborators: ["Echo Huang"],
            },
            {
                title: "backspace",
            },
            {
                title: "god's domain",
            },
            {
                title: "charades",
            },
            {
                title: "no more mr nice guy",
            },
        ],
    },
    {
        type: "single",
        slug: "backspace",
        title: "backspace",
        releaseDate: new Date("2024-10-24T04:00:00.000Z"),
        coverDigital: "/images/backspace cover.gif",
        cover: "/images/backspace cover.png",
        links: {
            tooLost: "https://too.fm/xgj8a0k",
            spotify:
                "https://open.spotify.com/track/3XQBe56ZOe6gv1T0vl5D2k?si=fe6af3aa29514523",
            appleMusic:
                "https://music.apple.com/us/album/backspace/1775503099?i=1775503101",
            youtube: "https://youtu.be/rBCcHZ0lhUE",
        },
    },
    {
        type: "single",
        slug: "abit2much",
        title: "a bit TOO much",
        releaseDate: new Date("2024-08-18T04:00:00.000Z"),
        coverDigital: "/images/a bit too much cover.gif",
        cover: "/images/a bit too much cover.png",
        links: {
            tooLost: "https://too.fm/b2p3yae",
            spotify:
                "https://open.spotify.com/track/31vomdvNxK8JSpzAIvEvLF?si=7dd9938ce22a46bd",
            appleMusic:
                "https://music.apple.com/us/album/a-bit-too-much/1761888860?i=1761888867",
            youtube: "https://youtu.be/8F4bk8FYOGY",
        },
    },
];

export default music;
