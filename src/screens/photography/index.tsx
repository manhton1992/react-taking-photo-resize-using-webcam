import React, { useRef, useState } from 'react'
import Webcam from 'react-webcam'
import { SmallCard } from '../../components/Card'
import { PHOTOGRAPHY } from '../../assets/styles/constants'
import { StyledClose, StyledThubnail } from './styled'
import { Button, Form, Modal } from 'antd'
import { ImageSlide } from '../../components/ImageSlide'
import { imageObject } from '../../models'

const videoConstraints = {
    width: PHOTOGRAPHY.WIDTH,
    height: PHOTOGRAPHY.HEIGHT,
    facingMode: PHOTOGRAPHY.USER_FACINGMODE
}

const Photography: React.FC = (): JSX.Element => {
    const webcamRef = useRef<Webcam>(null);
    const [listImages, setlistImages] = useState<imageObject[]>([]);
    const [isPhotoModalVisible, setIsPhotoModalVisible] = useState<boolean>(false)
    const [showImageSlide, setShowImageSlide] = useState<boolean>(false)
    const [slideImageIndex, setSlideImageIndex] = useState<number>(0)
    
    const capture = React.useCallback(
        () => {
            addPhoto(webcamRef.current?.getScreenshot())
        },
        [webcamRef]
    );

    const addPhoto = (src: any) => {
        setlistImages((prevlistImages: any) => [...prevlistImages, {
            src: src,
        }
        ])
    }

    const deletePhoto = (index: number) => {
        setlistImages((prevlistImages: any) => prevlistImages.filter((item: any, i: number) => i !== index))
    }

    return (
        <div>
            <Form>
                <SmallCard>

                    <Button
                        type="primary"
                        onClick={() => {
                            setIsPhotoModalVisible(true);
                        }}
                        block
                    >
                        Chụp ảnh sản phẩm
                    </Button>
                    <Modal
                        visible={isPhotoModalVisible}
                        bodyStyle={{ padding: 0 }}
                        maskStyle={{ backgroundColor: "rgba(0,0,0,0.85)" }}
                        closable={false}
                        onCancel={() => { setIsPhotoModalVisible(false) }}
                        footer={null}
                        width={PHOTOGRAPHY.WIDTH}
                    >

                        <Webcam
                            audio={false}
                            width={PHOTOGRAPHY.WIDTH}
                            height={PHOTOGRAPHY.HEIGHT}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            videoConstraints={videoConstraints}
                        />
                        <Button block type={'primary'} onClick={capture}>Capture photo</Button>
                    </Modal>

                </SmallCard>
                {listImages && listImages.length > 0 ?
                    <SmallCard>
                        {
                            listImages.map((image, idx) => {
                                return (
                                    <div key={idx} style={{ position: 'relative', display: 'inline-block' }}>
                                        <StyledThubnail onClick={() => { setShowImageSlide(true); setSlideImageIndex(idx) }} src={image.src} alt="anh chup" />
                                        <StyledClose onClick={() => deletePhoto(idx)} />
                                    </div>
                                )
                            })
                        }
                    </SmallCard>
                    : null
                }

                <Modal
                    visible={showImageSlide}
                    bodyStyle={{ padding: '0px' }}
                    maskStyle={{ backgroundColor: "rgba(0,0,0,0.85)" }}
                    closable={false}
                    onCancel={() => { setShowImageSlide(false) }}
                    footer={null}
                    width={PHOTOGRAPHY.WIDTH}
                >
                    <ImageSlide data={listImages} index={slideImageIndex} />
                </Modal>



            </Form>
        </div>
    );
}

export default Photography;
