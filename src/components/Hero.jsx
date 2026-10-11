import ProductPreview from "./ProductPreview";

function Hero(){
const products = [
    { 
       name: "HDFC Credit Card",
       type: "Credit Card",
       desc: "Get the best credit card with amazing rewards and benefits.",
       rate: 5.5,
       fee: 500,
    },
    {
        name: "ICICI Credit Card",
        type: "Credit Card",
        desc: "Enjoy Exclusive Offers and Cashbacks with ICICI Credit Cards.",
        rate: 5.8,
        fee: 600,
    },
    {
        name: "SBI Credit Card",
        type: "Credit Card",
        desc: "Experience the power of SBI Credit Cards with exciting features.",
        rate: 4.2,
        fee: 400,
    },
]

    return (

        <section className="flex items-starts justify-between px-12 py-16">

            <div className="w-5/12 space-y-6">
                <span className="inline-block rounded-full bg-purple-100 px-4 py-2 text-sm 
                font-medium text-purple-700">Compare Financial Products</span>
                <h1 className="text-5xl font-bold leading-tight">Find the Best Financial
                     Products for You</h1>
                <p className="text-lg text-gray-600 leading-relaxed">Compare credit cards,
                     loans, insurance, banks, Mutual Funds and
                    more to find the right financial product for you.</p>
                <button className="rounded-full bg-purple-600 px-6 py-3 font-semibold
                 text-white hover:bg-purple-700" type="button">Get Started</button>

                <button className="rounded-full border-2 border-purple-200 bg-white px-6 py-3 
                font-semibold text-black hover:bg-white mx-4" type="button">Compare</button>
            </div>

            <div className="w-7/12 flex flex-col items-center gap-4">
                {products.map((product) => (
                <ProductPreview 
                   key={product.name} 
                   name={product.name}
                   type={product.type}
                   product={product}
                   desc={product.desc}
                   rate={product.rate}
                   fee={product.fee}
                   />
                ))}
            </div>
        </section>    
    );
}

export default Hero;