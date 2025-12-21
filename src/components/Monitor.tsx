import NavBar from "./Navbar";

interface MonitorProps {
    children?: React.ReactNode;
}

export default function Monitor({ children }: MonitorProps) {
    return (
        <div className="flex flex-col h-full w-full rounded-2xl overflow-hidden min-h-0 min-w-0">
            <div className="flex-1 md:flex-2 relative bg-[url('/monitor/top.png')] bg-no-repeat bg-[length:100%_100%]" />

            <div className="flex flex-10 md:flex-20 min-h-0 min-w-0">
                <div className="relative w-10 md:w-30 bg-[url('/monitor/left.png')] bg-no-repeat bg-[length:100%_100%]" />

                <div className="flex-1 flex flex-col bg-[#2b2111] min-h-0 min-w-0">
                    <div className="relative h-4 bg-[url('/monitor/topBorder.png')] bg-no-repeat bg-[length:100%_100%]" />

                    <div className="bg-black flex-1 rounded-md -m-1 z-10 p-3 overflow-hidden min-h-0 min-w-0">
                        {children}
                    </div>

                    <div className="relative h-5 bg-[url('/monitor/bottomBorder.png')] bg-no-repeat bg-[length:100%_100%]" />
                </div>

                <div className="relative w-10 md:w-30 bg-[url('/monitor/right.png')] bg-no-repeat bg-[length:100%_100%]" />
            </div>

            <div className="flex-3 md:flex-4 relative bg-[url('/monitor/bottom.png')] bg-no-repeat bg-[length:100%_100%]">
                <NavBar />
            </div>
        </div>
    );
}
