import { useState } from "react";
import PersonalLoan from "../components/PersonalLoan";

function PersonalLoans() {
  const [search, setSearch] = useState("");
  const [interestRate, setInterestRate] = useState("all");
  const [selectedLoans, setSelectedLoans] = useState([]);

  const loans = [
    {
      name: "HDFC Personal Loan",
      interestRate: 10.2,
      processingFee: 499,
      loanAmount: "₹50,000 - ₹20,00,000",
    },
    {
      name: "ICICI Personal Loan",
      interestRate: 12.5,
      processingFee: 599,
      loanAmount: "₹50,000 - ₹15,00,000",
    },
    {
      name: "Axis Bank Personal Loan",
      interestRate: 9.8,
      processingFee: 399,
      loanAmount: "₹50,000 - ₹10,00,000",
    },
    {
      name: "SBI Personal Loan",
      interestRate: 15.5,
      processingFee: 450,
      loanAmount: "₹50,000 - ₹25,00,000",
    },
  ];

  const filteredLoans = loans.filter((loan) => {
    const matchesSearch = loan.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesRate =
      interestRate === "all" || loan.interestRate <= Number(interestRate);

    return matchesSearch && matchesRate;
  });

  return (
    <main>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-purple-600 font-bold">Personal Loans</p>
        <h1 className="text-5xl font-bold">
          Find the Right Personal Loan for You
        </h1>
        <p className="mt-2 text-xl text-gray-600">
          Compare personal loans based on interest rates, loan amounts,
          processing fees, and repayment options to find the right loan for you.
        </p>
      </div>

      <section>
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search Personal Loans ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-full border border-gray-300 px-8 py-3 outline-none
                            focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
          />

          <select
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="rounded-full border border-gray-300 px-5 py-3  outline-none"
          >
            <option value="all">All</option>
            <option value="15">15% or Less</option>
            <option value="12">12% or Less</option>
            <option value="10">10% or Less</option>
          </select>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">
          {filteredLoans.map((loan) => (
            <PersonalLoan
              key={loan.name}
              loan={loan}
              name={loan.name}
              interestRate={loan.interestRate}
              processingFee={loan.processingFee}
              loanAmount={loan.loanAmount}
              selectedLoans={selectedLoans}
              setSelectedLoans={setSelectedLoans}
            />
          ))}
        </div>

        {selectedLoans.length > 0 && (
          <div className="mx-auto mt-8 max-w-6xl px-6">
            <h2 className="text-2xl font-bold">Selected Loans</h2>
            <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2 mt-4">
              {selectedLoans.map((loan) => (
                <div
                  className="shadow-sm transition hover:-translate-y-1 hover:shadow-lg
                       my-4 border border-gray-500 rounded-2xl p-6"
                  key={loan.name}
                >
                  <p className="text-xl font-bold ">{loan.name}</p>
                  <p className="text-xl font-semibold ">
                    Interest Rate: {loan.interestRate}%
                  </p>
                  <p className="text-xl font-semibold ">
                    Processing Fee: ₹{loan.processingFee}
                  </p>
                  <p className="text-xl font-semibold ">
                    Loan Amount: {loan.loanAmount}
                  </p>
                  <button
                    onClick={() => {
                      setSelectedLoans(
                        selectedLoans.filter(
                          (selectedLoan) => selectedLoan.name != loan.name,
                        ),
                      );
                    }}
                    className="bg-red-500 px-6 my-4 py-2 text-white rounded
                     rounded-full"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {selectedLoans.length === 2 && (
              <div className="mt-8 mb-10 w-full overflow-x-auto">
                <button
                  onClick={() => setSelectedLoans([])}
                  className="bg-purple-500 px-6 my-4 py-2 text-white rounded-lg bg-red-500
                 px-4 py-2 text-white hover:bg-red-600"
                >
                  Clear Comparison
                </button>
                <h2 className="text-2xl font-bold">Comparison Table</h2>
                <table className="mt-8 w-full border-collapse border mb-10">
                  <thead>
                    <tr className="bg-gray-200 text-xl">
                      <th className="border p-4 font-bold">Feature</th>
                      <th className="border p-4 font-bold">
                        {selectedLoans[0].name}
                      </th>
                      <th className="border p-4 font-bold">
                        {selectedLoans[1].name}
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="border p-4 font-bold">Interest Rate</td>
                      <td className="border p-4">
                        {selectedLoans[0].interestRate}%
                      </td>
                      <td className="border p-4">
                        {selectedLoans[1].interestRate}%
                      </td>
                    </tr>

                    <tr>
                      <td className="border p-4 font-bold">Processing Fee</td>
                      <td className="border p-4">
                        &#8377;{selectedLoans[0].processingFee}
                      </td>
                      <td className="border p-4">
                        &#8377;{selectedLoans[1].processingFee}
                      </td>
                    </tr>

                    <tr className="bg-purple-100">
                      <td className="border p-4 font-bold">Loan Amount</td>
                      <td className="border p-4">
                        {selectedLoans[0].loanAmount}
                      </td>
                      <td className="border p-4">
                        {selectedLoans[1].loanAmount}
                      </td>
                    </tr>
                  </tbody>
                </table>
                ```
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
export default PersonalLoans;
