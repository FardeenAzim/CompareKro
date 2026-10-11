function BenefitCard(props) {
    return(
        <div className="rounded-2xl border border-gray-200 bg-white p-6
         shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <span className="text-xl font-bold text-gray-900">
                {props.title}
            </span>
            <p className="mt-2 text-gray-600">
                {props.description}</p>
         </div>
       

    )
}

export default BenefitCard