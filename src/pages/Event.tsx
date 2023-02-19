import React, {FC, useEffect, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import { useAppSelector } from '../hooks/redux';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { IEvent } from '../models/IEvent';
import { getUser } from '../services/storage';
import { EventActionCreators } from '../store/reducers/EventSlice';

const Event: FC = () => {
	const [modalVisible, setModalVisible] = useState(false);
    const {guests, events} = useAppSelector(state => state.eventReducer);
	
	// const {user} = useAppSelector(state => state.authReducer)
	const user = getUser();

	useEffect(() => {
        EventActionCreators.fetchGuests()
        EventActionCreators.fetchEvents(user);
    }, [])

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false);
        EventActionCreators.createEvent(event);
    }
	return (
		 <Layout>
            <EventCalendar events={events}/>
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
                <EventForm
                    guests={guests}
                    submit={addNewEvent}
                />
            </Modal>
        </Layout>
	)
}

export default Event;