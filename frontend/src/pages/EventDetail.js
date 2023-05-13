import { useParams } from "react-router-dom"
const EventDetailPage =()=>{
    const param= useParams();
    return <>
        <h1>details of the event</h1>
        <p>{param.id}</p>
    </>
}
export default EventDetailPage