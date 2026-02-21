import { PlumberIcon, ElectricianIcon, HeatingIcon, BuilderIcon, LocksmithIcon, RooferIcon, CleanerIcon, LandscaperIcon, PainterIcon, HandymanIcon, PestControlIcon, DrainageIcon, BathroomFitterIcon, WindowFitterIcon, CarpetFitterIcon } from '../components/svg/TradeIcons';

export const trades = {
    plumbers: {
        name: 'Plumbers',
        slug: 'plumbers',
        accent: '#3B82F6',
        icon: PlumberIcon,
        tagLine: 'Stop losing emergency callouts to the bloke who answers first',
        title: 'AI Voice Agent for Plumbers UK | Never Miss Calls',
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
        title: 'AI Voice Agent for Electricians UK | 24/7',
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
        title: 'AI Voice Agent for Heating Engineers UK | 24/7',
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
        title: 'AI Voice Agent for Builders UK | Never Miss Quotes',
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
    },
    roofers: {
        name: 'Roofers',
        slug: 'roofers',
        accent: '#7C3AED',
        icon: RooferIcon,
        tagLine: 'Storm damage emergencies answered instantly — capture leads while competitors miss out',
        title: 'AI Voice Agent for Roofers | Never Miss Storm Leads',
        description: 'AI answering for UK roofers. Capture storm damage callouts, re-roof quotes, and insurance work 24/7. Free trial.',
        h1: 'AI Voice Agent for Roofers — Catch Every Emergency Storm Call',
        opening: "It's the middle of a storm. Tiles are blowing off roofs across your area. Your phone should be ringing off the hook — but you're already up a ladder, tarpaulin in hand, wind howling, trying to make a roof safe. By the time you climb down, you've missed eight calls. Seven of them have already rung another roofer. That's potentially £2,000-3,000 in emergency work gone in an afternoon.",
        painPoints: [
            "Storm damage calls flood in all at once — you can't be on three roofs and answer the phone",
            "Working at height means you literally cannot answer safely",
            "Insurance jobs require detailed information you can't take while balancing on scaffolding",
            "Seasonal demand spikes in autumn/winter but you're a one-man band",
            "You finish at 6pm covered in felt and bitumen with 12 missed calls and no voicemails"
        ],
        conversation: [
            { role: 'agent', text: "Good afternoon, ProRoof Solutions. How can I help?" },
            { role: 'caller', name: 'Linda', text: "Hi, we've lost several tiles in the storm last night. Rain's getting into the loft." },
            { role: 'agent', text: "Sorry to hear that. Let me get you booked in. Is it actively leaking inside the house right now?" },
            { role: 'caller', name: 'Linda', text: "Not yet, but the loft insulation is soaked." },
            { role: 'agent', text: "Understood. I'll flag this as urgent. Can I take your name and postcode?" },
            { role: 'caller', name: 'Linda', text: "Linda Harris, BA1 2NQ." },
            { role: 'agent', text: "Thanks Linda. Our team is responding to storm damage calls today. You'll get a call back within two hours to arrange a site visit. Will you be making an insurance claim?" },
            { role: 'caller', name: 'Linda', text: "Yes, I'll need to." },
            { role: 'agent', text: "No problem. We'll provide all the documentation you need. Sit tight and we'll be in touch shortly." }
        ],
        roiJobValue: '£500-1,500',
        roiDescription: "Average storm damage repair: £500-1,500. Full re-roof: £5,000-12,000. During storm season, roofers can miss 20+ calls in a single day. Even capturing half of those emergency calls is £5,000-10,000 in additional monthly revenue.",
        faqs: [
            { q: "Can it handle insurance-related questions?", a: "Yes. It can explain that you provide full documentation for claims and capture policy details if the customer has them to hand." },
            { q: "What about non-urgent re-roof quotes?", a: "The AI differentiates between emergency repairs and planned work, prioritising leaks while still capturing quote requests for later follow-up." },
            { q: "Does it know about flat roofs vs pitched roofs?", a: "Absolutely. We train it on your specific services — whether you do residential, commercial, flat roofing, or all of the above." }
        ]
    },
    cleaners: {
        name: 'Cleaners',
        slug: 'cleaners',
        accent: '#06B6D4',
        icon: CleanerIcon,
        tagLine: 'Always at client properties? AI handles bookings while you focus on the clean',
        title: 'AI Phone Answering for Cleaners | 24/7 Booking Service',
        description: 'Never miss a cleaning booking again. AI answers calls, takes bookings, handles end-of-tenancy urgency. UK cleaners.',
        h1: 'AI Voice Agent for Cleaners — Book More Jobs, Miss Fewer Calls',
        opening: "You're in the middle of an end-of-tenancy deep clean. Oven's half done, bathroom's gleaming, and you're on your hands and knees scrubbing skirting boards. Your phone rings. Then again. Then twice more. You can't answer — your gloves are covered in cleaning solution and you're racing against the clock. By the time you check your phone at lunch, those four missed calls have booked with SparkleClean down the road.",
        painPoints: [
            "You're always at client properties and can't answer professionally with Hoover noise in the background",
            "End-of-tenancy cleans are time-critical and high-value — missing those calls costs you £200-300 per job",
            "Regular clients want to book their next clean but you're mid-job and can't check your diary",
            "Evening and weekend calls from people who work 9-5 go unanswered",
            "You're managing bookings, invoices, and stock while trying to actually clean"
        ],
        conversation: [
            { role: 'agent', text: "Hello, Crystal Clear Cleaning Services. How can I help you today?" },
            { role: 'caller', name: 'Rachel', text: "Hi, I need an end-of-tenancy clean next Friday. Two-bed flat in Reading." },
            { role: 'agent', text: "We'd love to help with that. Can I take your postcode to make sure we cover your area?" },
            { role: 'caller', name: 'Rachel', text: "RG1 5DP." },
            { role: 'agent', text: "Perfect, that's within our service area. Is this for a rental property check-out?" },
            { role: 'caller', name: 'Rachel', text: "Yes, my tenancy ends on the 15th." },
            { role: 'agent', text: "Got it. I'll pass this to our team immediately. They'll call you back today to confirm availability and give you a quote. Can I take your name and number?" },
            { role: 'caller', name: 'Rachel', text: "Rachel Thompson, 07788 990000." },
            { role: 'agent', text: "Brilliant. Rachel, you'll hear from us this afternoon. Thanks for calling!" }
        ],
        roiJobValue: '£200-400',
        roiDescription: "Average end-of-tenancy clean: £200-400. Regular weekly clean: £60-100 = £3,000+ per year per client. Missing just two end-of-tenancy bookings a week is £1,600-3,200 lost monthly revenue. Your AI captures those calls for £97/month.",
        faqs: [
            { q: "Can it take bookings directly into my calendar?", a: "Yes. It integrates with Google Calendar or your booking system to schedule cleans, or simply captures details for you to confirm manually." },
            { q: "Will it give quotes over the phone?", a: "If you provide a standard price list, yes. Or it can say 'quotes provided within 24 hours' and pass the details to you." },
            { q: "Can it handle regular client rebookings?", a: "Absolutely. If Mrs Smith calls to book her fortnightly clean, the AI recognises her and books the next slot." }
        ]
    },
    landscapers: {
        name: 'Landscapers',
        slug: 'landscapers',
        accent: '#16A34A',
        icon: LandscaperIcon,
        tagLine: 'Spring rush overwhelming you? AI handles enquiries while you\'re on the tools',
        title: 'AI Voice Agent for Landscapers | Garden Design Leads',
        description: 'Capture garden design leads and maintenance bookings 24/7. AI for UK landscapers and gardeners. Free trial.',
        h1: 'AI Voice Agent for Landscapers — Never Miss a Garden Project Lead',
        opening: "It's April. The sun's out. Everyone suddenly wants their garden sorted. You're knee-deep in soil, laying a new patio, mower running, strimmer screaming, and your phone's going mental in your pocket. You can't answer. Three missed calls before lunch — one wanted a full garden redesign (£8k job), one wanted decking (£4k), and one wanted weekly mowing (£1,200/year). All three booked someone who answered their phone.",
        painPoints: [
            "Spring/summer is mental — you're booked solid but still missing quote requests for next month",
            "Noisy equipment means you literally can't hear your phone, let alone have a conversation",
            "Garden design consultations need 20 minutes on the phone — you don't have that time on-site",
            "Weather-dependent scheduling means constant rebooking calls you can't manage mid-job",
            "You're a gardener, not a PA — but customers expect instant responses"
        ],
        conversation: [
            { role: 'agent', text: "Good morning, Green Thumb Landscaping. How can I help?" },
            { role: 'caller', name: 'Simon', text: "Hi, I'm looking for someone to redesign our back garden. It's quite overgrown." },
            { role: 'agent', text: "We'd be delighted to help with that. Can I take a few details? What's the approximate size of the garden?" },
            { role: 'caller', name: 'Simon', text: "About 15 metres by 8 metres." },
            { role: 'agent', text: "Lovely size to work with. Are you thinking full redesign with paving or decking, or mainly planting and turfing?" },
            { role: 'caller', name: 'Simon', text: "We'd like some paving and raised beds." },
            { role: 'agent', text: "Perfect. Our designer will need to visit the site. Can I take your name, postcode, and a contact number?" },
            { role: 'caller', name: 'Simon', text: "Simon Clarke, OX1 3BE, 07799 123456." },
            { role: 'agent', text: "Thanks Simon. You'll get a call back this evening to arrange a free consultation and quote. Looking forward to transforming your garden!" }
        ],
        roiJobValue: '£3,000-10,000',
        roiDescription: "Average garden redesign: £5,000-15,000. Patio or decking: £3,000-8,000. Yearly maintenance contract: £1,500-3,000. Missing one big project lead per month = £5,000-15,000 in lost annual revenue. AI costs £97/month.",
        faqs: [
            { q: "Can it handle weather-related rescheduling?", a: "Yes. Customers can call to reschedule and the AI captures new preferred dates, reducing admin burden on you." },
            { q: "Does it know the difference between maintenance and projects?", a: "Absolutely. It asks qualifying questions to determine whether it's a mow-and-go job or a full landscape design, routing each appropriately." },
            { q: "What about plant knowledge questions?", a: "It can handle basic questions or honestly say 'That's a great question for our horticulturist — they'll cover it when they call back.'" }
        ]
    },
    'painters-decorators': {
        name: 'Painters & Decorators',
        slug: 'painters-decorators',
        accent: '#EC4899',
        icon: PainterIcon,
        tagLine: 'Both hands on a brush? AI answers while you work',
        title: 'AI Voice Agent for Painters & Decorators UK',
        description: 'AI phone answering for painters and decorators. Capture quotes while you paint. Never miss a job. Free trial.',
        h1: 'AI Voice Agent for Painters & Decorators — Focus on the Finish, Not the Phone',
        opening: "You're up a ladder, brush in one hand, cutting in a ceiling edge, paint tray balanced precariously on the top step. Your phone rings. You can't answer — your hands are literally covered in paint. By the time you've climbed down, wiped your hands, and checked your phone, that's three missed calls. One was a whole-house internal repaint (£3k job). They've already booked Gary from down the road.",
        painPoints: [
            "Both hands are always busy — brush, roller, paint tray, scraper, sander",
            "Paint-covered hands and phones don't mix — you'd ruin your mobile",
            "Customers want quick quotes for room sizes and you can't have that conversation mid-job",
            "You're often working alone in someone's house and can't take calls professionally with Radio 2 blaring",
            "Evenings and weekends are when customers ring — but you're knackered and want your life back"
        ],
        conversation: [
            { role: 'agent', text: "Hello, thanks for calling Elite Decorators. How can I help?" },
            { role: 'caller', name: 'Karen', text: "Hi, I need a quote for painting my living room and hallway." },
            { role: 'agent', text: "No problem at all. Can I ask roughly what size the living room is?" },
            { role: 'caller', name: 'Karen', text: "About 4 metres by 5 metres. The hallway is quite long though." },
            { role: 'agent', text: "Understood. And would this be just walls, or are you looking at ceilings and woodwork too?" },
            { role: 'caller', name: 'Karen', text: "Walls and ceilings, and the skirting boards need freshening up." },
            { role: 'agent', text: "Perfect. I'll get your details to our estimator and they'll provide a written quote. Can I take your name, postcode, and contact number?" },
            { role: 'caller', name: 'Karen', text: "Karen Hughes, LE1 5DR, 07766 555000." },
            { role: 'agent', text: "Thanks Karen. Expect a call back and quote within 24 hours." }
        ],
        roiJobValue: '£600-3,000',
        roiDescription: "Average room repaint: £300-600. Full house internal: £2,000-5,000. External render painting: £3,000-8,000. Missing even one full-house job per month = £24,000-60,000 lost per year. AI costs £97/month.",
        faqs: [
            { q: "Can it give ballpark prices?", a: "Yes, if you provide standard rates (e.g., £200 per room). Or it can simply say 'All quotes provided in writing after a site visit.'" },
            { q: "Does it know about prep work and materials?", a: "We train it on your standard process, so it can explain that quotes include prep, materials, and finish coats as standard." },
            { q: "What about wallpaper hanging and specialist finishes?", a: "It can confirm the services you offer and capture detailed requirements for you to assess and quote." }
        ]
    },
    handymen: {
        name: 'Handymen',
        slug: 'handymen',
        accent: '#8B5CF6',
        icon: HandymanIcon,
        tagLine: 'Diverse jobs, high volume, no time for phone tag — AI handles it all',
        title: 'AI Voice Agent for Handymen | Capture Every Job',
        description: 'AI answering for UK handymen. Handles flat-pack assembly to fence repairs. Books jobs 24/7. Free trial.',
        h1: 'AI Voice Agent for Handymen — More Jobs, Less Admin',
        opening: "You're the go-to person in your area for 'everything else'. Flat-pack assembly, fence repairs, shelf fitting, TV mounting, grouting, gate fixing — you name it, you do it. Which is brilliant for business but murder for your phone. You're doing three small jobs a day across town, and your phone rings every 20 minutes. Half the time you're mid-job and can't answer. You're losing £30-80 jobs all day, every day.",
        painPoints: [
            "You do everything, so everyone calls you — but you can't answer while assembling an IKEA wardrobe",
            "Lots of small jobs = lots of admin and constant phone tag",
            "Customers want same-day or next-day service and you can't coordinate your diary mid-job",
            "You're working alone, often in elderly or vulnerable customers' homes where professionalism matters",
            "Quick quote requests ('How much to fit a shelf?') stack up and you spend evenings calling everyone back"
        ],
        conversation: [
            { role: 'agent', text: "Good afternoon, Hampshire Handyman Services. What can I help you with today?" },
            { role: 'caller', name: 'Tom', text: "Hi, I've got a flat-pack wardrobe that needs assembling. Are you available this week?" },
            { role: 'agent', text: "We can definitely help with that. Is it a single or double wardrobe?" },
            { role: 'caller', name: 'Tom', text: "It's a big double one, sliding doors." },
            { role: 'agent', text: "No problem. Those usually take 2-3 hours. Can I take your name and postcode to check availability?" },
            { role: 'caller', name: 'Tom', text: "Tom Reynolds, GU14 7PP." },
            { role: 'agent', text: "Thanks Tom. I'll check the schedule and get back to you today with available slots. What's your contact number?" },
            { role: 'caller', name: 'Tom', text: "07722 800800." },
            { role: 'agent', text: "Perfect. You'll hear from us this afternoon. Thanks for calling!" }
        ],
        roiJobValue: '£80-300',
        roiDescription: "Average handyman job: £80-200. Flat-pack assembly: £50-100. Kitchen fitting: £500-1,000. High-volume, quick-turnaround work. Missing 5-10 small jobs per week = £2,000-4,000 lost monthly. AI costs £97/month.",
        faqs: [
            { q: "I do loads of different jobs — can the AI handle that?", a: "Yes. We train it on your full service list so it knows whether you do plumbing, electrics, carpentry, or general maintenance." },
            { q: "Can it give prices for common jobs?", a: "If you provide a standard rate card (e.g., £45/hour or £80 flat-pack assembly), yes. Otherwise it captures details for you to quote." },
            { q: "What about emergency call-outs?", a: "It can flag urgent jobs (e.g., broken lock, burst pipe) and alert you immediately while still capturing non-urgent work." }
        ]
    },
    'pest-control': {
        name: 'Pest Control',
        slug: 'pest-control',
        accent: '#B91C1C',
        icon: PestControlIcon,
        tagLine: 'Wasp nests and rat infestations need immediate response — AI answers every panic call',
        title: 'AI Voice Agent for Pest Control | 24/7 Emergency Response',
        description: 'Never miss a pest emergency. AI for UK pest control. Wasps, rats, bedbugs — instant answers, instant bookings.',
        h1: 'AI Voice Agent for Pest Control — Catch Every Emergency Call',
        opening: "It's July. Wasp season. Your phone is ringing non-stop with panicked homeowners who've just discovered a football-sized nest in their loft. You're currently in full PPE dealing with a hornet nest and absolutely cannot answer. By the time you're back in the van and de-suited, you've missed six calls. Four of them have already booked another pest controller. That's £400-600 gone in an afternoon because you were doing your job.",
        painPoints: [
            "Pest emergencies are time-sensitive — wasps, rats, bedbugs cause panic and people book the first person who answers",
            "You're often handling hazardous materials or chemicals and genuinely can't touch your phone",
            "Seasonal spikes (wasps in summer, mice in autumn) overwhelm you with calls at peak times",
            "Commercial contracts need detailed discussions you can't have while mid-treatment",
            "You work alone and can't afford to miss the high-value emergency callouts"
        ],
        conversation: [
            { role: 'agent', text: "Hello, Rapid Pest Solutions. Are you dealing with a pest emergency right now?" },
            { role: 'caller', name: 'Angela', text: "Yes! There's a massive wasps' nest in our shed and my daughter got stung!" },
            { role: 'agent', text: "I'm sorry to hear that. We can get someone out to you today. Is your daughter okay?" },
            { role: 'caller', name: 'Angela', text: "Yes, she's fine, but we're terrified to go in the garden now." },
            { role: 'agent', text: "Completely understand. Can I take your postcode and we'll check availability?" },
            { role: 'caller', name: 'Angela', text: "SL1 4HG." },
            { role: 'agent', text: "Thanks. We cover Slough. Our technician will call you back within 10 minutes with an arrival time. In the meantime, keep everyone away from the shed. Can I take your name and number?" },
            { role: 'caller', name: 'Angela', text: "Angela Foster, 07811 222333." },
            { role: 'agent', text: "Perfect Angela. Sit tight, help is on the way." }
        ],
        roiJobValue: '£80-250',
        roiDescription: "Average wasp nest removal: £80-150. Rodent treatment (multiple visits): £150-300. Bedbug treatment: £300-600. Peak season brings 10-20 calls per day. Missing even 30% of those = £2,000-4,000 lost monthly revenue.",
        faqs: [
            { q: "Can it differentiate between wasps, bees, and hornets?", a: "Yes. It asks questions to identify the pest so you know what equipment to bring and can prioritise protected species like bees." },
            { q: "Does it handle commercial contracts?", a: "Absolutely. It can capture details for restaurants, hotels, and facilities needing ongoing treatments, routing them for proper quoting." },
            { q: "What about same-day emergency pricing?", a: "We can program it with your callout fees and any emergency surcharges so customers know the cost upfront." }
        ]
    },
    'drainage-engineers': {
        name: 'Drainage Engineers',
        slug: 'drainage-engineers',
        accent: '#0891B2',
        icon: DrainageIcon,
        tagLine: 'Blocked drains and sewage emergencies answered instantly — no more lost callouts',
        title: 'AI Voice Agent for Drainage Engineers | 24/7 Emergency',
        description: 'AI answering for drainage and sewage specialists. CCTV surveys, jetting, unblocking. Never miss emergency work.',
        h1: 'AI Voice Agent for Drainage Engineers — Answer Every Blockage Emergency',
        opening: "Someone's got raw sewage backing up into their downstairs toilet. They're frantic. They're Googling 'emergency drainage engineer near me' and ringing every number they can find. You're currently running a CCTV survey down a 30-metre drain and your phone's in the van. By the time you finish and check your phone, they've booked another engineer. That's a £200-300 emergency callout lost because you were elbow-deep in a manhole.",
        painPoints: [
            "Drainage emergencies are gross, urgent, and people will book whoever picks up first",
            "You're operating jetting equipment or CCTV cameras — both hands busy, can't answer phone",
            "Blocked drains don't happen 9-5 — weekend and evening calls are the most lucrative",
            "Commercial contracts (restaurants, hotels) need immediate response or they'll use someone else",
            "Insurance work and CCTV surveys need detailed admin you can't handle on-site"
        ],
        conversation: [
            { role: 'agent', text: "Hello, ClearFlow Drainage. Are you experiencing a drainage emergency?" },
            { role: 'caller', name: 'Paul', text: "Yes, the drains are completely blocked and there's water backing up into the kitchen sink." },
            { role: 'agent', text: "Sorry to hear that. We'll get someone to you urgently. Is this a domestic or commercial property?" },
            { role: 'caller', name: 'Paul', text: "Domestic. It's our family home." },
            { role: 'agent', text: "Understood. Can I take your postcode?" },
            { role: 'caller', name: 'Paul', text: "ME15 6JJ." },
            { role: 'agent', text: "Thanks. Our engineer is currently in the Maidstone area. I'll have them call you back in the next 5 minutes. In the meantime, avoid using any taps or toilets. Can I take your name and contact number?" },
            { role: 'caller', name: 'Paul', text: "Paul Jenkins, 07833 999111." },
            { role: 'agent', text: "Got it Paul. Help is on the way. We'll speak very soon." }
        ],
        roiJobValue: '£150-400',
        roiDescription: "Average emergency drain unblocking: £150-250. CCTV survey: £200-400. Full drain repair/reline: £1,000-5,000. Missing emergency calls during peak times (Christmas, heavy rain) can cost £1,000+ per day.",
        faqs: [
            { q: "Can it handle insurance claim enquiries?", a: "Yes. It captures policy details and explains you provide full reporting and evidence for claims, including CCTV footage if needed." },
            { q: "Does it know the difference between blockages and collapsed drains?", a: "It asks qualifying questions (e.g., 'Is water draining slowly or not at all?') to help you prioritise and bring the right equipment." },
            { q: "What about commercial contracts?", a: "Absolutely. It can discuss preventative maintenance contracts for restaurants, hotels, and commercial premises, routing them for formal quoting." }
        ]
    },
    'bathroom-fitters': {
        name: 'Bathroom Fitters',
        slug: 'bathroom-fitters',
        accent: '#0D9488',
        icon: BathroomFitterIcon,
        tagLine: 'High-value bathroom projects — AI captures quotes while you\'re on the tools',
        title: 'AI Voice Agent for Bathroom Fitters | Quote Capture',
        description: 'Never miss a bathroom fitting quote again. AI for UK bathroom fitters. Captures leads 24/7. Free trial.',
        h1: 'AI Voice Agent for Bathroom Fitters — Focus on Fitting, Not Phone Tag',
        opening: "You're in the middle of tiling a wet room. Adhesive's mixed, tiles are cut, you're in the zone. Your phone rings. Then again. You can't answer — you've got tile adhesive on your hands and a half-set mix that'll go off if you stop. That missed call was someone wanting a full bathroom refit (£6k job). By the time you ring back at 5pm, they've already got two other quotes lined up and yours is an afterthought.",
        painPoints: [
            "Bathroom fitting is intricate work — you can't down tools every time the phone rings",
            "High-value jobs (£4k-10k) need detailed discussions you can't have mid-tile",
            "Customers want design consultations and product advice — that's a 30-minute call, not a quick chat on-site",
            "You're often working in occupied homes where taking calls isn't professional",
            "Quote requests come in evenings and weekends when customers are planning their renovations"
        ],
        conversation: [
            { role: 'agent', text: "Good morning, Premier Bathroom Fitting. How can I help?" },
            { role: 'caller', name: 'Sophie', text: "Hi, we're looking to get our bathroom completely refitted. Can we get a quote?" },
            { role: 'agent', text: "We'd love to help with that. Is this a full replacement — suite, tiles, electrics, plumbing?" },
            { role: 'caller', name: 'Sophie', text: "Yes, everything. It's a complete renovation." },
            { role: 'agent', text: "Perfect. Our fitters will need to visit to take measurements and discuss your requirements. Can I take your name and postcode?" },
            { role: 'caller', name: 'Sophie', text: "Sophie Baker, CR0 5HA." },
            { role: 'agent', text: "Thanks Sophie. Do you have a rough budget in mind, or are you looking for options?" },
            { role: 'caller', name: 'Sophie', text: "We're flexible, but ideally around £7,000-8,000." },
            { role: 'agent', text: "Understood. I'll pass this to our design team and they'll call you today to arrange a free consultation. What's your best contact number?" },
            { role: 'caller', name: 'Sophie', text: "07900 555666." },
            { role: 'agent', text: "Brilliant Sophie. Expect a call this afternoon. Thanks for choosing Premier!" }
        ],
        roiJobValue: '£4,000-10,000',
        roiDescription: "Average bathroom refit: £4,000-8,000. Wet room installation: £6,000-12,000. Ensuite addition: £5,000-10,000. Missing just ONE quote per month = £48,000-96,000 lost per year. AI costs £97/month.",
        faqs: [
            { q: "Can it discuss product choices like suites and tiles?", a: "It can capture preferences (e.g., walk-in shower vs bath) but directs detailed design discussions to your consultation, which is more appropriate." },
            { q: "Does it handle both supply-and-fit and labour-only jobs?", a: "Yes. It asks whether the customer has already purchased materials or needs you to supply everything." },
            { q: "What about insurance jobs after leaks or floods?", a: "Absolutely. It captures insurance details and explains you work with loss adjusters to provide full quotations and project management." }
        ]
    },
    'window-fitters': {
        name: 'Window Fitters',
        slug: 'window-fitters',
        accent: '#4338CA',
        icon: WindowFitterIcon,
        tagLine: 'Double glazing quotes and FENSA questions answered while you\'re installing',
        title: 'AI Voice Agent for Window Fitters | FENSA Approved',
        description: 'AI answering for UK window and door fitters. Captures quotes for double glazing, UPVC, and installations. Free trial.',
        h1: 'AI Voice Agent for Window Fitters — Capture Every Installation Lead',
        opening: "You're halfway up scaffolding, fitting a bay window, power tools screaming, and your phone's ringing in your back pocket. You can't answer — you're holding a sheet of glass and balancing on a plank. That missed call was someone wanting eight windows and a new front door (£8k job). They've moved on to the next company. You've just lost a week's worth of work because you were physically unable to pick up the phone.",
        painPoints: [
            "Working at height with heavy glass means answering the phone is genuinely dangerous",
            "Double glazing quotes need measurements and product discussions — can't do that on a ladder",
            "Customers have FENSA questions, energy rating questions, and warranty questions you can't answer mid-install",
            "Seasonal demand (autumn/winter) means you're flat-out installing but still need to capture spring quotes",
            "You're either a one-man band or managing fitters on multiple sites — no time for phone admin"
        ],
        conversation: [
            { role: 'agent', text: "Hello, ClearView Windows. How can I help you today?" },
            { role: 'caller', name: 'James', text: "Hi, I'd like a quote for replacing the windows in my house. There are ten in total." },
            { role: 'agent', text: "We'd be happy to provide a quote. Are you looking at UPVC, aluminium, or timber frames?" },
            { role: 'caller', name: 'James', text: "UPVC, white frames." },
            { role: 'agent', text: "Perfect. And is this a standard double-glazing replacement or are there any bay or sash windows?" },
            { role: 'caller', name: 'James', text: "One bay window at the front, the rest are standard casement windows." },
            { role: 'agent', text: "Got it. We'll need to visit to measure and provide an accurate quote. Can I take your name, postcode, and contact number?" },
            { role: 'caller', name: 'James', text: "James O'Connor, NN1 4QQ, 07955 111222." },
            { role: 'agent', text: "Thanks James. Our surveyor will call you today to arrange a free home visit and provide a written quotation. All our installations are FENSA registered." },
            { role: 'caller', name: 'James', text: "Brilliant, thanks." }
        ],
        roiJobValue: '£5,000-12,000',
        roiDescription: "Average full-house window replacement: £6,000-12,000. Single bay window: £1,500-3,000. Conservatory: £8,000-20,000. Missing one full-house quote per month = £72,000-144,000 lost per year.",
        faqs: [
            { q: "Can it explain FENSA certification?", a: "Yes. It confirms all installations are FENSA registered and explains the certification is provided post-installation for Building Regulations compliance." },
            { q: "Does it handle both windows and doors?", a: "Absolutely. It captures requirements for UPVC doors, composite doors, bi-folds, patio doors, and conservatories." },
            { q: "What about energy efficiency and U-values?", a: "It can confirm you install A-rated windows as standard, but technical U-value discussions are handled during the surveyor visit." }
        ]
    },
    'carpet-fitters': {
        name: 'Carpet Fitters',
        slug: 'carpet-fitters',
        accent: '#A16207',
        icon: CarpetFitterIcon,
        tagLine: 'Quick turnaround, high volume — AI captures bookings while you\'re laying carpet',
        title: 'AI Voice Agent for Carpet Fitters | Booking Service',
        description: 'AI answering for UK carpet and vinyl fitters. Captures measurements, bookings, and quotes 24/7. Free trial.',
        h1: 'AI Voice Agent for Carpet Fitters — More Jobs, Less Phone Tag',
        opening: "You're on your knees, stretching carpet across a living room, gripper rods in place, knee kicker in hand. Your phone rings. You can't answer — you're mid-stretch and if you stop now, the carpet will shift. That call was someone wanting three bedrooms carpeted this week (£1,200 job). By the time you finish at 3pm and call back, they've booked someone who answered immediately.",
        painPoints: [
            "Carpet fitting is physical, time-sensitive work — you can't stop mid-stretch to answer calls",
            "High-volume, quick-turnaround jobs mean constant admin and booking management",
            "Customers want fitting 'this week' or 'ASAP' — coordination is a nightmare when you're on-site all day",
            "Measurement appointments, supply-and-fit quotes, and labour-only enquiries all need different responses",
            "You're working alone in customers' homes — taking calls mid-job looks unprofessional"
        ],
        conversation: [
            { role: 'agent', text: "Hello, Total Flooring Solutions. How can I help you?" },
            { role: 'caller', name: 'Helen', text: "Hi, I need carpet fitted in three bedrooms. I've already bought the carpet from Carpetright." },
            { role: 'agent', text: "No problem at all. We do labour-only fitting. Do you know the approximate room sizes?" },
            { role: 'caller', name: 'Helen', text: "They're standard bedrooms, about 3 by 4 metres each." },
            { role: 'agent', text: "Perfect. When are you looking to have this done?" },
            { role: 'caller', name: 'Helen', text: "As soon as possible, ideally this week or next." },
            { role: 'agent', text: "I'll check availability and get back to you today. Can I take your name, postcode, and contact number?" },
            { role: 'caller', name: 'Helen', text: "Helen Morris, GL1 5PP, 07766 888999." },
            { role: 'agent', text: "Thanks Helen. You'll get a call back this afternoon with a quote and available dates. Underlay included or do you have that already?" },
            { role: 'caller', name: 'Helen', text: "I need underlay too." },
            { role: 'agent', text: "Noted. Speak to you soon!" }
        ],
        roiJobValue: '£400-1,200',
        roiDescription: "Average carpet fitting (3-bed house): £600-1,200. Vinyl/LVT fitting: £400-900. Stairs and landing: £300-600. High volume, quick turnaround. Missing 3-5 jobs per week = £2,400-6,000 lost monthly.",
        faqs: [
            { q: "Can it differentiate between supply-and-fit and labour-only?", a: "Yes. It asks whether the customer has already purchased flooring or needs you to supply everything." },
            { q: "Does it handle vinyl, laminate, and LVT as well as carpet?", a: "Absolutely. It captures the flooring type and room details for accurate quoting." },
            { q: "What about furniture moving and old carpet removal?", a: "It asks whether these services are required so your quote includes everything the customer needs." }
        ]
    }
};
