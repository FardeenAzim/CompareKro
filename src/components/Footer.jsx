function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="mx-auto max-w-6xl px-6 py-10">

                <h2 className="text-2xl font-bold">
                    CompareKaro
                </h2>

                <p className="mt-2 text-gray-400">
                    Compare financial products and make smarter decisions.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-8">
                    <div>
                         <h3 className="font-semibold">Products</h3>

                        <p className="mt-3 text-gray-400">Credit Cards</p>
                        <p className="mt-2 text-gray-400">Personal Loans</p>
                        <p className="mt-2 text-gray-400">Insurance</p>
                        <p className="mt-2 text-gray-400">Bank Accounts</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Company</h3>

                        <p className="mt-3 text-gray-400">About Us</p>
                        <p className="mt-2 text-gray-400">How It Works</p>
                        <p className="mt-2 text-gray-400">Blog</p>
                    </div>

                    <div>
                        <h3 className="font-semibold">Support</h3>

                        <p className="mt-3 text-gray-400">Contact</p>
                        <p className="mt-2 text-gray-400">Help Center</p>
                        <p className="mt-2 text-gray-400">FAQs</p>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm
                    text-gray-400"> © 2026 CompareKaro. All rights reserved.
                </div>
                

            </div>
        </footer>
    );
}

export default Footer;