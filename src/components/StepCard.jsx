function StepCard(props) {
    return(
        <div className="rounded-2xl border border-gray-200 bg-white p-6
         shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <span className="flex h-12 w-12 items-center justify-center rounded-full
              bg-purple-100 font-bold text-purple-700">{props.number}</span>
            <h3 className="mt-5 text-xl font-bold text-gray-900">
                {props.title}</h3>
            <p className="mt-2 text-gray-600">
                {props.description}</p>
        </div>
    )
}

export default StepCard