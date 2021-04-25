import { Button, Col, Row, Tabs } from 'antd'
import React, { useState } from 'react'

const { TabPane } = Tabs;

export const TabLeft: React.FC = () => {
    const [tabPos, setTabPos] = useState<any | undefined>('left')

    return (
        <>
            <Tabs tabPosition={tabPos}>
                <TabPane tab="Tab 1" key="1">
                    <Row >
                        <Col offset={8}>
                            {
                                tabPos === 'left' ?
                                    <Button onClick={() => setTabPos('right')}>
                                        Chuyen Tab sang phai
                        </Button> :
                                    <Button onClick={() => setTabPos('left')}>
                                        Chuyen Tab sang trai
                    </Button>
                            }
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    <Row >
                        <Col offset={8}>
                            {
                                tabPos === 'left' ?
                                    <Button onClick={() => setTabPos('right')}>
                                        Chuyen Tab sang phai
                        </Button> :
                                    <Button onClick={() => setTabPos('left')}>
                                        Chuyen Tab sang trai
                    </Button>
                            }
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content of Tab 3
                </TabPane>
            </Tabs>
        </>
    )
}
