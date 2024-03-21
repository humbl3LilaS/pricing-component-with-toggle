export default function Container(props: React.PropsWithChildren) {
    return (
        <div className={"w-full h-full py-12 px-6 "}>
            {props.children}
        </div>
    )
}