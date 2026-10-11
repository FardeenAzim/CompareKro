import CategoryCard from "./CategoryCard";
import {
  CreditCard,
  Banknote,
  ShieldCheck,
  Landmark,
  ChartNoAxesCombined,
  TrendingUp
} from "lucide-react";

function ProductCategories() {
const categories = [
    {
        name: "Credit Cards",
        description: "Compare cards, rewards, cashback, and fees.",
        icon: CreditCard,
        link: "/credit-cards"
    },
    {
        name: "Personal Loans",
        description: "Find the best personal loan options for your needs.",
        icon: Banknote,
        link: "/personal-loans"
    },
    {
        name: "Insurance",
        description: "Compare insurance policies and find the right coverage for you.",
        icon: ShieldCheck,
        link: "/insurance"
    },
    {
        name: "Bank Accounts",
        description: "Explore different bank account options and their features.",
        icon: Landmark,
        link: "/bank-accounts"
    },
    {
        name: "Mutual Funds",
        description: "Invest in diversified portfolios with mutual funds.",
        icon: ChartNoAxesCombined,
        link: "/mutual-funds"
    },
    {
        name: "Investments",
        description: "Explore various investment opportunities and strategies.",
        icon: TrendingUp,
        link: "/investments"
    }
];
    return (
        <section className="mx-auto max-w-6xl px-6 py-4">
            <h1 className="text-3xl font-bold">Explore Financial Products</h1>
            <p className="text-gray-600 text-xl font-semibold">Compare the products that matter to you.</p>
            <div className="grid grid-cols-3 gap-6 mt-6">
                {categories.map((category) => (
                    <CategoryCard key={category.name} 
                    name={category.name}
                    icon={category.icon}
                    description={category.description}
                    link={category.link}
                    />
                ))}
            </div>
        </section>
    )
}

export default ProductCategories;