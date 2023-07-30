import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

export function Title (props) {
  const { object, id, type } = props
  return (
    <div className="row justify-center">
        <div className='col-md-1 col-12'>
            {parseInt(id) !== 1 ? <Link to={`/${type}/${parseInt(id) - 1}`}><AiOutlineArrowLeft size={50} /></Link> : null}
        </div>
        <h1 className='text-white'>{object.name}</h1>
        <div className='col-md-1 col-12 text-end'>
            {parseInt(id) !== 1000 ? <Link to={`/${type}/${parseInt(id) + 1}`}><AiOutlineArrowRight size={50} /></Link> : null}
        </div>
    </div>
  )
}
