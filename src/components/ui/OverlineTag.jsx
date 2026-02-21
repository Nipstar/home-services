export default function OverlineTag({ children, className = '' }) {
    return (
        <span className={`inline-block text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-primary bg-[#F0EBFF] px-3.5 py-1.5 rounded-full mb-5 ${className}`}>
            {children}
        </span>
    );
}
