export default function FeatureCard({ heading, description, icon: Icon, iconBgClass }) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover border border-border hover:border-primary transition-all duration-300 group hover:-translate-y-1">
            <div className={`w-14 h-14 ${iconBgClass} rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform`}>
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold text-dark mb-4 group-hover:text-primary transition-colors">{heading}</h3>
            <p className="text-text leading-relaxed">{description}</p>
        </div>
    );
}
