import { useState, useEffect, useRef, useCallback } from 'react';

// ─── Configurable constants ──────────────────────────
const BADGE_TEXT = 'Exclusive Offer';
const HEADLINE = "Wait — Don't Miss This!";
const SUBHEADLINE = 'Get 6 months at 50% off your AI Voice Agent';
const BODY_TEXT = "Use this exclusive discount code at checkout and let your AI receptionist start answering calls while you're on the job.";
const DISCOUNT_CODE = 'SAVE50';
const CTA_TEXT = 'Copy Discount Code';
const CTA_COPIED_TEXT = 'Copied!';
const FINE_PRINT = 'Apply this code at checkout. Valid for new customers. 6-month minimum term.';
const MOBILE_SCROLL_THRESHOLD = 100; // px scroll-up to trigger on mobile
const MOBILE_TIME_THRESHOLD = 30000; // 30 seconds on page before mobile trigger

export default function ExitIntentPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [copied, setCopied] = useState(false);
    const copiedTimeout = useRef(null);
    const maxScrollY = useRef(0);
    const pageLoadTime = useRef(Date.now());

    const showPopup = useCallback(() => {
        setIsVisible(true);
    }, []);

    const closePopup = useCallback(() => {
        setIsVisible(false);
    }, []);

    // Desktop: mouseout above viewport
    useEffect(() => {
        const handleMouseOut = (e) => {
            if (e.clientY <= 0 && !isVisible) {
                showPopup();
            }
        };
        document.addEventListener('mouseout', handleMouseOut);
        return () => document.removeEventListener('mouseout', handleMouseOut);
    }, [isVisible, showPopup]);

    // Mobile: scroll-back detection after time threshold
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            if (currentY > maxScrollY.current) {
                maxScrollY.current = currentY;
            }
            const timeOnPage = Date.now() - pageLoadTime.current;
            const scrolledBack = maxScrollY.current - currentY;
            if (timeOnPage >= MOBILE_TIME_THRESHOLD && scrolledBack >= MOBILE_SCROLL_THRESHOLD && !isVisible) {
                showPopup();
                // Reset so it can trigger again after they close
                maxScrollY.current = currentY;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isVisible, showPopup]);

    // Close on Escape key
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape' && isVisible) closePopup();
        };
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [isVisible, closePopup]);

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (copiedTimeout.current) clearTimeout(copiedTimeout.current);
        };
    }, []);

    const handleCopy = async () => {
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(DISCOUNT_CODE);
            } else {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = DISCOUNT_CODE;
                textArea.style.position = 'fixed';
                textArea.style.left = '-9999px';
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
            }
            setCopied(true);
            if (copiedTimeout.current) clearTimeout(copiedTimeout.current);
            copiedTimeout.current = setTimeout(() => setCopied(false), 2500);
        } catch {
            // Silent fail — code is visible and user can copy manually
        }
    };

    if (!isVisible) return null;

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

                .eip-overlay {
                    position: fixed;
                    inset: 0;
                    z-index: 99999;
                    background: rgba(0, 0, 0, 0.65);
                    backdrop-filter: blur(4px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    animation: eip-fadeIn 0.3s ease;
                }

                .eip-card {
                    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
                    background: #fff;
                    border-radius: 20px;
                    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
                    max-width: 480px;
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                    animation: eip-slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .eip-shimmer-bar {
                    height: 5px;
                    background: linear-gradient(90deg, #FF6B35, #FF8F65, #FF6B35, #FF8F65, #FF6B35);
                    background-size: 300% 100%;
                    animation: eip-shimmer 3s linear infinite;
                }

                .eip-close {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    border: none;
                    background: #f3f4f6;
                    color: #6b7280;
                    font-size: 18px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                    line-height: 1;
                    z-index: 1;
                }
                .eip-close:hover {
                    background: #e5e7eb;
                    color: #374151;
                }

                .eip-content {
                    padding: 40px 36px 36px;
                    text-align: center;
                }

                .eip-badge {
                    display: inline-block;
                    background: #FFF3ED;
                    color: #FF6B35;
                    font-size: 12px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    padding: 6px 16px;
                    border-radius: 100px;
                    margin-bottom: 16px;
                }

                .eip-headline {
                    font-size: 28px;
                    font-weight: 800;
                    color: #111827;
                    margin: 0 0 8px;
                    line-height: 1.2;
                }

                .eip-subheadline {
                    font-size: 16px;
                    font-weight: 600;
                    color: #FF6B35;
                    margin: 0 0 16px;
                }

                .eip-body {
                    font-size: 14px;
                    color: #6b7280;
                    line-height: 1.6;
                    margin: 0 0 24px;
                }

                .eip-code-box {
                    background: #f9fafb;
                    border: 2px dashed #d1d5db;
                    border-radius: 12px;
                    padding: 16px;
                    margin-bottom: 20px;
                }

                .eip-code {
                    font-size: 32px;
                    font-weight: 800;
                    color: #111827;
                    letter-spacing: 4px;
                    margin: 0;
                    font-family: 'Plus Jakarta Sans', monospace;
                }

                .eip-cta {
                    display: block;
                    width: 100%;
                    padding: 16px 24px;
                    border: none;
                    border-radius: 12px;
                    font-size: 16px;
                    font-weight: 700;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    cursor: pointer;
                    transition: all 0.2s;
                    color: #fff;
                    background: #FF6B35;
                }
                .eip-cta:hover {
                    background: #E55A25;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 16px rgba(255, 107, 53, 0.4);
                }
                .eip-cta--copied {
                    background: #22c55e !important;
                    box-shadow: none !important;
                    transform: none !important;
                }

                .eip-fine-print {
                    font-size: 11px;
                    color: #9ca3af;
                    margin: 16px 0 0;
                    line-height: 1.5;
                }

                @keyframes eip-fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes eip-slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px) scale(0.96);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                @keyframes eip-shimmer {
                    0% { background-position: 100% 0; }
                    100% { background-position: -100% 0; }
                }

                @media (max-width: 500px) {
                    .eip-content {
                        padding: 32px 24px 28px;
                    }
                    .eip-headline {
                        font-size: 22px;
                    }
                    .eip-subheadline {
                        font-size: 14px;
                    }
                    .eip-code {
                        font-size: 26px;
                        letter-spacing: 3px;
                    }
                    .eip-cta {
                        font-size: 15px;
                        padding: 14px 20px;
                    }
                }
            `}</style>

            {/* Overlay */}
            <div className="eip-overlay" onClick={closePopup}>
                {/* Card — stop propagation so clicking card doesn't close */}
                <div className="eip-card" onClick={(e) => e.stopPropagation()}>
                    {/* Animated shimmer bar */}
                    <div className="eip-shimmer-bar" />

                    {/* Close button */}
                    <button className="eip-close" onClick={closePopup} aria-label="Close popup">
                        &#x2715;
                    </button>

                    <div className="eip-content">
                        <div className="eip-badge">{BADGE_TEXT}</div>
                        <h2 className="eip-headline">{HEADLINE}</h2>
                        <p className="eip-subheadline">{SUBHEADLINE}</p>
                        <p className="eip-body">{BODY_TEXT}</p>

                        {/* Discount code box */}
                        <div className="eip-code-box">
                            <p className="eip-code">{DISCOUNT_CODE}</p>
                        </div>

                        {/* CTA button */}
                        <button
                            className={`eip-cta${copied ? ' eip-cta--copied' : ''}`}
                            onClick={handleCopy}
                        >
                            {copied ? (
                                <span>&#x2713; {CTA_COPIED_TEXT}</span>
                            ) : (
                                CTA_TEXT
                            )}
                        </button>

                        <p className="eip-fine-print">{FINE_PRINT}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
