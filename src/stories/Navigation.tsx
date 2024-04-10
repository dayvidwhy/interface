import type { LucideIcon } from "lucide-react";

export const Navigation = ({
    routes,
    activeRoute,
    orientation = "horizontal",
}: {
    routes: {
        path: string;
        label: string;
        icon?: LucideIcon;
    }[];
    orientation?: "horizontal" | "vertical";
    activeRoute: { path: string; label: string };
}) => {
    return (
        <nav className={`
            ${orientation === "horizontal" ? "border-b" : "border-r"}
            border-zinc-400 bg-gray-50
        `}>
            <ul className={`
                flex
                ${orientation === "horizontal" ? "flex-row" : "flex-col"}
                justify-start
            `}>
                {routes.map((route, index) => {
                    const isActive = route.path === activeRoute.path;
                    return (
                        <li className={`
                            ${orientation === "horizontal" ? "pr-2" : "pb-2"}
                        `} key={index}>
                            <a
                                className={`
                                    ${orientation === "horizontal" ? "border-b-2" : "border-r-2"}
                                    ${isActive ? "border-slate-700" : "border-gray-50"}
                                    ${isActive ? "text-slate-700" : "text-slate-400"}
                                    hover:text-slate-700
                                    flex flex-row items-center
                                    ${orientation === "horizontal" && "justify-center"}
                                    ${orientation === "horizontal" ? "py-2 px-1" : "py-1 px-2"}
                                `}
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
