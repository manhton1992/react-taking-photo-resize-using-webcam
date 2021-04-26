import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { imageObject } from '../../models';
import { StyledSliderImg } from './styled'

interface Props {
    data: Array<imageObject>,
    index: number,
}

export const ImageSlide: React.FC<Props> = (props: Props) => {
    const {index, data = [] } = props
    return (
        <>
            {
                data && data.length > 0 ? 
                <AliceCarousel
                    mouseTracking={true}
                    activeIndex={index}
                    items={data.map((image, index) => {
                        return (
                            <StyledSliderImg key={index} src={image.src} />
                        )
                    })
                }
                >
                </AliceCarousel> : 
                null
            }
        </>
    )
}

