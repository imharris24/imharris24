import PrivacyHero from "./privacy-hero"
import PrivacyContent from "./privacy-content"

export const metadata = {
    title: "Privacy Policy - iMarketing",
    description: "Privacy policy and data protection information for iMarketing.",
}

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen px-4 md:px-6 lg:px-8 xl:px-12 2x.">
            <PrivacyHero />
            <PrivacyContent />
        </main>
    )
}
