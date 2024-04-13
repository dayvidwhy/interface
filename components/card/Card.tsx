export const Card = ({
    title,
    description,
    footer
}: {
    title: string;
    description: string;
    footer: string;
}) => {
    return (
        <div>
            <div className="bg-white shadow-md rounded-sm overflow-hidden">
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                    <p className="text-gray-600">{description}</p>
                </div>
                <div className="p-4">
                    {footer}
                </div>
            </div>
        </div>
    );
};
