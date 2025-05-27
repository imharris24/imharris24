import TermsHero from "./terms-hero"
import TermsContent from "./terms-content"

export const metadata = {
    title: "Terms & Conditions - iMarketing",
    description: "Terms and conditions for iMarketing digital marketing services.",
}

export default function TermsPage() {
    return (
        <main className="min-h-screen px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <TermsHero />
            <TermsContent />
        </main>
    )
}
