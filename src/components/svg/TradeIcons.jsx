export function PlumberIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Pipe Background Outline */}
            <path d="M20 60V30C20 24.4772 24.4772 20 30 20H50C55.5228 20 60 24.4772 60 30V40" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 60H25" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <path d="M55 40H65" stroke="white" strokeWidth="3" strokeLinecap="round" />
            {/* Wrench */}
            <path d="M45 45L65 65" stroke="white" strokeWidth="4" strokeLinecap="round" />
            <circle cx="42" cy="42" r="6" stroke="white" strokeWidth="3" />
            {/* Water Droplets (Accent) */}
            <path d="M60 52C60 55.3137 57.3137 58 54 58C50.6863 58 48 55.3137 48 52C48 48 54 42 54 42C54 42 60 48 60 52Z" fill="#3B82F6" stroke="#3B82F6" strokeWidth="2" strokeLinejoin="round" />
            <path d="M36 32C36 34.2091 34.2091 36 32 36C29.7909 36 28 34.2091 28 32C28 29.3333 32 25 32 25C32 25 36 29.3333 36 32Z" fill="#3B82F6" opacity="0.8" />
        </svg>
    );
}

export function ElectricianIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Wire loop */}
            <path d="M20 60C20 40 40 20 60 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 6" />
            <path d="M40 70C60 70 70 50 70 40" stroke="white" strokeWidth="3" strokeLinecap="round" />
            {/* Socket outline */}
            <rect x="15" y="15" width="24" height="24" rx="4" stroke="white" strokeWidth="3" />
            <circle cx="23" cy="27" r="2" fill="white" />
            <circle cx="31" cy="27" r="2" fill="white" />
            {/* Lightning Bolt (Accent) */}
            <path d="M45 45L35 60H45L40 75L60 55H48L55 40L45 45Z" fill="#EAB308" stroke="#EAB308" strokeWidth="2" strokeLinejoin="round" />
        </svg>
    );
}

export function HeatingIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Boiler outline */}
            <rect x="20" y="20" width="40" height="50" rx="4" stroke="white" strokeWidth="3" />
            <circle cx="40" cy="35" r="8" stroke="white" strokeWidth="3" strokeDasharray="4 4" />
            <path d="M30 60H50" stroke="white" strokeWidth="3" strokeLinecap="round" />
            {/* Heat waves */}
            <path d="M25 10C25 5 30 5 30 0" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M40 12C40 6 45 6 45 0" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M55 10C55 5 60 5 60 0" stroke="white" strokeWidth="2" strokeLinecap="round" />
            {/* Flame (Accent) */}
            <path d="M40 55C44 55 48 51 48 46C48 39 40 32 40 32C40 32 32 39 32 46C32 51 36 55 40 55Z" fill="#F97316" />
        </svg>
    );
}

export function BuilderIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* City/House skyline background */}
            <path d="M15 70V40L35 25L55 40V70" stroke="white" strokeWidth="3" strokeLinejoin="round" />
            <path d="M55 50H65V70" stroke="white" strokeWidth="3" strokeLinejoin="round" />
            {/* Scaffold/Crane details */}
            <path d="M35 25V10H65" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
            {/* Hard Hat (Accent) */}
            <path d="M40 40C30 40 22 48 22 55H58C58 48 50 40 40 40Z" fill="#DC2626" />
            <path d="M18 55H62" stroke="#DC2626" strokeWidth="4" strokeLinecap="round" />
            <path d="M40 40V45" stroke="white" strokeWidth="2" />
        </svg>
    );
}

export function LocksmithIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Lock Body */}
            <rect x="25" y="35" width="30" height="35" rx="4" stroke="white" strokeWidth="3" />
            {/* Shackle */}
            <path d="M30 35V25C30 19.4772 34.4772 15 40 15C45.5228 15 50 19.4772 50 25V35" stroke="white" strokeWidth="3" strokeLinecap="round" />
            {/* Keyhole (Accent) */}
            <circle cx="40" cy="50" r="4" fill="#D4A017" />
            <path d="M38 52L37 60H43L42 52Z" fill="#D4A017" />
            {/* Key flying */}
            <path d="M10 30L20 40M15 35L18 32M12 38L15 35" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

export function MoreTradesIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Toolbox */}
            <rect x="20" y="35" width="40" height="30" rx="4" stroke="white" strokeWidth="3" />
            <path d="M30 35V25H50V35" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <path d="M15 45H65" stroke="white" strokeWidth="3" strokeLinecap="round" />
            {/* Plus sign (Accent) */}
            <path d="M40 45V60M32.5 52.5H47.5" stroke="#6C3CE1" strokeWidth="5" strokeLinecap="round" />
        </svg>
    );
}
