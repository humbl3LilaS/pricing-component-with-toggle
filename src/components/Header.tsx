import Toggle from "./Toggle.tsx";

export default function Header() {
    return(
        <header>
            <h1 className={"text-2xl text-center text-heading"}>Our Pricing</h1>
            <div className={"my-8 flex justify-center items-center gap-x-4"}>
                <span>Annually</span>
                <Toggle/>
                <span>Monthly</span>
            </div>
        </header>
    )
}