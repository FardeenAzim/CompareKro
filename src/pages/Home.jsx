import Hero from "../components/Hero";
import ProductCategories from "../components/ProductCategories";
import WhyCompareKaro from "../components/WhyCompareKaro";
import HowItWork from "../components/HowItWorks";
import FeaturedComparisons from "../components/FeaturedComparisons";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Hero />
            <ProductCategories />
            <WhyCompareKaro />
            <HowItWork />
            <FeaturedComparisons />
            <CTA />
            <Footer />
        </>
    );
}

export default Home;