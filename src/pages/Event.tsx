import React, {FC, useEffect, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import { useAppSelector } from '../hooks/redux';

const Event: FC = () => {
	 const [modalVisible, setModalVisible] = useState(false);
    // const {guests,events} = useAppSelector(state => state.event);
	return (
		 <Layout>
            {/* <EventCalendar events={events}/> */}
            <Row justify="center">
                <Button
                    onClick={() => setModalVisible(true)}
                >
                   Add Event
                </Button>
            </Row>
            <Modal
                title="Add event"
                open={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                {/* <EventForm
                    guests={guests}
                    submit={addNewEvent}
                /> */}
            </Modal>
        </Layout>
	)
}

export default Event;