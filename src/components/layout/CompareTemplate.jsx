import SEOHead from './SEOHead';
import SectionWrapper from '../ui/SectionWrapper';
import OverlineTag from '../ui/OverlineTag';
import Button from '../ui/Button';

export default function CompareTemplate({
    title,
    description,
    canonicalUrl,
    overline,
    h1,
    introText,
    tableHeaders,
    tableRows,
    conclusionTitle,
    conclusionText1,
    conclusionText2
}) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": h1,
        "description": description
    };

    return (
        <>
            <SEOHead
                title={title}
                description={description}
                path={canonicalUrl}
                ogType="article"
                schema={schema}
            />

            {/* Hero Section */}
            <SectionWrapper bg="soft" className="pt-10 md:pt-16 pb-16">
                <div className="text-center max-w-4xl mx-auto">
                    <OverlineTag>{overline}</OverlineTag>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-dark mb-6 leading-tight">
                        {h1}
                    </h1>
                    <p className="text-lg text-text leading-relaxed">
                        {introText}
                    </p>
                </div>
            </SectionWrapper>

            {/* Comparison Table */}
            <SectionWrapper bg="white">
                <div className="max-w-6xl mx-auto overflow-x-auto rounded-xl border border-border shadow-sm">
                    <table className="w-full min-w-[800px] border-collapse bg-white">
                        <thead className="bg-surface-soft">
                            <tr className="border-b border-border text-left">
                                {tableHeaders.map((header, index) => (
                                    <th
                                        key={index}
                                        className={`py-6 px-6 font-display text-xl ${index === 1 ? 'text-primary' : 'text-dark'
                                            } ${index === 0 ? 'w-1/4' : ''}`}
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="text-[15px] divide-y divide-border">
                            {tableRows.map((row, rowIndex) => (
                                <tr key={rowIndex} className="hover:bg-surface-soft transition-colors group">
                                    <td className="py-5 px-6 font-semibold text-dark">{row.feature}</td>
                                    <td className="py-5 px-6 font-medium text-dark flex items-center gap-2">
                                        <span className="text-success text-lg flex-shrink-0">✓</span> {row.ai}
                                    </td>
                                    <td className="py-5 px-6 text-text">{row.competitor1}</td>
                                    {row.competitor2 && (
                                        <td className="py-5 px-6 text-text">{row.competitor2}</td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Conclusion Box */}
                {conclusionTitle && (
                    <div className="max-w-3xl mx-auto mt-16 p-8 bg-surface-soft border border-border rounded-2xl">
                        <h3 className="font-display text-2xl text-dark mb-4">{conclusionTitle}</h3>
                        <p className="text-text leading-relaxed">
                            {conclusionText1}
                        </p>
                        {conclusionText2 && (
                            <p className="text-text leading-relaxed mt-4">
                                {conclusionText2}
                            </p>
                        )}
                    </div>
                )}
            </SectionWrapper>

            {/* CTA */}
            <SectionWrapper bg="gradient" className="text-center">
                <h2 className="text-white font-display text-4xl mb-8">Ready up upgrade your answering service?</h2>
                <div className="flex justify-center gap-4">
                    <Button href="/pricing" variant="secondary-light" className="bg-white !text-primary hover:!bg-white/90">View Pricing</Button>
                    <Button href="https://cal.com/antekautomation" variant="secondary">Book Demo</Button>
                </div>
            </SectionWrapper>
        </>
    );
}
