interface StatusBarProps {
    className?: string;
}

const StatusBar = ({ className }: StatusBarProps) => {
    return (
        <div className={`bg-secondary px-2 overflow-hidden ${className}`}>
            <div className="flex w-max animate-marquee">
                <p className="text-xl font-black uppercase whitespace-nowrap pr-2">
                    WORKING ON NEW MUSIC! WORKING ON NEW MUSIC! WORKING ON NEW
                    MUSIC!
                </p>
                <p className="text-xl font-black uppercase whitespace-nowrap pr-2">
                    WORKING ON NEW MUSIC! WORKING ON NEW MUSIC! WORKING ON NEW
                    MUSIC!
                </p>
            </div>
        </div>
    );
};

export default StatusBar;
