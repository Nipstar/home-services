import { addons } from '../../data/pricing';
import { trackAddonSelected } from '../../utils/tracking';
import { ClockIcon, ChatWidgetIcon, BasicChatIcon, ProChatIcon, IntegratedChatIcon } from '../svg/LandingIcons';

const chatbotIcons = {
    chatbot_basic: BasicChatIcon,
    chatbot_pro: ProChatIcon,
    chatbot_integrated: IntegratedChatIcon,
};

export default function AddonSelector({ selectedAddons, onToggleExtraMinutes, onSelectChatbotTier }) {
    return (
        <div className="space-y-8">
            {/* Extra Minutes Toggle */}
            <div>
                <button
                    type="button"
                    onClick={() => {
                        onToggleExtraMinutes();
                        if (!selectedAddons.extraMinutes) {
                            trackAddonSelected('Extra 100 Minutes', addons.extraMinutes.price);
                        }
                    }}
                    className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 border-dashed transition-all cursor-pointer text-left ${
                        selectedAddons.extraMinutes
                            ? 'border-primary bg-primary/5 shadow-sm'
                            : 'border-border bg-white hover:border-primary/40'
                    }`}
                    aria-pressed={selectedAddons.extraMinutes}
                >
                    <div className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                            selectedAddons.extraMinutes
                                ? 'border-primary bg-primary text-white'
                                : 'border-border'
                        }`}>
                            {selectedAddons.extraMinutes && <span className="text-xs font-bold">✓</span>}
                        </div>
                        <ClockIcon className="w-5 h-5 text-primary shrink-0" />
                        <div>
                            <p className="font-semibold text-dark">{addons.extraMinutes.name}</p>
                            <p className="text-sm text-text">{addons.extraMinutes.description}</p>
                        </div>
                    </div>
                    <span className="font-bold text-dark text-lg shrink-0 ml-4">+£{addons.extraMinutes.price}/mo</span>
                </button>
            </div>

            {/* Chatbot Tiers */}
            <div className="bg-surface-soft rounded-2xl p-6 border border-border">
                <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                        <ChatWidgetIcon className="w-5 h-5 text-primary shrink-0" />
                        <div>
                            <h3 className="font-semibold text-dark text-lg">Add an AI Chatbot to Your Website</h3>
                            <p className="text-sm text-text mt-1">Boost your lead capture with a website chatbot that works alongside your voice agent. <span className="font-medium text-text-light">Optional add-on.</span></p>
                        </div>
                    </div>
                    {selectedAddons.chatbotTier && (
                        <button
                            type="button"
                            onClick={() => onSelectChatbotTier(null)}
                            className="text-sm text-text-light hover:text-dark transition-colors underline cursor-pointer shrink-0 ml-4"
                        >
                            Remove
                        </button>
                    )}
                </div>

                {!selectedAddons.chatbotTier && (
                    <p className="text-xs text-text-light mb-4 ml-8">No chatbot add-on · £0/mo</p>
                )}

                <div className="grid md:grid-cols-3 gap-4 mt-4">
                    {addons.chatbot.tiers.map((tier) => {
                        const isSelected = selectedAddons.chatbotTier === tier.id;
                        const isIntegrated = tier.id === 'chatbot_integrated';
                        const TierIcon = chatbotIcons[tier.id];

                        return (
                            <button
                                key={tier.id}
                                type="button"
                                onClick={() => {
                                    onSelectChatbotTier(tier.id);
                                    trackAddonSelected(tier.name, tier.price);
                                }}
                                className={`relative rounded-xl p-5 text-left flex flex-col transition-all cursor-pointer ${
                                    isSelected
                                        ? 'ring-2 ring-primary shadow-md bg-white border-transparent'
                                        : isIntegrated
                                            ? 'border-2 border-dashed border-primary/30 bg-white hover:border-primary/60 hover:shadow-sm'
                                            : 'border-2 border-dashed border-border bg-white hover:border-primary/40 hover:shadow-sm'
                                }`}
                                aria-pressed={isSelected}
                            >
                                {tier.badge && (
                                    <span className="absolute -top-3 right-4 bg-gradient-to-r from-primary to-primary-light text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full shadow-sm">
                                        {tier.badge}
                                    </span>
                                )}

                                <div className="flex items-center gap-3 mb-3">
                                    {TierIcon && (
                                        <TierIcon className={`w-7 h-7 ${isSelected ? 'text-primary' : 'text-text-light'}`} />
                                    )}
                                    <div className="flex-grow">
                                        <h4 className="font-bold text-dark text-sm">{tier.name}</h4>
                                    </div>
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${
                                        isSelected
                                            ? 'border-primary bg-primary'
                                            : 'border-border'
                                    }`}>
                                        {isSelected && (
                                            <div className="w-2 h-2 rounded-full bg-white" />
                                        )}
                                    </div>
                                </div>

                                <p className="text-lg font-display text-dark mb-2">
                                    +£{tier.price}<span className="text-sm font-normal text-text-light">/mo</span>
                                </p>
                                <p className="text-xs text-text mb-3">{tier.description}</p>

                                <ul className="space-y-2 flex-grow">
                                    {tier.features.slice(0, 4).map((feat, i) => (
                                        <li key={i} className="flex gap-2 text-xs text-text">
                                            <span className="text-primary shrink-0 font-bold">✓</span>
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
