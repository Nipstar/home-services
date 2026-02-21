import { Link } from 'react-router-dom';
import SEOHead from '../../components/layout/SEOHead';
import SectionWrapper from '../../components/ui/SectionWrapper';
import OverlineTag from '../../components/ui/OverlineTag';
import { blogPosts } from '../../data/blog';

export default function BlogIndex() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "headline": "Business Advice for UK Tradesmen",
        "description": "Practical guides, marketing tips, and technology advice for independent UK trades businesses."
    };

    return (
        <>
            <SEOHead
                title="Trade Business Advice & Marketing Guides | AI Voice Agents"
                description="Practical guides on getting more leads, SEO for tradesmen, Checkatrade reviews, and growing your UK home services business without burning out."
                canonicalUrl="/blog"
                schema={schema}
            />

            {/* Hero */}
            <SectionWrapper bg="soft" className="pt-24 lg:pt-32 pb-16 text-center border-b border-border">
                <div className="max-w-3xl mx-auto">
                    <OverlineTag>TRADE BUSINESS ADVICE</OverlineTag>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-dark mb-6 leading-tight">
                        The Tradesman's Playbook
                    </h1>
                    <p className="text-xl text-text leading-relaxed">
                        No corporate fluff. Just proven strategies on marketing, lead generation, and scaling your UK trade business without working 80-hour weeks.
                    </p>
                </div>
            </SectionWrapper>

            {/* Blog Grid */}
            <SectionWrapper bg="white">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.id}
                            to={`/blog/${post.slug}`}
                            className="group flex flex-col h-full bg-white border border-border rounded-2xl p-6 hover:-translate-y-2 hover:shadow-card-hover transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-xs font-bold px-3 py-1 bg-surface-accent text-primary rounded-full tracking-wide uppercase">
                                    {post.category}
                                </span>
                                <span className="text-sm text-text-light">{post.readTime}</span>
                            </div>

                            <h2 className="text-2xl font-display text-dark mb-3 group-hover:text-primary transition-colors leading-snug">
                                {post.title}
                            </h2>

                            <p className="text-text mb-6 flex-grow leading-relaxed">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between pt-6 border-t border-border mt-auto">
                                <div className="text-sm text-text-light font-medium">
                                    {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                                </div>
                                <div className="text-primary font-semibold group-hover:translate-x-1 transition-transform">
                                    Read article &rarr;
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </SectionWrapper>
        </>
    );
}
