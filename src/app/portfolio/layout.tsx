import React, { ReactNode } from "react";

interface LayoutProps{
    children: ReactNode;
}

const Layout:React.FC<LayoutProps>=({children})=>{
    return(
        <div className="min-h-[70vh]">
            {children}
        </div>
    )
}

export default Layout;