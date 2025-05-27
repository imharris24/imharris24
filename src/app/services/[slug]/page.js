import ServiceHero from "./service-hero";
import ServiceFeatures from "./service-features";
import ServiceProcess from "./service-process";
import ServiceResults from "./service-result";
import ServicesCta from "../services-cta";

// 👇 Page component
export default function ServicePage({ params }) {
    return (
        <main className="min-h-screen px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <ServiceHero slug={params.slug} />
            <ServiceFeatures slug={params.slug} />
            <ServiceProcess slug={params.slug} />
            <ServiceResults slug={params.slug} />
            <ServicesCta />
        </main>
    );
}
