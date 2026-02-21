export default function WaveformBars() {
    const bars = Array.from({ length: 25 }, (_, i) => ({
        maxHeight: Math.floor(Math.random() * 16) + 6,
        delay: i * 0.05,
    }));

    return (
        <div className="flex items-center justify-center gap-[2px] h-6 flex-grow">
            {bars.map((bar, i) => (
                <span
                    key={i}
                    className="w-[3px] bg-primary rounded-full animate-waveform"
                    style={{
                        '--max-h': `${bar.maxHeight}px`,
                        animationDelay: `${bar.delay}s`,
                    }}
                />
            ))}
        </div>
    );
}
