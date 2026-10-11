import ComparisonCard from "./ComparisonCard.jsx"; 
 
function FeaturedComparisons() { 
const products = [ 
    { 
        name: "HDFC Credit Card", 
        type: "Credit Card", 
        interestRate: "5.5%", 
        annualFee: "₹500", 
        reward: "2% Cashback" 
    }, 
    { 
        name: "ICICI Credit Card", 
        type: "Credit Card", 
        interestRate: "5.8%", 
        annualFee: "₹600", 
        reward: "3% Cashback" 
    }, 
    { 
        name: "SBI Credit Card", 
        type: "Credit Card", 
        interestRate: "5.2%", 
        annualFee: "₹400", 
        reward: "2.5% Cashback" 
    } 
]; 
    return( 
        <section className="mx-auto max-w-6xl px-6 py-10"> 
            <h2 className="text-3xl font-bold"> 
                Featured Comparisons 
            </h2> 
 
            <p className="text-xl text-gray-600"> 
                Compare popular financial products and find what suits you best. 
            </p> 
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"> 
                {products.map((product) => ( 
                    <ComparisonCard key={product.name} 
                    name={product.name} 
                    type={product.type} 
                    interestRate={product.interestRate} 
                    annualFee={product.annualFee} 
                    reward={product.reward} 
                    /> 
                ))} 
                
            </div> 
        </section> 
    ) 
} 
export default FeaturedComparisons 