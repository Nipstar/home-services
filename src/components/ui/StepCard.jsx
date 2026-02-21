export default function StepCard({ number, title, description, isLast }) {
    return (
        <div className="relative flex flex-col items-center text-center">
            {/* Dashed line connecting steps (desktop) */}
            {!isLast && (
                <div className="hidden lg:block absolute top-[28px] left-[50%] right-[-50%] h-[2px] border-t-2 border-dashed border-primary/20 -z-10" />
            )}

            {/* Step Number Circle */}
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-full text-white font-display text-2xl flex items-center justify-center mb-6 shadow-cta relative z-10">
                {number}
            </div>

            <h3 className="text-xl font-semibold text-dark mb-4">{title}</h3>
            <p className="text-text leading-relaxed">{description}</p>
        </div>
    );
}
