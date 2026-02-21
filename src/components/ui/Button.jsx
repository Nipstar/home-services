import { Link } from 'react-router-dom';

export default function Button({ variant = 'primary', children, href, className = '', ...props }) {
    const base = 'inline-flex items-center justify-center font-semibold text-[0.9375rem] rounded-full px-8 py-3 transition-all duration-200';
    const variants = {
        primary: 'bg-gradient-to-r from-primary to-primary-light text-white shadow-cta hover:shadow-[0_6px_20px_rgba(108,60,225,0.4)] hover:-translate-y-0.5',
        secondary: 'border-[1.5px] border-border text-dark hover:border-primary hover:text-primary bg-white',
        'secondary-light': 'border-[1.5px] border-white/30 text-white hover:border-white hover:bg-white/5',
    };

    const combinedClassName = `${base} ${variants[variant]} ${className}`;

    if (href) {
        if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('/#')) {
            return <a href={href} className={combinedClassName} {...props}>{children}</a>;
        }
        return <Link to={href} className={combinedClassName} {...props}>{children}</Link>;
    }

    return <button className={combinedClassName} {...props}>{children}</button>;
}
