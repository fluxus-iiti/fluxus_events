import { useNavigate } from "react-router-dom";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";

const HomePage = () => {
    const navigator = useNavigate();

    return (
        <div
            style={{ background: "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)" }}
        >
            <div
                className="d-flex flex-column min-vh-100"
            >
                <NavbarComponent />

                {/* hero section */}
                <div
                    className="d-flex flex-column justify-content-center align-items-center flex-grow-1"
                >
                    <span
                        className="text-light fw-bold"
                        style={{ fontSize: '12vw' }}
                    >
                        FLUXUS
                    </span>
                    <span
                        className="text-light display-1"
                    >
                        Endeavour to inspire.
                    </span>
                </div>
            </div>

            {/* events section */}
            <div
                className="min-vh-100 d-flex flex-column align-items-center p-4 gap-5"
            >
                <span
                    className="text-light display-1 fw-bold"
                >
                    Events
                </span>

                <div
                    className="bg-dark"
                    style={{
                        width: 'clamp(1000px, 1000px, 90%)',
                        height: '600px'
                    }}
                />

                <button
                    className="btn btn-primary"
                    onClick={() => navigator('/events')}
                >
                    Know More
                </button>
            </div>

            {/* competitions section */}
            <div
                className="min-vh-100 d-flex flex-column align-items-center p-4 gap-5"
            >
                <span
                    className="text-light display-1 fw-bold"
                >
                    Competitions
                </span>

                <div
                    className="bg-dark"
                    style={{
                        width: 'clamp(1000px, 1000px, 90%)',
                        height: '600px'
                    }}
                />

                <button
                    className="btn btn-primary"
                    onClick={() => navigator('/competitions')}
                >
                    Know More
                </button>
            </div>

            {/* footer */}
            <FooterComponent />
        </div>
    );
}

export default HomePage;