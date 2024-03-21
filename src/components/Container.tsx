export default function Container(props: React.PropsWithChildren) {
    return (
        <div className={"w-screen h-screen py-12 px-8"}>
            {props.children}
        </div>
    )
}