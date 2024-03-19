import {Switch} from "@headlessui/react";
import {useState} from "react";
import {twMerge} from "tailwind-merge";
import clsx from "clsx";

export default function Toggle() {

    const [enabled, setEnabled] = useState(false)

    return (
       <Switch
        checked={enabled}
        onChange={setEnabled}
        className={twMerge("relative inline-flex h-6 w-11 items-center rounded-full", clsx(enabled ? 'bg-blue-600' : "bg-gray-200"))}
       >
            <span className={"sr-only"}>Enable toggle</span>
           <span className={`${
               enabled ? 'translate-x-6' : 'translate-x-1'
           } inline-block h-4 w-4 transform rounded-full bg-white transition`}></span>
       </Switch>
    )
}