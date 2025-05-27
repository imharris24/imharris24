import QuoteHero from "./quote-hero"
import QuoteForm from "./quote-form"

export default function GetQuotePage() {
    return (
        <main className="min-h-screen px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <QuoteHero />
            <QuoteForm />
        </main>
    )
}
