import { useParams } from 'react-router-dom'

export function Item () {
  const { id } = useParams()
  return (
        <div>{id}</div>
  )
}
