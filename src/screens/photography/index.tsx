import React, { useRef, useState } from 'react'
import Webcam from 'react-webcam'
import { SmallCard } from '../../components/Card'
import { PHOTOGRAPHY } from '../../assets/styles/constants'
import { StyledClose, StyledThubnail } from './styled'
import { Button, Form, Modal } from 'antd'

const videoConstraints = {
    width: PHOTOGRAPHY.WIDTH,
    height: PHOTOGRAPHY.HEIGHT,
    facingMode: PHOTOGRAPHY.USER_FACINGMODE
}

interface imageObject {
    id: number,
    src: any,
}

const Photography: React.FC = () => {
    const webcamRef = useRef<Webcam>(null);
    const [image, setImage] = useState<Array<imageObject>>([]);
    const [isPhotoModalVisible, setIsPhotoModalVisible] = useState<boolean>(false)

    const capture = React.useCallback(
        () => {
            setImage((prevImage: any) => [...prevImage, {
                id: prevImage.length,
                src: webcamRef.current?.getScreenshot(),
            }
            ])
        },
        [webcamRef]
    );

    const deletePhoto = (id: number) => {
        setImage((prevImage: any) => prevImage.filter((item: any, i: number) => i !== id))
        console.log(image)
    }

    return (
        <div>
            <Form>
                <SmallCard>
                    <Form.Item>
                        <Button
                            type="primary"
                            onClick={() => {
                                setIsPhotoModalVisible(true);
                            }}
                            block
                        >
                            Chụp ảnh sản phẩm
                  </Button>
                    </Form.Item>
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
                {image && image.length > 0 ?
                    <SmallCard>
                        {
                            image.map(image => {
                                return (
                                    <div key={image.id}>
                                        <StyledThubnail src={image.src} alt="anh chup" />
                                        <StyledClose onClick={() => deletePhoto(image.id)} />
                                    </div>
                                )
                            })
                        }

                    </SmallCard>
                    : null
                }
            </Form>
        </div>
    );
}

export default Photography;
