export default function TrustBar({ title }) {
    const tools = [
        'Checkatrade', 'Google Calendar', 'Tradify', 'ServiceM8', 'WhatsApp', 'Gas Safe', 'Xero'
    ];

    return (
        <div className="py-10 border-y border-border">
            <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
                {title && <p className="text-sm font-semibold text-text-light uppercase tracking-wider mb-6">{title}</p>}
                <div className="flex flex-wrap justify-center gap-4 lg:gap-8 opacity-70 hover:opacity-100 transition-opacity">
                    {tools.map(tool => (
                        <span key={tool} className="text-dark font-medium px-4 py-2 bg-white rounded-lg border border-border shadow-sm">
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
