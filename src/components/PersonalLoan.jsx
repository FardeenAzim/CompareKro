function PersonalLoan(props) {
    return (
        <div className="rounded-2xl border border-gray-400 bg-white p-6 shadow-sm
        transition hover:-translate-y-1 hover:shadow-lg my-4">
            <p className="text-purple-600 font-bold">Loans</p>
        
            <h2 className="text-xl font-bold">{props.name}</h2>
            <p> Interest Rate : 
                <span className="text-lg font-semibold"> {props.interestRate}%</span>
            </p> 
            <p> Processing Fee :
                <span className="text-gray-600 font-bold"> ₹{props.processingFee}</span>
            </p>
            <p>Loan Amount: {props.loanAmount}</p>
            <button className="bg-purple-600 text-white px-8 py-2 my-4 rounded-full"
              onClick={() => {
                const alreadySelected = props.selectedLoans.some(
                    (loan) => loan.name === props.loan.name
                    );
                if (props.selectedLoans.length < 2 && !alreadySelected) {
                    props.setSelectedLoans ([ ...props.selectedLoans, props.loan ]);
                }
            }}>
                Compare
            </button>

            
        </div>
    )
}

export default PersonalLoan;