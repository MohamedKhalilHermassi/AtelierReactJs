import { Link, NavLink } from "react-router-dom"

export default function Header(props) {
    console.log(props)
    const id = 1;
    const title = "Test"
        return (
            <>
                <h1>Header</h1>
                <NavLink to={`/events?name=${title}`}  >Events</NavLink>
                <NavLink to="/events" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>Events</NavLink>
                <Link to={`/events/${id}/${title}`}>Event Details</Link>
                {/* <NavLink to="/products" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" })}>Products</NavLink> */}
                <Link to="/counter">Counter</Link>
            </>
       ) 
}