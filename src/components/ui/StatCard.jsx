export default function StatCard({ value, label }) {
    return (
        <div className="flex flex-col border-l border-white/20 pl-6 py-2">
            <span className="text-4xl lg:text-5xl font-display text-white mb-2">{value}</span>
            <span className="text-white/80 font-medium leading-tight">{label}</span>
        </div>
    );
}
