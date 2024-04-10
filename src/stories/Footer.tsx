export const Footer = () => {
    return (
        <div className="w-full bg-slate-100 flex flex-row px-8 py-4">
            <div className="w-1/5">
                <h1 className="text-xl">Headering 1</h1>
                <ul>
                    <li>
                        <a className="hover:underline pl-1" href="/">Home</a>
                    </li>
                    <li>
                        <a className="hover:underline pl-1" href="/about">About</a>
                    </li>
                    <li>
                        <a className="hover:underline pl-1" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="w-1/5">
                <h1 className="text-xl">Heading 2</h1>
            </div>
            <div className="w-1/5">
                <h1 className="text-xl">Heading 3</h1>
            </div>
        </div>
    );
};
