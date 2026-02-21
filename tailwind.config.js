export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6C3CE1',
          light: '#8B5CF6',
          dark: '#4F1FBA',
          50: '#F0EBFF',
        },
        dark: {
          DEFAULT: '#1A1A2E',
          card: '#2D2D3D',
        },
        text: {
          DEFAULT: '#374151',
          light: '#6B7280',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#F9FAFB',
          accent: '#F0EBFF',
        },
        border: '#E5E7EB',
        success: '#10B981',
        warning: '#F59E0B',
        coral: '#FF6B5A',
        // Trade accent colours
        trade: {
          plumber: '#3B82F6',
          electrician: '#EAB308',
          heating: '#F97316',
          builder: '#DC2626',
          locksmith: '#D4A017',
          roofer: '#7C3AED',
          cleaner: '#06B6D4',
          landscaper: '#16A34A',
          painter: '#EC4899',
          handyman: '#8B5CF6',
          pest: '#B91C1C',
          drainage: '#0891B2',
          bathroom: '#0D9488',
          window: '#4338CA',
          carpet: '#A16207',
        },
      },
      fontFamily: {
        display: ['DM Serif Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)',
        'card-hover': '0 10px 25px rgba(0,0,0,0.08)',
        'phone': '0 25px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05)',
        'cta': '0 4px 14px rgba(108,60,225,0.25)',
      }
    },
  },
};
