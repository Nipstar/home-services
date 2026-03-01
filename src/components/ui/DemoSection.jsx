import OverlineTag from './OverlineTag';
import { trackMicroConversion } from '../../utils/tracking';

const demos = [
    {
        tag: 'ELECTRICAL DEMO',
        name: 'Bolt Electrical AI Reception',
        phone: '07782 214455',
        tel: '07782214455',
        trade: 'electrician',
        prompt: 'Try asking about a fuse board replacement',
    },
    {
        tag: 'PLUMBING & HEATING DEMO',
        name: 'Antek Plumbing & Heating AI Receptionist',
        phone: '0333 051 0944',
        tel: '03330510944',
        trade: 'plumber',
        prompt: 'Try booking a boiler service',
    },
];

function handleDemoClick(trade) {
    trackMicroConversion('demo_call_clicked', {
        trade,
        page: window.location.pathname,
    });
}

export default function DemoSection({
    heading = 'Call Our Live AI Voice Agents',
    subheading = 'These are real AI voice agents we\'ve built for UK trades businesses. Ring them up and see exactly what your customers will experience.',
    overline = 'HEAR IT FOR YOURSELF',
    id,
}) {
    return (
        <div className="text-center">
            <div className="max-w-3xl mx-auto mb-12">
                <OverlineTag>{overline}</OverlineTag>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-dark mb-6">
                    {heading}
                </h2>
                <p className="text-lg text-dark/80">
                    {subheading}
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
                {demos.map((demo) => (
                    <div key={demo.tel} className="bg-white p-8 rounded-2xl border border-primary/20 text-center shadow-lg hover:-translate-y-1 transition-transform">
                        <OverlineTag className="bg-primary/5 text-primary">{demo.tag}</OverlineTag>
                        <h3 className="text-xl font-semibold mb-6">{demo.name}</h3>
                        <a
                            href={`tel:${demo.tel}`}
                            onClick={() => handleDemoClick(demo.trade)}
                            className="block text-4xl md:text-5xl font-display text-primary hover:text-primary-dark transition-colors mb-4"
                        >
                            {demo.phone}
                        </a>
                        <p className="text-sm font-medium text-text-light">Prompt: {demo.prompt}</p>
                    </div>
                ))}
            </div>

            <p className="text-sm font-semibold text-primary/60 uppercase tracking-widest">
                Available 24/7 &middot; Powered by Retell AI &middot; Demo calls
            </p>
        </div>
    );
}
