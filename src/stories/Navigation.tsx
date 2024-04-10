import type { LucideIcon } from "lucide-react";

export const Navigation = ({
    routes,
    activeRoute
}: {
    routes: {
        path: string;
        label: string;
        icon?: LucideIcon;
    }[];
    activeRoute: { path: string; label: string };
}) => {
    return (
        <nav className="border-b border-zinc-400 bg-gray-50">
            <ul className="flex flex-row justify-start">
                {routes.map((route, index) => {
                    const isActive = route.path === activeRoute.path;
                    return (
                        <li className="pr-2" key={index}>
                            <a
                                className={`border-b-2
                                    ${isActive ? "border-slate-700" : "border-gray-50"}
                                    ${isActive ? "text-slate-700" : "text-slate-400"}
                                    hover:text-slate-700
                                    flex flex-row items-center justify-center
                                    py-2 px-1`}
                                href={route.path}
                            >
                                {route.icon && <route.icon size={16} />}
                                <span className="pl-1 text-sm">
                                    {route.label}
                                </span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
