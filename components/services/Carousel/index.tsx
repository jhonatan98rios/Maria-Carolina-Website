import Flickity from 'react-flickity-component'

const flickityOptions = {
  initialIndex: 0
}

export default function Carousel({ children }) {

  return (
    <Flickity 
      options={flickityOptions}
    >
      {children}
    </Flickity>
  )
}