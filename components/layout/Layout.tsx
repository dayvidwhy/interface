import React from "react";

export const Layout = ({
    header,
    sidebar,
    main,
    footer
}: {
    header: React.ReactNode;
    sidebar: React.ReactNode;
    main: React.ReactNode;
    footer: React.ReactNode;
}) => {
    return (
        <div className="h-full flex flex-col">
            <div>
                {header}
            </div>
            <div className="flex-1 overflow-hidden">
                <div className="flex flex-row h-full">
                    <div className="w-48 overflow-auto">
                        {sidebar}
                    </div>
                    <div className="flex-1 overflow-auto">
                        {main}
                    </div>
                </div>
            </div>
            <div>
                {footer}
            </div>
        </div>
    );
};
