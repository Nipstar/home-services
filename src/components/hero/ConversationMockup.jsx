import WaveformBars from './WaveformBars';

const defaultMessages = [
    { role: 'caller', name: 'Sarah', text: "Hi, I've got a leaky tap in my kitchen. It's dripping quite badly." },
    { role: 'agent', text: "Sorry to hear that — let's get that sorted. Can I take your name and postcode?" },
    { role: 'caller', name: 'Sarah', text: "It's Sarah, SO16 3PH." },
    { role: 'agent', text: "Perfect, you're in our area. Dave's on a job but I'll get your details to him straightaway. Is this urgent or can it wait a day or two?" },
];

export default function ConversationMockup({ messages = defaultMessages }) {
    return (
        <div className="relative mx-auto w-full max-w-[340px] perspective-[1000px] group">
            {/* Phone container with 3D effect */}
            <div className="bg-dark-card rounded-[2rem] shadow-phone overflow-hidden transition-transform duration-700 ease-out transform group-hover:rotate-x-0 group-hover:rotate-y-0 group-hover:scale-105 border-[6px] border-[#2A2A3A]"
                style={{ transform: 'rotateY(-5deg) rotateX(2deg)' }}>

                {/* Status Bar */}
                <div className="flex justify-between items-center px-6 py-2 text-[10px] font-medium text-white/60 bg-[#1A1A2E]/80 backdrop-blur">
                    <span>09:41</span>
                    <div className="flex gap-1.5 items-center">
                        {/* Signal & Battery simple bars */}
                        <div className="flex gap-0.5 items-end h-2.5">
                            <div className="w-0.5 h-1 bg-white/80 rounded" />
                            <div className="w-0.5 h-1.5 bg-white/80 rounded" />
                            <div className="w-0.5 h-2 bg-white/80 rounded" />
                            <div className="w-0.5 h-2.5 bg-white/80 rounded" />
                        </div>
                        <div className="w-5 h-2.5 border border-white/40 rounded-sm p-0.5 flex">
                            <div className="w-[80%] h-full bg-white rounded-[1px]" />
                        </div>
                    </div>
                </div>

                {/* Agent Header */}
                <div className="px-5 py-4 border-b border-white/10 bg-[#1A1A2E]">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-primary-light flex items-center justify-center p-[2px]">
                                <div className="w-full h-full rounded-full bg-dark-card flex items-center justify-center text-white text-lg font-display">AI</div>
                            </div>
                            <div className="absolute inset-0 rounded-full border border-primary/50 animate-ping opacity-75" />
                        </div>
                        <div>
                            <h4 className="text-white font-semibold text-sm">AI Voice Agent</h4>
                            <div className="flex items-center gap-1.5 mt-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                                <span className="text-success text-xs font-medium tracking-wide">Live Call — 00:34</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Chat Area */}
                <div className="p-5 flex flex-col gap-4 bg-[#1A1A2E] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] min-h-[380px]">
                    {messages.map((msg, i) => (
                        <div key={i} className={`flex flex-col max-w-[85%] ${msg.role === 'agent' ? 'self-start' : 'self-end items-end'}`}>
                            <span className="text-[10px] text-white/40 mb-1 px-1">
                                {msg.role === 'agent' ? 'AI Voice Agent' : msg.name}
                            </span>
                            <div className={`p-3.5 rounded-2xl text-[13px] leading-relaxed relative ${msg.role === 'agent'
                                    ? 'bg-gradient-to-br from-[#2D1B69] to-primary text-white rounded-tl-sm shadow-[0_4px_10px_rgba(108,60,225,0.2)]'
                                    : 'bg-white/10 text-white/90 rounded-tr-sm border border-white/5'
                                }`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Audio Waveform Footer */}
                <div className="bg-[#1A1A2E] border-t border-white/10 p-5 flex items-center gap-4">
                    <div className="flex items-center gap-2 text-coral bg-coral/10 px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase">
                        <span className="w-1.5 h-1.5 bg-coral rounded-full animate-pulse" />
                        Rec
                    </div>
                    <WaveformBars />
                </div>
            </div>
        </div>
    );
}
