import Card from "./Card.tsx";
import {cva} from "class-variance-authority";
import {PlanData} from "../provider/usePlanData.ts";
import clsx from "clsx";
import {useToggleContext} from "../provider/ToggleStateProvider.tsx";

 const planStyle = cva(["p-6 mx-auto md:col-span-2 lg:col-span-1 "], {
    variants: {
        intent: {
            cta: [
                "bg-primary",
                "text-white",
                "md:col-start-2",
                "lg:row-span-3",
                "lg:flex",
                "lg:flex-col",
                "lg:justify-center"
            ],
            normal: [
                "bg-white",
                "text-main",
                "md:last:row-start-1",
                "md:last:col-end-5",
                "lg:row-start-2",
                "lg:row-span-1",
                "lg:first:col-start-1",
                "lg:last:row-start-2",
                "lg:last:col-start-3"
            ]
        }
    },
    defaultVariants: {
        intent: "normal"
    }
})

const buttonStyle = cva(["w-full py-2 mt-3 border-2  rounded-md uppercase text-sm  transition-all ease-in duration-300 hover:bg-transparent hover:border-2 hover:border-main"],{
    variants: {
        intent: {
            normal:[
                "border-white",
                "bg-primary",
                "text-white",
                "hover:bg-none",
                "hover:text-btn",
                "hover:border-btn"

            ],
            cta:[
                "bg-white",
                "border-white",
                "text-btn",
                "hover:text-white"
            ]
        }
    },
    defaultVariants: {
        intent: "normal"
    }
})

export default function Plan({data}:{data: PlanData}) {
     const {enabled} = useToggleContext();

    return (
        <Card className={clsx(data.isCta ? planStyle({intent:"cta"}) : planStyle())}>
            <h2 className={"text-center capitalize"}>{data.title}</h2>
            <p className={"my-8 flex justify-center items-center gap-x-1"}>
                <span className={"text-2xl"}>$</span>
                <span className={"text-5xl"}>{enabled ? data.price.monthly : data.price.yearly}</span>
            </p>
            <ul className={"mb-5"}>
                {data.description.map(item => <li className={"text-center py-4 border-b first:border-t"} key={item}>{item}</li>)}
            </ul>
            <button className={clsx(data.isCta ? buttonStyle({intent:"cta"}) : buttonStyle())}>
                Learn more
            </button>
        </Card>
    );


}