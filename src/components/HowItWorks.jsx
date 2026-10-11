import StepCard from "./StepCard"

function HowItWork() {
const steps = [
    {
        number: "01",
        title: "Choose a Product",
        description: "Select the financial product you want to compare."
    },
    {
        number: "02",
        title: "Compare Options",
        description: "Compare rates, fees, benefits, and important features."
    },
    {
        number: "03",
        title: "Make your Decision",
        description: "Choose the option that best fits your financial needs."
    }
]
    return(
        <section className="mx-auto max-w-6xl px-6 py-10">
            <h2 className="text-3xl font-bold">How CompareKaro Works?</h2>
            <p className="text-xl text-gray-600">Compare financial products in three simple steps.</p>
            <div className="grid grid-cols-3 gap-6 mt-2">
                {steps.map((step) => (
                    <StepCard key={step.number}
                    number={step.number}
                    title={step.title}
                    description={step.description}
                    />
                ))}
            </div>

        </section>
    )
} 
export default HowItWork