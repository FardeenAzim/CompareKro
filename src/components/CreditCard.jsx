function CreditCard(props) {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm
        transition hover:-translate-y-1 hover:shadow-lg my-4">

            <p className="text-sm font-semibold text-purple-600">
                Credit Card
            </p>

            <h3 className="mt-2 text-2xl font-bold text-gray-900">
                {props.name}
            </h3>

            <p className="mt-3 text-gray-600">
                {props.description}
            </p>

            <div className="mt-6 grid grid-cols-3 gap-4">

                <div>
                    <p className="text-sm text-gray-500">
                        Interest Rate
                    </p>
                    <span className="font-bold text-gray-900">
                        {props.interestRate}
                    </span>
                </div>

                <div>
                    <p className="text-sm text-gray-500">
                        Annual Fee
                    </p>
                    <span className="font-bold text-gray-900">
                        ₹{props.annualFee}
                    </span>
                </div>

                <div>
                    <p className="text-sm text-gray-500">
                        Rewards
                    </p>
                    <span className="font-bold text-gray-900">
                        {props.reward}
                    </span>
                </div>

            </div>

            <button className="mt-6 w-full rounded-full bg-purple-600 px-5 py-3
            font-semibold text-white transition hover:bg-purple-700">
                Compare
            </button>

        </div>
    );
}

export default CreditCard;