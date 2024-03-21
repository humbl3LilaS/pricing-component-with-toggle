
import Plan from "./Plan.tsx";
import {useContext} from "react";
import {PlanContext} from "../provider/usePlanData.ts";

export default function PlanContainer(){
    const plans = useContext(PlanContext)

 return (
     <section>
         <div className={"grid gap-y-6 md:grid-cols-4 lg:grid-cols-desktop lg:max-w-[1050px] lg:mx-auto lg:grid-rows-desktop"}>
             {plans.map(data => <Plan data={data} key={data.title}/> )}
         </div>
     </section>
 )
}