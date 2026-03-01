import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/layout/ScrollToTop';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MobileCTA from './components/layout/MobileCTA';

// Core Pages
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import Compare from './pages/Compare';
import MissedCallsStats from './pages/MissedCallsStats';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import GetStarted from './pages/GetStarted';
import OrderConfirmed from './pages/OrderConfirmed';

// Legal Pages
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';

// Trades Hub & Pages
import AllTrades from './pages/trades/AllTrades';
import Plumbers from './pages/trades/Plumbers';
import Electricians from './pages/trades/Electricians';
import HeatingEngineers from './pages/trades/HeatingEngineers';
import Builders from './pages/trades/Builders';
import Locksmiths from './pages/trades/Locksmiths';
import Roofers from './pages/trades/Roofers';
import Cleaners from './pages/trades/Cleaners';
import Landscapers from './pages/trades/Landscapers';
import PaintersDecorators from './pages/trades/PaintersDecorators';
import Handymen from './pages/trades/Handymen';
import PestControl from './pages/trades/PestControl';
import DrainageEngineers from './pages/trades/DrainageEngineers';
import BathroomFitters from './pages/trades/BathroomFitters';
import WindowFitters from './pages/trades/WindowFitters';
import CarpetFitters from './pages/trades/CarpetFitters';

// Problem Pages
import AfterHoursCalls from './pages/problem/AfterHoursCalls';
import VoicemailDead from './pages/problem/VoicemailDead';
import CantAnswerOnJob from './pages/problem/CantAnswerOnJob';
import TooBusyToAnswer from './pages/problem/TooBusyToAnswer';
import CustomerExpectsInstant from './pages/problem/CustomerExpectsInstant';
import WeekendEmergencyCalls from './pages/problem/WeekendEmergencyCalls';
import PhoneTag from './pages/problem/PhoneTag';
import CheckatradeLeadsMissing from './pages/problem/CheckatradeLeadsMissing';

// Compare Pages
import AIvsVirtualReceptionist from './pages/compare/AIvsVirtualReceptionist';
import AIvsVoicemail from './pages/compare/AIvsVoicemail';
import AnsweringServicePrices from './pages/compare/AnsweringServicePrices';
import BestAnsweringServiceTradesmen from './pages/compare/BestAnsweringServiceTradesmen';

// Blog Pages
import BlogIndex from './pages/blog/BlogIndex';
import MorePlumbingLeads from './pages/blog/MorePlumbingLeads';
import GoogleBusinessProfile from './pages/blog/GoogleBusinessProfile';
import CheckatradeVsMyBuilder from './pages/blog/CheckatradeVsMyBuilder';
import BusiestMonths from './pages/blog/BusiestMonths';
import GrowTradeBusinessNoStaff from './pages/blog/GrowTradeBusinessNoStaff';

// Layout wrapper for standard pages (with header, footer, mobile CTA)
function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <MobileCTA />
    </div>
  );
}

export function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Standalone pages — own layout, no nav/footer */}
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/order-confirmed" element={<OrderConfirmed />} />

        {/* All standard pages wrapped in MainLayout */}
        <Route path="*" element={
          <MainLayout>
            <Routes>
              {/* Core Routing */}
              <Route path="/" element={<Home />} />
              <Route path="/how-ai-voice-agents-work" element={<HowItWorks />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/ai-voice-agent-vs-call-centre" element={<Compare />} />
              <Route path="/missed-calls-costing-tradesmen-money" element={<MissedCallsStats />} />
              <Route path="/trades" element={<AllTrades />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />

              {/* Trade Routing */}
              <Route path="/ai-voice-agent-for-plumbers" element={<Plumbers />} />
              <Route path="/ai-voice-agent-for-electricians" element={<Electricians />} />
              <Route path="/ai-voice-agent-for-heating-engineers" element={<HeatingEngineers />} />
              <Route path="/ai-voice-agent-for-builders" element={<Builders />} />
              <Route path="/ai-voice-agent-for-locksmiths" element={<Locksmiths />} />
              <Route path="/ai-voice-agent-for-roofers" element={<Roofers />} />
              <Route path="/ai-voice-agent-for-cleaners" element={<Cleaners />} />
              <Route path="/ai-voice-agent-for-landscapers" element={<Landscapers />} />
              <Route path="/ai-voice-agent-for-painters-decorators" element={<PaintersDecorators />} />
              <Route path="/ai-voice-agent-for-handymen" element={<Handymen />} />
              <Route path="/ai-voice-agent-for-pest-control" element={<PestControl />} />
              <Route path="/ai-voice-agent-for-drainage-engineers" element={<DrainageEngineers />} />
              <Route path="/ai-voice-agent-for-bathroom-fitters" element={<BathroomFitters />} />
              <Route path="/ai-voice-agent-for-window-fitters" element={<WindowFitters />} />
              <Route path="/ai-voice-agent-for-carpet-fitters" element={<CarpetFitters />} />

              {/* Problem Routing */}
              <Route path="/after-hours-calls-tradesmen" element={<AfterHoursCalls />} />
              <Route path="/voicemail-killing-your-trade-business" element={<VoicemailDead />} />
              <Route path="/cant-answer-phone-on-the-job" element={<CantAnswerOnJob />} />
              <Route path="/too-busy-to-answer-phone-tradesman" element={<TooBusyToAnswer />} />
              <Route path="/customer-expects-instant-response" element={<CustomerExpectsInstant />} />
              <Route path="/weekend-emergency-calls-tradesmen" element={<WeekendEmergencyCalls />} />
              <Route path="/phone-tag-losing-customers" element={<PhoneTag />} />
              <Route path="/checkatrade-leads-missing-calls" element={<CheckatradeLeadsMissing />} />

              {/* Compare Routing */}
              <Route path="/compare/ai-vs-virtual-receptionist" element={<AIvsVirtualReceptionist />} />
              <Route path="/compare/ai-vs-voicemail" element={<AIvsVoicemail />} />
              <Route path="/compare/answering-service-prices" element={<AnsweringServicePrices />} />
              <Route path="/compare/best-answering-service-tradesmen" element={<BestAnsweringServiceTradesmen />} />

              {/* Blog Routing */}
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/how-to-get-more-plumbing-leads-uk" element={<MorePlumbingLeads />} />
              <Route path="/blog/google-business-profile-setup-tradesmen" element={<GoogleBusinessProfile />} />
              <Route path="/blog/checkatrade-vs-mybuilder-vs-rated-people" element={<CheckatradeVsMyBuilder />} />
              <Route path="/blog/busiest-months-uk-trades" element={<BusiestMonths />} />
              <Route path="/blog/grow-trade-business-no-staff" element={<GrowTradeBusinessNoStaff />} />

              {/* Fallback 404 */}
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MainLayout>
        } />
      </Routes>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
