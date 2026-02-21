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

export function RooferIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* House with roof outline */}
            <path d="M10 40L40 15L70 40" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 40V70H60V40" stroke="white" strokeWidth="3" strokeLinejoin="round" />
            {/* Roof tiles */}
            <path d="M15 40L40 20L65 40" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M25 35L40 25L55 35" stroke="#7C3AED" strokeWidth="3" opacity="0.6" />
            {/* Chimney */}
            <rect x="50" y="10" width="10" height="15" stroke="white" strokeWidth="2" />
        </svg>
    );
}

export function CleanerIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Spray bottle */}
            <rect x="30" y="35" width="20" height="30" rx="3" stroke="white" strokeWidth="3" />
            <rect x="36" y="25" width="8" height="10" stroke="white" strokeWidth="2" />
            <path d="M38 25L42 25L42 20L38 20Z" stroke="white" strokeWidth="2" />
            {/* Sparkles (Accent) */}
            <path d="M55 25L58 28L61 25L58 22L55 25Z" fill="#06B6D4" />
            <path d="M65 35L67 37L69 35L67 33L65 35Z" fill="#06B6D4" opacity="0.7" />
            <path d="M15 50L18 53L21 50L18 47L15 50Z" fill="#06B6D4" opacity="0.8" />
            {/* Bubbles */}
            <circle cx="20" cy="30" r="3" stroke="#06B6D4" strokeWidth="2" />
            <circle cx="60" cy="50" r="4" stroke="#06B6D4" strokeWidth="2" opacity="0.6" />
        </svg>
    );
}

export function LandscaperIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Tree */}
            <circle cx="30" cy="30" r="12" stroke="white" strokeWidth="3" />
            <path d="M30 42V60" stroke="white" strokeWidth="3" strokeLinecap="round" />
            {/* Grass/ground line */}
            <path d="M10 60H70" stroke="white" strokeWidth="3" strokeLinecap="round" />
            {/* Leaves (Accent) */}
            <circle cx="30" cy="30" r="10" fill="#16A34A" />
            <circle cx="24" cy="25" r="6" fill="#16A34A" opacity="0.8" />
            <circle cx="36" cy="25" r="6" fill="#16A34A" opacity="0.8" />
            {/* Spade */}
            <path d="M55 50L60 45L65 50L60 65Z" stroke="white" strokeWidth="3" strokeLinejoin="round" />
            <path d="M60 45V20" stroke="white" strokeWidth="2" />
        </svg>
    );
}

export function PainterIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Paint roller */}
            <rect x="25" y="20" width="30" height="15" rx="3" stroke="white" strokeWidth="3" />
            <path d="M40 35V60" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <rect x="35" y="60" width="10" height="8" rx="2" stroke="white" strokeWidth="2" />
            {/* Paint drips (Accent) */}
            <path d="M30 35V45" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" />
            <path d="M40 35V50" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" />
            <path d="M50 35V42" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" />
            {/* Paint can */}
            <circle cx="60" cy="55" r="8" stroke="white" strokeWidth="2" />
            <path d="M60 47V50" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

export function HandymanIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Hammer */}
            <rect x="35" y="45" width="8" height="25" rx="2" stroke="white" strokeWidth="2" transform="rotate(-45 40 50)" />
            <path d="M48 38L58 28L62 32L52 42Z" stroke="white" strokeWidth="3" strokeLinejoin="round" />
            {/* Screwdriver */}
            <path d="M25 55L35 65" stroke="#8B5CF6" strokeWidth="4" strokeLinecap="round" />
            <path d="M35 65L40 70L45 65L40 60L35 65Z" fill="#8B5CF6" stroke="#8B5CF6" strokeWidth="2" />
            {/* Wrench outline */}
            <circle cx="28" cy="28" r="5" stroke="white" strokeWidth="2" />
            <path d="M22 22L15 15" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </svg>
    );
}

export function PestControlIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Bug/pest shape */}
            <circle cx="40" cy="40" r="12" stroke="white" strokeWidth="3" />
            <circle cx="40" cy="30" r="8" stroke="white" strokeWidth="2" />
            {/* Antennae */}
            <path d="M35 25L30 15M45 25L50 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
            {/* Legs */}
            <path d="M28 35L18 30M28 45L18 50M52 35L62 30M52 45L62 50" stroke="white" strokeWidth="2" strokeLinecap="round" />
            {/* X marks (Accent - pest control) */}
            <path d="M35 38L45 48M45 38L35 48" stroke="#B91C1C" strokeWidth="4" strokeLinecap="round" />
            <circle cx="65" cy="60" r="8" stroke="#B91C1C" strokeWidth="3" />
            <path d="M62 57L68 63M68 57L62 63" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

export function DrainageIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Pipe/drain */}
            <rect x="15" y="30" width="50" height="20" rx="4" stroke="white" strokeWidth="3" />
            <circle cx="40" cy="40" r="6" stroke="white" strokeWidth="2" />
            {/* Water flow (Accent) */}
            <path d="M25 15L25 30M35 20L35 30M45 15L45 30" stroke="#0891B2" strokeWidth="3" strokeLinecap="round" />
            <path d="M25 50L25 65M35 50L35 60M45 50L45 65" stroke="#0891B2" strokeWidth="3" strokeLinecap="round" />
            {/* Grate pattern */}
            <path d="M55 35V45M60 35V45" stroke="white" strokeWidth="2" />
        </svg>
    );
}

export function BathroomFitterIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Bathtub */}
            <path d="M20 40H60V55C60 60 55 65 50 65H30C25 65 20 60 20 55V40Z" stroke="white" strokeWidth="3" strokeLinejoin="round" />
            {/* Feet */}
            <circle cx="25" cy="68" r="3" stroke="white" strokeWidth="2" />
            <circle cx="55" cy="68" r="3" stroke="white" strokeWidth="2" />
            {/* Tap */}
            <path d="M30 40V30H35" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <circle cx="35" cy="27" r="3" stroke="white" strokeWidth="2" />
            {/* Water droplets (Accent) */}
            <path d="M40 32C40 34 38 36 36 36C34 36 32 34 32 32C32 30 36 25 36 25C36 25 40 30 40 32Z" fill="#0D9488" />
            <circle cx="45" cy="30" r="2" fill="#0D9488" opacity="0.7" />
            <circle cx="50" cy="34" r="1.5" fill="#0D9488" opacity="0.5" />
        </svg>
    );
}

export function WindowFitterIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Window frame */}
            <rect x="20" y="20" width="40" height="40" rx="2" stroke="white" strokeWidth="3" />
            {/* Cross divider */}
            <path d="M40 20V60M20 40H60" stroke="white" strokeWidth="3" />
            {/* Shine/reflection (Accent) */}
            <path d="M28 28L35 35" stroke="#4338CA" strokeWidth="3" strokeLinecap="round" />
            <path d="M48 28L52 32" stroke="#4338CA" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
            <circle cx="50" cy="50" r="3" fill="#4338CA" opacity="0.5" />
            {/* Handle */}
            <circle cx="55" cy="40" r="2" fill="white" />
        </svg>
    );
}

export function CarpetFitterIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Carpet roll */}
            <ellipse cx="40" cy="25" rx="25" ry="8" stroke="white" strokeWidth="3" />
            <path d="M15 25V55C15 60 20 65 40 65C60 65 65 60 65 55V25" stroke="white" strokeWidth="3" />
            {/* Rolled edge detail */}
            <path d="M15 30C15 35 20 38 30 38" stroke="white" strokeWidth="2" strokeLinecap="round" />
            {/* Pattern lines (Accent) */}
            <path d="M25 40V60M35 42V58M45 42V58M55 40V60" stroke="#A16207" strokeWidth="2" opacity="0.7" />
            <ellipse cx="40" cy="25" rx="20" ry="6" fill="#A16207" opacity="0.3" />
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
