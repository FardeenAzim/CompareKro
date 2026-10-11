import CreditCard from "../components/CreditCard";
import { useState } from "react";

function CreditCards() {

const [search, setSearch] = useState("");
const [feeFilter, setFeeFilter] = useState("all");
const cards = [
    {
        name: "HDFC Credit Card",
        description: "Get rewarding benefits, cashback, and offers for your everyday spending.",
        interestRate: "5.5%",
        annualFee: 500,
        reward: "2% Cashback"
    },
    {
        name: "ICICI Credit Card",
        description: "Enjoy exclusive offers, cashback, and flexible benefits on your purchases.",
        interestRate: "5.8%",
        annualFee: 600,
        reward: "3% Cashback"
    },
    {
        name: "SBI Credit Card",
        description: "Enjoy exciting rewards and useful benefits for your everyday expenses.",
        interestRate: "5.2%",
        annualFee: 400,
        reward: "2.5% Cashback"
    }
];

const filteredCards = cards.filter((card) => {
    const matchesSearch = card.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesFee =
        feeFilter === "all" || card.annualFee <= Number(feeFilter);

    return matchesSearch && matchesFee;
});

    return (
    <main className="mx-auto max-w-6xl px-6 py-12">

        <div className="max-w-3xl">
            <p className="text-sm font-semibold text-purple-600">
                Credit Cards
            </p>

            <h1 className="mt-3 text-4xl font-bold text-gray-900">
                Find the Right Credit Card for You
            </h1>

            <p className="mt-4 text-lg leading-8 text-gray-600">
                Compare credit cards based on interest rates, annual fees,
                rewards, and benefits to find the option that fits your needs.
            </p>
        </div>

        <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row">
                <input
                    type="text"
                    placeholder="Search credit cards..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-full border border-gray-300 px-5 py-3 outline-none
                    transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100 md:w-80"
                />

                <select
                    value={feeFilter}
                    onChange={(e) => setFeeFilter(e.target.value)}
                    className="rounded-full border border-gray-300 px-5 py-3 outline-none
                    focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                >
                    <option value="all">All Annual Fees</option>
                    <option value="500">₹500 or less</option>
                </select>

            </div>
        </section>

        <section className="mt-10">

        <h2 className="text-2xl font-bold text-gray-900">
            Popular Credit Cards
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCards.map((card) => (
                <CreditCard
                    key={card.name}
                    name={card.name}
                    description={card.description}
                    interestRate={card.interestRate}
                    annualFee={card.annualFee}
                    reward={card.reward}
                />
            ))}
        </div>
        
    </section>

    </main>
    );
}

export default CreditCards;