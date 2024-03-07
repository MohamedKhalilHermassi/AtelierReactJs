import Event from "./Event";
// import events from "../events.json"
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { get } from "../services/eventServices";
function Events() {

    const [showWelcome,setShowWelcome] = useState(true)
    const [searchParams, setSearchParams] = useSearchParams({});
    const [events,setEvents] = useState([])
    useEffect(() => {
        console.log(searchParams.get("name"))
        console.log(searchParams.get("id"))
        fetchEvents();
        setTimeout(() => {
            setShowWelcome(false)
        },3000)
    }, [])
   const  deleteEvent = (eventId) =>{
    setEvents(events.filter(event => event.id !== eventId));
    }
    const fetchEvents =async () => {
        // get()
        //     .then((result) => { setEvents(result.data); console.log(result) })
        //     .catch((error)=>console.log(error))

        try {
            const result = await get();
            setEvents(result.data)
        } catch (error) {
            console.log(error)
        }
        
        //setEvents(result);
        //console.log(result)
    }

    const [show,setShow] = useState(false)
    const Buy = (event) => {
        setShow(true);
        event.nbTickets--;
        event.nbParticipants++;
        setTimeout(() => {
            setShow(false)
        }, 2000)
    }
    return (
        <Container>
            <Row>
                {showWelcome && <Alert variant="success"> Hey welcome to ESPRIT events</Alert>} 
                {events.map((element, index) => {
                    return (
                        <Col key={index} md={4}>
                            <Event event={element} Buy={Buy} removeEvent={deleteEvent} />
                        </Col>
                    )
                })}
                {show && <Alert variant="success">You have booked an event</Alert> } 
            </Row>

    </Container>
        
    )
}

export default Events;