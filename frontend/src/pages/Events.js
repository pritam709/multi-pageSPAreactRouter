import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
    const events= useLoaderData();
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;
// import { NavLink } from "react-router-dom"

// const EventsPage =()=>{
//     const EVENTS= [
//         {id:"f1",title:"holi"},
//         {id:"f2",title:"diwali"},
//         {id:"f3",title:"new year"},
//         {id:"f4",title:"faag"},
//     ]
//     return <>
//         <h1>events</h1>
//         <ul>{EVENTS.map(event=>{
//             return (
//                 <li key={event.id}><NavLink to={`/events/${event.title}`}>{event.id}</NavLink></li>
//             )
//         })}</ul>
//     </>
// }
// export default EventsPage
