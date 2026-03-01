// Custom SVG illustrations for the /get-started landing page
// Style: modern geometric line-art, brand colours, 2-3 colours per icon

// ─── Benefit Card Icons (64x64) ────────────────────────

export function AnswersEveryCallIcon({ className = 'w-16 h-16' }) {
    return (
        <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Answers every call">
            {/* Phone handset */}
            <path d="M18 10c-2 0-4 1.5-4.5 3.5l-2 8c-.3 1.5.5 3 2 3.5l4 1.5c2.5 5 6 9.5 10.5 13l1.5 4c.5 1.5 2 2.3 3.5 2l8-2c2-.5 3.5-2.5 3.5-4.5V36c0-1.5-1-2.8-2.5-3.2" stroke="#6C3CE1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Notification dots with checks */}
            <circle cx="44" cy="10" r="7" fill="#6C3CE1" opacity="0.15"/>
            <circle cx="44" cy="10" r="7" stroke="#6C3CE1" strokeWidth="1.5"/>
            <path d="M41 10l2 2 4-4" stroke="#6C3CE1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="54" cy="20" r="5" fill="#8B5CF6" opacity="0.15"/>
            <circle cx="54" cy="20" r="5" stroke="#8B5CF6" strokeWidth="1.5"/>
            <path d="M52 20l1.5 1.5 3-3" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="48" cy="30" r="4" fill="#10B981" opacity="0.15"/>
            <circle cx="48" cy="30" r="4" stroke="#10B981" strokeWidth="1.5"/>
            <path d="M46.5 30l1 1 2.5-2.5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export function SoundsHumanIcon({ className = 'w-16 h-16' }) {
    return (
        <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sounds like a real person">
            {/* Stylised speaker/profile */}
            <circle cx="22" cy="28" r="10" stroke="#6C3CE1" strokeWidth="2.5" fill="#6C3CE1" opacity="0.08"/>
            <circle cx="22" cy="25" r="4" stroke="#6C3CE1" strokeWidth="2"/>
            <path d="M15 35c0-3.5 3-6 7-6s7 2.5 7 6" stroke="#6C3CE1" strokeWidth="2" strokeLinecap="round"/>
            {/* Sound waves - organic curves */}
            <path d="M36 22c2.5-2.5 2.5 14.5 0 12" stroke="#6C3CE1" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M42 17c4-4 4 25 0 21" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round"/>
            <path d="M48 12c5.5-5.5 5.5 35 0 29.5" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
            {/* Warmth accent */}
            <circle cx="52" cy="28" r="2" fill="#F59E0B" opacity="0.5"/>
        </svg>
    );
}

export function BooksJobsIcon({ className = 'w-16 h-16' }) {
    return (
        <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Books jobs for you">
            {/* Calendar */}
            <rect x="10" y="14" width="32" height="34" rx="4" stroke="#6C3CE1" strokeWidth="2.5" fill="#6C3CE1" opacity="0.06"/>
            <path d="M10 24h32" stroke="#6C3CE1" strokeWidth="2"/>
            <path d="M18 10v8M34 10v8" stroke="#6C3CE1" strokeWidth="2.5" strokeLinecap="round"/>
            {/* Calendar check marks */}
            <path d="M16 32l2 2 4-4" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 40l2 2 4-4" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="28" y="30" width="8" height="2" rx="1" fill="#6C3CE1" opacity="0.3"/>
            <rect x="28" y="38" width="8" height="2" rx="1" fill="#6C3CE1" opacity="0.3"/>
            {/* Wrench overlay */}
            <path d="M48 18l-8 8-2.5-2.5 8-8c1.5-1.5 4-1 4.5.5.5 1.5 0 3.5-2 4.5z" stroke="#8B5CF6" strokeWidth="2" strokeLinejoin="round" fill="#8B5CF6" opacity="0.15"/>
            <path d="M38 26l-3 3" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    );
}

// ─── How It Works Icons (80x80) ────────────────────────

export function ChoosePlanStepIcon({ className = 'w-20 h-20' }) {
    return (
        <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Choose your plan">
            {/* Three fanning cards */}
            <rect x="8" y="24" width="24" height="36" rx="4" stroke="#6C3CE1" strokeWidth="1.5" fill="white" opacity="0.6" transform="rotate(-8 8 24)"/>
            <rect x="28" y="16" width="24" height="40" rx="4" stroke="#6C3CE1" strokeWidth="2" fill="#6C3CE1" opacity="0.1"/>
            <rect x="28" y="16" width="24" height="40" rx="4" stroke="#6C3CE1" strokeWidth="2"/>
            {/* Highlighted card - selected */}
            <rect x="30" y="24" width="20" height="4" rx="2" fill="#6C3CE1" opacity="0.3"/>
            <rect x="30" y="32" width="16" height="2" rx="1" fill="#6C3CE1" opacity="0.2"/>
            <rect x="30" y="37" width="16" height="2" rx="1" fill="#6C3CE1" opacity="0.2"/>
            <rect x="30" y="42" width="16" height="2" rx="1" fill="#6C3CE1" opacity="0.2"/>
            <circle cx="40" cy="52" r="3" fill="#6C3CE1"/>
            <path d="M38.5 52l1 1 2.5-2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Third card */}
            <rect x="48" y="24" width="24" height="36" rx="4" stroke="#6C3CE1" strokeWidth="1.5" fill="white" opacity="0.6" transform="rotate(8 48 24)"/>
            {/* Hand pointer */}
            <path d="M60 62l-4-4 2-1 6 6-6 2z" fill="#8B5CF6" opacity="0.5"/>
        </svg>
    );
}

export function SetupAIStepIcon({ className = 'w-20 h-20' }) {
    return (
        <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="We set up your AI">
            {/* Gear/cog */}
            <path d="M40 20l2.5 5.5h6l-4 4.5 2 6-6.5-3.5L33.5 36l2-6-4-4.5h6z" stroke="#6C3CE1" strokeWidth="2" fill="#6C3CE1" opacity="0.1"/>
            <circle cx="40" cy="30" r="4" stroke="#6C3CE1" strokeWidth="2"/>
            {/* Speech bubble with waveform */}
            <rect x="18" y="38" width="44" height="24" rx="6" stroke="#6C3CE1" strokeWidth="2" fill="#6C3CE1" opacity="0.06"/>
            <path d="M32 66l6-4h-6z" fill="#6C3CE1" opacity="0.06" stroke="#6C3CE1" strokeWidth="2" strokeLinejoin="round"/>
            {/* Waveform inside bubble */}
            <path d="M28 50v-4M32 50v-6M36 50v-8M40 50v-10M44 50v-8M48 50v-6M52 50v-4" stroke="#6C3CE1" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
    );
}

export function GoLiveStepIcon({ className = 'w-20 h-20' }) {
    return (
        <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Go live in 24 hours">
            {/* Lightning bolt */}
            <path d="M42 12L28 42h12L26 68l28-34H40z" stroke="#6C3CE1" strokeWidth="2.5" fill="#6C3CE1" opacity="0.1" strokeLinejoin="round"/>
            {/* 24h badge */}
            <circle cx="58" cy="22" r="12" fill="#10B981" opacity="0.15" stroke="#10B981" strokeWidth="1.5"/>
            <text x="58" y="24" textAnchor="middle" fill="#10B981" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">24h</text>
            {/* LIVE badge */}
            <rect x="12" y="56" width="32" height="14" rx="7" fill="#FF6B5A" opacity="0.15" stroke="#FF6B5A" strokeWidth="1.5"/>
            <circle cx="22" cy="63" r="2.5" fill="#FF6B5A"/>
            <text x="34" y="66" textAnchor="middle" fill="#FF6B5A" fontSize="8" fontWeight="700" fontFamily="Inter, sans-serif">LIVE</text>
        </svg>
    );
}

// ─── Plan Tier Icons (32x32) ───────────────────────────

export function SoloTraderIcon({ className = 'w-8 h-8' }) {
    return (
        <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Solo trader">
            <circle cx="16" cy="11" r="5" stroke="currentColor" strokeWidth="2"/>
            <path d="M8 26c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <rect x="21" y="6" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
            <path d="M23 10h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        </svg>
    );
}

export function BusyOperationIcon({ className = 'w-8 h-8' }) {
    return (
        <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Busy operation">
            <circle cx="12" cy="10" r="4" stroke="currentColor" strokeWidth="2"/>
            <path d="M5 24c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="22" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <path d="M17 26c0-3 2.2-5.5 5-5.5s5 2.5 5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
            {/* Connection line */}
            <path d="M19 18l-3 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" strokeDasharray="2 2"/>
        </svg>
    );
}

export function GrowingTeamIcon({ className = 'w-8 h-8' }) {
    return (
        <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Growing team">
            <circle cx="16" cy="8" r="3.5" stroke="currentColor" strokeWidth="2"/>
            <path d="M10 22c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="6" cy="14" r="2.5" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
            <path d="M2 25c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
            <circle cx="26" cy="14" r="2.5" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
            <path d="M22 25c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
            {/* Network lines */}
            <path d="M9 13l5-3M23 13l-5-3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.25" strokeDasharray="2 2"/>
        </svg>
    );
}

// ─── Chatbot Tier Icons (32x32) ────────────────────────

export function BasicChatIcon({ className = 'w-8 h-8' }) {
    return (
        <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Basic chatbot">
            <rect x="4" y="6" width="24" height="16" rx="4" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 26l4-4h-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            <circle cx="11" cy="14" r="1.5" fill="currentColor" opacity="0.4"/>
            <circle cx="16" cy="14" r="1.5" fill="currentColor" opacity="0.4"/>
            <circle cx="21" cy="14" r="1.5" fill="currentColor" opacity="0.4"/>
        </svg>
    );
}

export function ProChatIcon({ className = 'w-8 h-8' }) {
    return (
        <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pro chatbot">
            <rect x="4" y="8" width="24" height="16" rx="4" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 28l4-4h-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M10 16h12M10 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
            {/* Sparkle */}
            <path d="M24 4l1 2.5L27.5 8 25 9l-1 2.5L23 9l-2.5-1L23 6.5z" fill="#F59E0B" stroke="#F59E0B" strokeWidth="0.5"/>
        </svg>
    );
}

export function IntegratedChatIcon({ className = 'w-8 h-8' }) {
    return (
        <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Integrated voice agent">
            {/* Chat bubble */}
            <rect x="2" y="10" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M8 26l3-4h-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            {/* Phone */}
            <rect x="20" y="4" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M23 8h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
            <circle cx="25" cy="15" r="2" stroke="currentColor" strokeWidth="1.5"/>
            {/* Connection lines */}
            <path d="M18 16l2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" opacity="0.5"/>
            {/* Unified brain dot */}
            <circle cx="19" cy="6" r="3" fill="#6C3CE1" opacity="0.2" stroke="#6C3CE1" strokeWidth="1"/>
        </svg>
    );
}

// ─── Inline / Utility Icons ────────────────────────────

export function ClockIcon({ className = 'w-5 h-5' }) {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Minutes">
            <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M10 5v5l3.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export function ChatWidgetIcon({ className = 'w-5 h-5' }) {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chatbot">
            <rect x="2" y="3" width="16" height="11" rx="3" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M7 17l3-3h-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            <circle cx="7" cy="8.5" r="1" fill="currentColor"/>
            <circle cx="10" cy="8.5" r="1" fill="currentColor"/>
            <circle cx="13" cy="8.5" r="1" fill="currentColor"/>
        </svg>
    );
}

// ─── Trust Badge Icons (20x20) ─────────────────────────

export function ShieldIcon({ className = 'w-5 h-5' }) {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="GDPR Compliant">
            <path d="M10 2L3 5.5v4.5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V5.5L10 2z" stroke="#10B981" strokeWidth="1.5" fill="#10B981" opacity="0.1"/>
            <path d="M7.5 10l2 2 3.5-3.5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export function PhoneBadgeIcon({ className = 'w-5 h-5' }) {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="UK Voice & Number">
            <path d="M5 3c-.8 0-1.6.6-1.8 1.4l-.8 3.2c-.1.6.2 1.2.8 1.4l1.6.6c1 2 2.4 3.8 4.2 5.2l.6 1.6c.2.6.8.9 1.4.8l3.2-.8c.8-.2 1.4-1 1.4-1.8v-1.2c0-.6-.4-1.1-1-1.3" stroke="#6C3CE1" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="14" cy="5" r="3.5" stroke="#6C3CE1" strokeWidth="1.5"/>
            <text x="14" y="7" textAnchor="middle" fill="#6C3CE1" fontSize="5" fontWeight="700" fontFamily="Inter, sans-serif">UK</text>
        </svg>
    );
}

export function NoContractIcon({ className = 'w-5 h-5' }) {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="No Contracts">
            <rect x="4" y="2" width="12" height="16" rx="2" stroke="#FF6B5A" strokeWidth="1.5"/>
            <path d="M7 7h6M7 10h4" stroke="#FF6B5A" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
            {/* Cross-out */}
            <path d="M3 17L17 3" stroke="#FF6B5A" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    );
}

export function StarBadgeIcon({ className = 'w-5 h-5' }) {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Certified Partner">
            <path d="M10 2l2 4.5 5 .5-3.5 3.5 1 5L10 13l-4.5 2.5 1-5L3 7l5-.5z" stroke="#F59E0B" strokeWidth="1.5" fill="#F59E0B" opacity="0.15"/>
        </svg>
    );
}

export function LockIcon({ className = 'w-5 h-5' }) {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Secure payment">
            <rect x="4" y="9" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M7 9V6a3 3 0 016 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="10" cy="13.5" r="1.5" fill="currentColor"/>
        </svg>
    );
}
