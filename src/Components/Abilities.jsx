export function Abilities (props) {
  const { abilities } = props
  console.log(abilities)
  return (
    abilities.map((ability, index) => {
      return (
        <div className='col-md-3 col-6 text-center text-white' key={index}>
                <p className="title">{ability.ability.name}</p>
        </div>
      )
    })
  )
}
