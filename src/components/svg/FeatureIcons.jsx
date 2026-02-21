export function PhoneIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M22 22.5361C22 22.5361 24.364 20.3533 24.697 19.7402C25.0303 19.1272 25.1324 18.5205 24.8967 17.9547C24.6611 17.3888 22.6823 15.6946 22.2536 15.3411C21.825 14.9875 21.0544 14.3392 20.3228 14.922C19.5913 15.5048 18.6675 16.5921 18.3243 16.4862C17.981 16.3802 15.1189 15.0003 13.9189 13.4003C12.7189 11.8003 13.1238 10.9765 13.3889 10.5921C13.654 10.2078 14.7765 9.17647 15.0068 8.44199C15.2371 7.70752 14.654 5.25332 14.4725 4.80211C14.2911 4.35089 13.6303 4.25332 13.0456 4.4172C12.461 4.58107 10.4284 5.48514 9.47959 6.78775C8.53075 8.09036 8.52693 9.42152 8.7454 10.8756C8.96387 12.3297 10.4796 15.5645 12.7189 18.0003C14.9582 20.4361 17.5 22 19.5 22.5C21.5 23 23 23 24 22.5L22 22.5361Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function MicrophoneIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <rect x="12" y="4" width="8" height="14" rx="4" stroke="currentColor" strokeWidth="2" />
            <path d="M8 15v2a8 8 0 0016 0v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M16 25v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 28h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

export function CalendarIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <rect x="5" y="7" width="22" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
            <path d="M10 4v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M22 4v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M5 13h22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="19" r="1.5" fill="currentColor" />
            <circle cx="16" cy="19" r="1.5" fill="currentColor" />
            <circle cx="20" cy="19" r="1.5" fill="currentColor" />
        </svg>
    );
}

export function ClockIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="2" />
            <path d="M16 10v6l4 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function ShieldIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M16 4L6 8v7c0 5.5 4 10.7 10 13c6-2.3 10-7.5 10-13V8l-10-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 15l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function CoinIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="2" />
            <path d="M16 9v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M13 12h5a2.5 2.5 0 010 5h-4a2.5 2.5 0 000 5h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
