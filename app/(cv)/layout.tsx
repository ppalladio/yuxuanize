export default function CvLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col items-stretch justify-around">
            <nav>lang switch</nav>
            {children}
        </div>
    );
}
