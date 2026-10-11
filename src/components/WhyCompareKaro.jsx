import BenefitCard from "./BenefitCard";

function WhyCompareKaro() {

const benefits = [
    {
        title: "Compare Easily",
        description: "Compare important features, rates, fees, and benefits in one place."
    },
    {
        title: "Save Time",
        description: "Find useful financial information without visiting multiple websites."
    },
    {
        title: "Understand the Details",
        description: "See important product information clearly before making a decision."
    },
    {
        title: "Choose with Confidence",
        description: "Make better-informed financial decisions with transparent comparisons."
    }
];
    return(
        <section className="mx-auto max-w-6xl px-6 py-10">
            <h2 className="text-3xl font-bold mb-3">Why CompareKaro?</h2>
            <p className="text-xl font-semibold">Make smarter financial decisions with simple and transparent comparisons.</p>
            <div className="grid grid-cols-2 gap-6 mt-2">
                {benefits.map((benefit) => (
                    <BenefitCard key={benefit.title}
                        title={benefit.title}
                        description={benefit.description}
                    />
                ))} 
            </div>
        </section>
    )
}

export default WhyCompareKaro;