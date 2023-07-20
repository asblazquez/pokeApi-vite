import { Slide } from 'react-slideshow-image'
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { POKEMONS_SPRITES } from '../Constantes'

export function ImageSlider (props) {
  const { images, id } = props

  return (
        <div className='slide-container col-md-6 col-12 backGroudSlideImage'>
            <Slide>
                {images.filter(image => typeof image === 'string').map((image, index) => {
                  return (
                    typeof image === 'string'
                      ? <div className='each-slide justify-center row mt-3' key={index}>
                            {image.includes('female')
                              ? <BsGenderFemale color={'fuchsia'} size={'2rem'} filter='drop-shadow(2px 3px 0px rgba(51, 51, 51, .7))'/>
                              : <BsGenderMale color={'Cyan'} size={'2rem'} filter='drop-shadow(2px 3px 0px rgba(51, 51, 51, .7))'/> }
                                <img src={image} alt={index} className='imgSlider'/>
                                {image.includes('shiny') ? <AiFillStar color={'gold'} size={'2rem'} filter='drop-shadow(2px 2px 0px rgba(51, 51, 51, .7))'/> : null}
                            <label className='col-12 text-center'>{POKEMONS_SPRITES[image.slice(0, image.length - (id + '.png').length)]}</label>
                        </div>
                      : null
                  )
                })}
            </Slide>
        </div>
  )
}
