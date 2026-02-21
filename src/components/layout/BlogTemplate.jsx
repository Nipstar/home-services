import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';
import SectionWrapper from '../ui/SectionWrapper';

export default function BlogTemplate({ post, children }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": post.date,
        "author": {
            "@type": "Person",
            "name": post.author
        }
    };

    return (
        <>
            <SEOHead
                title={`${post.title} | AI Voice Agents for Home Services`}
                description={post.excerpt}
                path={`/blog/${post.slug}`}
                ogType="article"
                schema={schema}
            />

            <article>
                {/* Article Header */}
                <SectionWrapper bg="soft" className="pt-24 lg:pt-32 pb-16 text-center border-b border-border">
                    <div className="max-w-4xl mx-auto">
                        <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-dark transition-colors font-semibold mb-8">
                            &larr; Back to all articles
                        </Link>

                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="text-sm font-bold px-3 py-1 bg-white border border-border text-dark rounded-full tracking-wide uppercase">
                                {post.category}
                            </span>
                            <span className="text-sm text-text-light">{post.readTime}</span>
                            <span className="text-sm text-text-light">&bull;</span>
                            <span className="text-sm text-text-light">
                                {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-dark mb-8 leading-tight">
                            {post.title}
                        </h1>
                    </div>
                </SectionWrapper>

                {/* Article Content */}
                <SectionWrapper bg="white">
                    <div className="max-w-3xl mx-auto prose prose-lg prose-indigo prose-headings:font-display prose-headings:text-dark prose-p:text-text prose-a:text-primary">
                        {children}
                    </div>

                    {/* CTA Box inside article */}
                    <div className="max-w-3xl mx-auto mt-16 bg-surface-accent border border-primary/20 p-8 rounded-2xl text-center">
                        <h3 className="text-2xl font-display text-dark mb-4">You did the hard work to get the phone ringing. Let AI answer it.</h3>
                        <p className="text-text mb-6">Stop missing the leads you just learned how to generate. Try our AI Voice Agent free for 7 days.</p>
                        <Link to="/pricing" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-dark transition-colors">
                            See Pricing & Try Free
                        </Link>
                    </div>
                </SectionWrapper>
            </article>
        </>
    );
}
