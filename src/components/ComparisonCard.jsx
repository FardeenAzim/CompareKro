function ComparisonCard(props) {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm
            transition hover:-translate-y-1 hover:shadow-lg mt-6 p-4">
            <p className="mt-2 text-sm font-medium text-purple-600">{props.type}</p>

            <h3 className="text-xl font-bold text-gray-900">{props.name}</h3>

            <div>
        <p className="text-sm text-gray-500">Interest Rate</p>
        <span className="text-lg font-bold text-gray-900">
            {props.interestRate}
        </span>
        </div>

        <div>
            <p className="text-sm text-gray-500">Annual Fee</p>
            <span className="text-lg font-bold text-gray-900">
                {props.annualFee}
            </span>
        </div>

        <div>
            <p className="text-sm text-gray-500">Rewards</p>
            <span className="text-lg font-bold text-gray-900">
                {props.reward}
            </span>
        </div>


        <button className="mt-6 w-full rounded-full bg-purple-600 px-5 py-3
         font-semibold text-white transition hover:bg-purple-700">
            Compare
        </button>
        </div>
    );
}

export default ComparisonCard;