import Card from "./Card.tsx";
import {cva} from "class-variance-authority";
import {PlanData} from "../provider/usePlanData.ts";
import clsx from "clsx";

 const planStyle = cva(["p-6 mx-auto"], {
    variants: {
        intent: {
            cta: [
                "bg-primary",
                "text-white",
            ],
            normal: [
                "bg-white",
                "text-main",
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
    return (
        <Card className={clsx(data.isCta ? planStyle({intent:"cta"}) : planStyle())}>
            <h2 className={"text-center capitalize"}>{data.title}</h2>
            <p className={"my-8 flex justify-center items-center gap-x-1"}>
                <span className={"text-2xl"}>$</span>
                <span className={"text-5xl"}>{data.price.yearly}</span>
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