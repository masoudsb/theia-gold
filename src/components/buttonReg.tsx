import "@/style/buttonReg.css"

export default function ButtonReg({ children, type, classN , onClick}: {
    children: string;
    type: "submit" | "reset" | "button" | undefined;
    classN: string;
    onClick: any;
}) {
    return (
        <button type={type} className={`btn-reg ${classN}`} onClick={onClick}>{children}</button>
    )
}