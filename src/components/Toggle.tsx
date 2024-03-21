import {Switch} from "@headlessui/react";
import {twMerge} from "tailwind-merge";
import {useToggleContext} from "../provider/ToggleStateProvider.tsx";

export default function Toggle() {

    const {enabled, setEnabled} = useToggleContext();

    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={twMerge("relative inline-flex h-6 w-11 items-center rounded-full bg-primary")}
        >
            <span className={"sr-only"}>Pricing Mode Toggle</span>
            <span className={`${
                enabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}></span>
        </Switch>
    );
}