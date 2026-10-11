function ProductPreview(props) {
    return (
        // Main container for the product Preview Card
        <div className="w-80 rounded-2xl bg-white p-6 shadow-lg space-y-3">
            
            <span className="inline-block rounded-full bg-purple-100 px-3 
            py-1 text-xs font-semibold text-purple-700">{props.type}</span>   

            <h1 className="text-xl font-bold">{props.name}</h1>

            <p>{props.desc}</p>

            {/* <div className="py-2 px-1 text-lg font-medium text-gray-700">Interest Rate:
                 <span className="ml-2 font-bold text-xl">
              {props.rate}%</span></div>
            
            <div>Annual Fee: ₹<span>{props.fee}</span></div> */}
            <div className="flex justify-between">
                <div>
                    <p className="text-sm text-gray-500">Interest Rate</p>
                    <span className="text-2xl font-bold">{props.rate}%</span>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Annual Fee</p>
                    <span className="text-2xl font-bold">₹{props.fee}</span>
                </div>
            </div>

            <button className="bg-purple-600 text-white px-4 py-2 rounded-full 
              hover:bg-purple-700 font-seminold"> Compare </button>
        </div>
    )
} 

export default ProductPreview;