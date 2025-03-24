//import {ReactComponent as NoThumbnailicon} from '../../icons/photo.svg'
import NoThumbnailicon from '../../icons/photo.svg';


import { Container} from './Thubnail.styles'

interface ThumbnailProps {
  thumbnail?: string
  title: string
  size?: 'small' | 'large' 
  bgColor: string
}

export function Thumbnail({bgColor, thumbnail, title, size= 'small'}: ThumbnailProps) {
  return (
  <Container bgColor={bgColor} size={size}>
    {thumbnail ? (
      <img src={thumbnail} alt={title} />
    ) : (
     //  <NoThumbnailicon />
      <img src={NoThumbnailicon} alt="No Thumbnail Icon" />

    )}
  </Container>
  )
}