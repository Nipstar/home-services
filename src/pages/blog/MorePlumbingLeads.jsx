import BlogTemplate from '../../components/layout/BlogTemplate';
import { blogPosts } from '../../data/blog';

export default function MorePlumbingLeads() {
    const post = blogPosts.find(p => p.id === 'more-plumbing-leads');

    return (
        <BlogTemplate post={post}>
            <p>If you're a plumber in the UK, you already know the drill. You sign up to a lead generation platform, pay a monthly fee, and then pay £25-£40 for the privilege of calling a customer... only to find out they've already booked the bloke who rang them 30 seconds ago.</p>

            <p>It's a race to the bottom, and it burns through your marketing budget. Here are three proven ways to get more plumbing leads without fighting five other firms for the same job.</p>

            <h2>1. Dominate Your Local Maps (Google Business Profile)</h2>
            <p>When someone has a burst pipe, they don't scroll through 10 pages of search results. They Google "plumber near me" and call the first business that pops up in the map pack that has decent reviews. Your Google Business Profile (GBP) is free. Fill it out completely, add photos of your work weekly, and gently badger every happy customer for a 5-star review.</p>

            <h2>2. Stop Sending Traffic to a 'Dead' Website</h2>
            <p>If you're paying for Google Ads to generate leads, where are you sending them? If they land on a website from 2012 that just has a mobile number and a contact form, they will bounce.</p>
            <p>You need a clean, mobile-optimised landing page that clearly states:</p>
            <ul>
                <li>Your exact service area</li>
                <li>That you offer emergency callouts (if you do)</li>
                <li>Your Gas Safe registration number</li>
            </ul>

            <h2>3. Answer the Phone Immediately</h2>
            <p>This is the most critical step that plumbers get wrong. You can be the best marketer in your county, but if you don't answer the phone when it rings, you get zero leads.</p>
            <p>Plumbing emergencies are time-sensitive. If a customer gets your voicemail, 85% of them will hang up and ring the next plumber. If you are under a sink and can't answer, you are actively losing the leads you paid to generate.</p>
            <p>This is where an AI Voice Agent changes the game. It answers instantly, understands the customer's plumbing issue, books the job, and texts you the details. You capture 100% of your leads while staying focused on the job at hand.</p>
        </BlogTemplate>
    );
}
