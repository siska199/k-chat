
type TProps = {
    value : boolean;
    onChange : (e:React.ChangeEvent<HTMLInputElement>)=>void;
}

const Toggle = (props: TProps) => {
    const {value, onChange} = props
  return (
    <label className="inline-flex items-center cursor-pointer">
        <input onChange={onChange} type="checkbox"  checked={value} className="peer sr-only" />
        <div className="relative w-11 h-6 bg-gray-200  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-primary"></div>
    </label>
  )
}

export default Toggle