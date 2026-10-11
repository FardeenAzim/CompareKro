import { Link } from "react-router-dom";

function CategoryCard(props) {
    const Icon = props.icon;

    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm
        transition hover:-translate-y-1 hover:shadow-lg">

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl
            bg-purple-100 text-purple-600">
                <Icon size={24} />
            </div>

            <h3 className="text-xl font-bold text-gray-900">
                {props.name}
            </h3>

            <p className="mt-2 text-gray-600">
                {props.description}
            </p>

            <Link to={props.link} className="mt-5 inline-block rounded-full bg-purple-600 px-5 py-2
             font-semibold text-white transition hover:bg-purple-700">
                Explore
            </Link>

        </div>
    );
}

export default CategoryCard;