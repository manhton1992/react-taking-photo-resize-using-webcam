import React from 'react'
import { PageHeader, Button, Tabs } from 'antd'
import 'antd/dist/antd.css';
import './index.css';
import { key } from '../../locales'
import { useIntl } from 'react-intl';

const HeaderTopScreen: React.FC = () => {
    const { TabPane } = Tabs;
    const intl = useIntl()

    return (
        <>
            <PageHeader
                className="site-page-header-responsive"
                onBack={() => window.history.back()}
                title={intl.formatMessage({ id: key.titleApp })}
                subTitle={intl.formatMessage({ id: key.titleApp })}
                extra={[
                    <Button key="3">Operation3</Button>,
                    <Button key="2">Operation2</Button>,
                    <Button key="1" type="primary" href={'/photography'}>
                        Catpture
                    </Button>,
                ]}
                footer={
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Details" key="1" />
                        <TabPane tab="Qui định" key="2" />
                    </Tabs>
                }
            >
            </PageHeader>
        </>
    )
}

export default HeaderTopScreen
