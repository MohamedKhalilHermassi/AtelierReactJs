import { useParams } from "react-router-dom";

function EventDetails() {

    const { title, id } = useParams();
    console.log(title)
    console.log(id)
    return ( 
        <h1>Event Details</h1>
     );
}

export default EventDetails;