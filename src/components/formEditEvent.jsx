import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { add, get } from '../services/eventServices';
import { useNavigate, useParams } from 'react-router-dom';

function FormEditEvent(props) {
    const { eventId } = useParams();
    const [event, setEvent] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchEvent() {
            try {
                const response = await get(eventId);
                console.log('API Response:', response); // Log the API response
                setEvent(response.data);
            } catch (error) {
                console.log('Error fetching event:', error); // Log any errors
            }
        }
        fetchEvent();
    }, [eventId]);

    console.log('Event:', event); 

    const f = useFormik({
        initialValues: {
            name: event ? event.name : '',
            description: event ? event.description : '',
            price: event ? event.price : 0,
            nbTickets: event ? event.nbTickets : 0,
            img: event ? event.img : '',
            nbParticipants: event ? event.nbParticipants : 0,
            like: event ? event.like : false
        },
        onSubmit: async (values) => {
            console.log(values);
            await add(values);
            navigate('/events');
        }
    });

    if (!event) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Form onSubmit={f.handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="name" value={f.values.name} onChange={f.handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" type="text" name="description" value={f.values.description} onChange={f.handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name="price" value={f.values.price} onChange={f.handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Number of Tickets</Form.Label>
                    <Form.Control type="number" name="nbTickets" value={f.values.nbTickets} onChange={f.handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" name="img" value={f.values.img} onChange={f.handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default FormEditEvent;
