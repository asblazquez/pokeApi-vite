export function DropDown (props) {
  const { options, handleSelectChange } = props

  return (
    <div className='nes-select col-12 col-md-1'>
        <select required id="default_select" onChange={handleSelectChange} className="nes-select">
            {options.map((option) => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    </div>
  )
}
