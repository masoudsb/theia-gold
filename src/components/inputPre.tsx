import "@/style/inputPre.css"

export default function InputPre({ children, type, onChange, classN ,value}: {
    children: string;
    type: string;
    onChange: any | undefined;
    classN: string;
    value: string  | undefined;
    
}) {
    return (
<div className="group justify-items-center">
<input type={type } className={`input ${classN}`} placeholder={" "} onChange={onChange} value={value}/>
  <span className="highlight"></span>
  <span className="bar"></span>
<label>{children}</label>
</div>
    )
}