import { Slide } from 'react-slideshow-image'
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { POKEMONS_SPRITES } from '../Constantes'

export function ImageSlider (props) {
  const { images, id } = props
  console.log(images)
  return (
        <div className='slide-container col-md-6 col-12 backGroudSlideImage'>
            <Slide>
                {images.map((image, index) => {
                  return (
                    typeof image === 'string'
                      ? <div className='each-slide justify-center row' key={index}>
                            {image.includes('female')
                              ? <BsGenderFemale color={'fuchsia'} size={'2rem'}/>
                              : <BsGenderMale color={'Cyan'} size={'2rem'}/> }
                                <img src={image} alt={index}/>
                                {image.includes('shiny') ? <AiFillStar color={'gold'} size={'2rem'}/> : null}
                            <label className='col-12 text-center'>{POKEMONS_SPRITES[image.slice(0, (id + '.png').length)]}</label>
                        </div>
                      : null
                  )
                })}
            </Slide>
        </div>
  )
}
