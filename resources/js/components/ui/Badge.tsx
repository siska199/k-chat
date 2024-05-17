import clsx from "clsx"

type TProps = {
    text : React.ReactNode | string | number;
    color : "primary"
}

const Badge = (props: TProps) => {
    const {text, color} = props
  return (
    <div className={clsx({
        "px-1 rounded-sm h-fit" : true,
        "bg-primary-100 text-primary text-body-small" : color==="primary"
    })}>
        {text}
    </div>
  )
}

export default Badge