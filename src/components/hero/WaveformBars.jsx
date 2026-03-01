export default function WaveformBars() {
    const bars = Array.from({ length: 25 }, (_, i) => ({
        height: Math.floor(Math.random() * 16) + 6,
        delay: i * 0.05,
    }));

    return (
        <div className="flex items-end justify-center gap-[2px] h-6 flex-grow">
            {bars.map((bar, i) => (
                <span
                    key={i}
                    className="w-[3px] bg-primary rounded-full animate-waveform"
                    style={{
                        height: `${bar.height}px`,
                        animationDelay: `${bar.delay}s`,
                    }}
                />
            ))}
        </div>
    );
}
