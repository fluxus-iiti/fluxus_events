import { useNavigate } from "react-router-dom";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import eventsData from "../../repository/eventsData";

const EventsPage = () => {
    return (
        <div
            style={{
                background: "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)"
            }}
        >
            <NavbarComponent />

            {/* show all events */}
            {eventsData.map((event) => {
                return (
                    <EventCard
                        key={event.eventId}
                        eventId={event.eventId}
                        eventName={event.eventName}
                        eventDescription={event.eventDescription}
                        imageUrl={event.eventImageUrl}
                    />
                )
            })}
        </div>
    );
}

const EventCard = (props: {
    eventId: number,
    eventName: string,
    eventDescription: string,
    imageUrl: string
}) => {
    const navigator = useNavigate();

    return (
        // dummy container
        <div
            className="min-vh-100 d-flex justify-content-center align-items-center"
        >
            {/* main container */}
            <div
                className="bg-light bg-dark d-flex gap-5 p-4"
                style={{
                    width: '80%',
                    height: '80vh'
                }}
            >
                {/* start */}
                <img
                    src={props.imageUrl}
                    alt={props.eventName}
                    className="align-self-center"
                    style={{
                        maxWidth: '50%',
                        maxHeight: '100%'
                    }}
                />

                {/* end */}
                <div
                    className="d-flex flex-column justify-content-around align-items-center"
                >
                    <span
                        className="text-light display-1 fw-bold"
                    >
                        {props.eventName}
                    </span>
                    <p
                        className="text-light text-center fs-2"
                    >
                        {props.eventDescription}
                    </p>
                    <button
                        className="btn btn-primary"
                        onClick={() => navigator(`/events/${props.eventId}`)}
                    >
                        Know More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EventsPage;