import { PlumberIcon, ElectricianIcon, HeatingIcon, BuilderIcon, LocksmithIcon } from '../components/svg/TradeIcons';

export const trades = {
    plumbers: {
        name: 'Plumbers',
        slug: 'plumbers',
        accent: '#3B82F6',
        icon: PlumberIcon,
        tagLine: 'Stop losing emergency callouts to the bloke who answers first',
        title: 'AI Voice Agent for Plumbers UK | Never Miss a Plumbing Call Again',
        description: 'AI phone answering built for UK plumbers. Answers calls 24/7, captures job details, books appointments. From £97/mo. Free 7-day trial.',
        h1: 'AI Voice Agent for Plumbers — Stop Losing Jobs to Missed Calls',
        opening: "You're under a sink, covered in who-knows-what, and your phone's going off for the third time in an hour. You can't answer — you're literally up to your elbows. By the time you ring back, they've already called two other plumbers and booked the one who picked up first. That emergency burst pipe job? Gone. The bathroom refit quote? Someone else's. All because you were busy doing actual plumbing.",
        painPoints: [
            "You're on an emergency callout and three other potential jobs ring while you're fixing a burst pipe",
            "You finish a long job at 5pm, check your phone, and see 6 missed calls — none left voicemails",
            "The missus has been answering your work phone and she's had enough",
            "You're paying £80+ a month for Checkatrade leads but missing half the calls they send you",
            "Weekend emergency calls go straight to answerphone — and to your competitor"
        ],
        conversation: [
            { role: 'agent', text: "Good morning, thanks for calling Dave's Plumbing. How can I help you today?" },
            { role: 'caller', name: 'Sarah', text: "Hi, yeah, I've got a leak under my kitchen sink. It's dripping quite badly." },
            { role: 'agent', text: "Sorry to hear that — let's get that sorted for you. Can I take your name please?" },
            { role: 'caller', name: 'Sarah', text: "It's Sarah. Sarah Mitchell." },
            { role: 'agent', text: "Thanks Sarah. And what's your postcode so I can check you're in our area?" },
            { role: 'caller', name: 'Sarah', text: "SO16 3PH." },
            { role: 'agent', text: "Perfect, that's within our patch. Is this an emergency — is water actively flowing — or is it a steady drip you can manage for now?" },
            { role: 'caller', name: 'Sarah', text: "It's a steady drip. I've put a bucket under it. But I'd like someone out fairly soon if possible." },
            { role: 'agent', text: "Completely understand. Dave's currently on a job but I'll make sure he gets your details straightaway. He typically responds within the hour. Can I take your best contact number?" },
            { role: 'caller', name: 'Sarah', text: "07700 900123." },
            { role: 'agent', text: "Brilliant. So that's a kitchen sink leak at SO16 3PH, steady drip with a bucket underneath, and Dave will ring you back on 07700 900123. Is there anything else I can help with?" },
            { role: 'caller', name: 'Sarah', text: "No, that's great. Thanks very much." },
            { role: 'agent', text: "No problem Sarah. Dave will be in touch soon. Thanks for calling!" }
        ],
        roiJobValue: '£150-300',
        roiDescription: "Average emergency plumbing callout: £150-300. Average bathroom job: £2,000-5,000. If you're missing just 3 calls a week — and even ONE of those would have been a job — that's easily £600+ a month walking out the door. Your AI voice agent costs from £97/month. Do the maths.",
        faqs: [
            { q: "Can the AI tell the difference between an emergency leak and a routine job?", a: "Yes — it asks the right questions to triage urgency. If someone says 'burst pipe' or 'water pouring,' it flags it as emergency and tries to reach you immediately." },
            { q: "I work on my own — will it sound like I have an office?", a: "That's exactly the point. It sounds professional and organised. Customers think you've got a receptionist. First impressions win jobs." },
            { q: "Can it give rough prices for common plumbing jobs?", a: "If you want it to. You tell us your typical rates and the AI can give ballpark figures. Or it can simply say 'Dave will give you a quote when he calls back' — your choice." },
            { q: "What about Gas Safe related enquiries?", a: "The AI knows your qualifications. If someone asks about gas work it can confirm you're Gas Safe registered and capture the details for you." },
            { q: "I get loads of spam calls — will the AI waste time on those?", a: "It handles them quickly and politely, then flags them as spam so they don't clutter your inbox. Genuine leads only." }
        ],
        keywords: {
            primary: ['ai voice agent for plumbers', 'ai phone answering for plumbers UK'],
            secondary: ['plumber answering service', 'plumber missing calls']
        },
    },
    electricians: {
        name: 'Electricians',
        slug: 'electricians',
        accent: '#EAB308',
        icon: ElectricianIcon,
        tagLine: "Your AI handles the calls while you're up a ladder with both hands full",
        title: 'AI Voice Agent for Electricians | Professional Phone Answering',
        description: 'AI phone answering for UK electricians. Never miss an emergency callout or rewire quote while you are on the tools. Free 7-day trial.',
        h1: 'AI Voice Agent for Electricians — Work Safe, Stop Missing Calls',
        opening: "You're halfway through a rewire, there's cables everywhere, your hands are full, and you're not about to stop what you're doing to fish your phone out. Or you're up a ladder fitting a consumer unit and it's genuinely not safe to answer. Your phone rings four times today while you're working — and four potential customers ring someone else instead. That Part P certification job? Gone to a sparky who answered his phone.",
        painPoints: [
            "You're in the middle of a first fix and can't stop to answer — every interruption costs you time",
            "Customers ring for emergency callouts on evenings and weekends and you're trying to have a life",
            "You're NICEIC or NAPIT registered and professional — but your answerphone makes you sound like a one-man band",
            "Other sparkies in your area answer faster and get the job, even though your work's better",
            "Testing and inspecting means you literally can't have your phone on you in some situations"
        ],
        conversation: [
            { role: 'agent', text: "Hello, Bolt Electrical AI Reception. How can I help?" },
            { role: 'caller', name: 'Mark', text: "Hi, I need a quote for replacing an old fuse board with a new consumer unit." },
            { role: 'agent', text: "No problem, we can certainly help with that. Are you experiencing any issues like trips or partial power loss right now?" },
            { role: 'caller', name: 'Mark', text: "No, it's just really old and I'm getting an extension built soon." },
            { role: 'agent', text: "Understood. The team can give you an accurate quote for an RCBO board. Can I have your postcode and name?" },
            { role: 'caller', name: 'Mark', text: "Mark Davies, PO16 8AA." },
            { role: 'agent', text: "Thanks Mark. I'll get your details over to our lead electrician immediately. He usually returns non-emergency calls between 4pm and 6pm. Is that okay?" },
            { role: 'caller', name: 'Mark', text: "Yes, that's fine." }
        ],
        roiJobValue: '£300-500',
        roiDescription: "Average consumer unit replacement: £300-500. EICR: £150-250. Full rewire: £3,000-8,000. Missing even one decent call a week is costing you more than a new set of Knipex every month. Your AI pays for itself with a single small job.",
        faqs: [
            { q: "Can it confirm my NICEIC/NAPIT credentials?", a: "Yes. The AI is programmed with all your specific accreditations and can assure customers you are fully qualified and compliant." },
            { q: "Does it know the difference between domestic and commercial?", a: "Absolutely. We set it up based on your business model. It can instantly tell commercial callers they're in the right place, or politely decline jobs outside your scope." },
            { q: "How does it handle dangerous situations?", a: "If a caller reports arcing, burning smells, or exposed live wires, the AI instantly flags it as a high-priority emergency and sends an urgent notification to your phone." }
        ]
    },
    'heating-engineers': {
        name: 'Heating Engineers',
        slug: 'heating-engineers',
        accent: '#F97316',
        icon: HeatingIcon,
        tagLine: 'Winter rush? Every boiler breakdown call answered instantly, day or night',
        title: 'AI Answering Service for Heating Engineers | Boiler Breakdown Leads',
        description: 'Capture every boiler breakdown lead with an AI voice agent. Answers calls 24/7, books services, handles the winter rush.',
        h1: 'AI Voice Agents for Heating Engineers',
        opening: "It's January. It's minus 3 outside. Every boiler in your postcode has decided to pack it in at the same time. Your phone is ringing non-stop, you're already running behind on callouts, and you physically cannot answer while you're shoulder-deep in a combi boiler with a customer breathing down your neck. Meanwhile, every missed call is a £200+ emergency job walking straight to the next Gas Safe engineer on Google.",
        painPoints: [
            "Winter rush hits and you're drowning — 20+ missed calls a day during cold snaps",
            "Boiler breakdowns don't stop at 5pm — families with no heating and young kids are ringing at 9pm",
            "You're Gas Safe registered and your work is top notch — but losing jobs to engineers who just answer faster",
            "Annual service reminders go out and suddenly everyone wants to book at once",
            "You spend your evenings ringing back missed calls instead of being with your family"
        ],
        conversation: [
            { role: 'agent', text: "Thank you for calling Antek Plumbing & Heating. How can I help?" },
            { role: 'caller', name: 'John', text: "My boiler's stopped working and we've got no hot water. We have a toddler in the house." },
            { role: 'agent', text: "I'm sorry to hear that, especially with a young child. I'll flag this as a priority. Can I take your name and postcode?" },
            { role: 'caller', name: 'John', text: "John, RG21 4DD." },
            { role: 'agent', text: "Thanks John. Do you happen to know the make of the boiler, or is there an error code showing?" },
            { role: 'caller', name: 'John', text: "It's a Worcester Bosch, flashing EA." },
            { role: 'agent', text: "Got it. I'm texting this straight to our on-call engineer now. Have you got a number he can reach you on in the next 15 minutes?" }
        ],
        roiJobValue: '£200-400',
        roiDescription: "The brutal truth about heating is that your busiest time is when you can least afford to miss calls. Emergency boiler repair: £200-400. Boiler replacement: £2,000-4,000. During a cold snap, a heating engineer can miss 5-10+ calls a day. At £200 per callout, that's potentially £1,000+ a day in lost revenue.",
        faqs: [
            { q: "Can it book annual services automatically?", a: "Yes, it can integrate with your calendar to book routine annual services while prioritizing emergencies for your immediate attention." },
            { q: "Does it know Gas Safe numbers?", a: "We program it with your company's Gas Safe registration number so it can confidently supply it to customers or agents asking." }
        ]
    },
    builders: {
        name: 'Builders',
        slug: 'builders',
        accent: '#DC2626',
        icon: BuilderIcon,
        tagLine: 'Customers say builders never ring back. Prove them wrong.',
        title: 'AI Phone Answering for Builders | UK Construction Voice Agents',
        description: 'Stop losing extension quotes. AI voice agents for builders handling site calls, new enquiries, and supplier questions 24/7.',
        h1: 'AI Voice Agents for Builders — Catch Every Quote Request',
        opening: "Let's be honest — builders have a reputation for not returning calls. You know it, your customers know it, there's entire Mumsnet threads about it. But it's not because you don't care. It's because you're on a roof, driving a digger, mixing concrete, or managing three subcontractors at once. You're running a business AND doing the physical graft. Something's got to give, and usually it's the phone.",
        painPoints: [
            "You're managing a site with subcontractors, deliveries, and building control — answering the phone is the last thing on your mind",
            "Customers genuinely think you're ignoring them when you just can't get to your phone on site",
            "You lose extension and loft conversion quotes because the customer found someone who responded first",
            "Your van's full of tools, not office equipment — you're a builder, not a receptionist",
            "Weekend viewings and quote requests pile up and you spend Sunday evening returning calls"
        ],
        conversation: [
            { role: 'agent', text: "Welcome to Hampshire Construction Services. How can I help you today?" },
            { role: 'caller', name: 'Emma', text: "Hi, I'm looking to get a quote for a single-story kitchen extension." },
            { role: 'agent', text: "We'd love to help with that. Can I take your name and the area the property is in?" },
            { role: 'caller', name: 'Emma', text: "Emma Watson, Winchester." },
            { role: 'agent', text: "Thanks Emma. Do you already have architectural drawings and planning permission sorted?" },
            { role: 'caller', name: 'Emma', text: "We have drawings, permitted development was approved last week." },
            { role: 'agent', text: "Perfect. The next step is a site visit. I'll pass your details to our projects director, who will call you back this evening to arrange a time." }
        ],
        roiJobValue: '£30,000+',
        roiDescription: "Average kitchen extension: £20,000-40,000. Loft conversion: £30,000-60,000. Even a garden wall or patio job is £2,000-5,000. Missing ONE quote request per month could cost you tens of thousands over a year.",
        faqs: [
            { q: "Can the AI handle calls from my subcontractors or suppliers?", a: "Yes. It can take messages from suppliers regarding deliveries, or route urgent subcontractor issues to your emergency mobile number." },
            { q: "Will it filter out timewasters?", a: "Absolutely. By asking if they have drawings or planning permission, it qualifies leads before they ever reach your desk." }
        ]
    },
    locksmiths: {
        name: 'Locksmiths',
        slug: 'locksmiths',
        accent: '#D4A017',
        icon: LocksmithIcon,
        tagLine: "2am lockout call? Your AI's already on it before they try someone else",
        title: 'Urgent 24/7 AI Phone Answering for Locksmiths',
        description: 'Win every emergency lockout call. 24/7 AI voice answering for UK locksmiths. Instant response, instant alerts.',
        h1: 'AI Voice Agents for Locksmiths',
        opening: "Someone's locked out at 2am. It's raining. Their kid's asleep inside. They're standing on their doorstep frantically Googling 'emergency locksmith near me' and calling every number that comes up. The first locksmith to answer gets the job. Not the best locksmith. Not the cheapest. The first one to pick up the phone.",
        painPoints: [
            "Emergency lockouts happen 24/7 and your competition is whoever answers first",
            "You're on a lock change and miss two emergency calls — both worth £150+",
            "Daytime calls for new locks, security upgrades, and commercial work go unanswered while you're on site",
            "Auto lockout calls need fast response — people are stranded and will keep dialling until someone picks up",
            "You can't carry your phone when you're drilling out a lock barrel"
        ],
        conversation: [
            { role: 'agent', text: "You're through to Rapid Locks 24/7. Are you locked out right now?" },
            { role: 'caller', name: 'Pete', text: "Yes! And my car keys are inside too. I need someone ASAP!" },
            { role: 'agent', text: "Try not to worry, we can get someone out to you immediately. What is your postcode?" },
            { role: 'caller', name: 'Pete', text: "BN1 4GH." },
            { role: 'agent', text: "Thanks. Our engineer is currently in the Brighton area. Let me get your number, and he will call you back in the next 2 minutes with an exact ETA." }
        ],
        roiJobValue: '£100-200',
        roiDescription: "Average emergency lockout: £100-200. Lock change: £80-150. Average locksmith misses 15+ emergency calls per month. Even capturing 5 of those is £500-1,000 in extra monthly revenue. Your AI costs from £97/month.",
        faqs: [
            { q: "How fast will the AI pick up?", a: "Under a second. No answerphone delay, no multiple rings. Crucial for panic situations." },
            { q: "Can it give pricing for lockouts?", a: "Yes, we can script it to provide your fixed callout fee or an estimated range, dependent on your preferences." }
        ]
    }
};
