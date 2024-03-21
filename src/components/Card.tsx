import {twMerge} from "tailwind-merge";
import {ReactNode} from "react";

export default function Card({className, children} : {className?: string, children: ReactNode}) {
    return (
        <div className={twMerge("max-w-[350px] w-full rounded-2xl", className)}>
            {children}
        </div>
    )
}