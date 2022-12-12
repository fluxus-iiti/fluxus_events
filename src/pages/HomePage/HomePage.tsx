import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";

const HomePage = () => {
    return (
        <div
            style={{ background: "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)" }}
        >
            <div
                className="d-flex flex-column min-vh-100"
            >
                <NavbarComponent />

                {/* first section */}
                <div
                    className="d-flex flex-column justify-content-center align-items-center flex-grow-1"
                >
                    <span
                        className="text-light fw-bold"
                        style={{ fontSize: '10vw'}}
                    >
                        FLUXUS
                    </span>
                    <span
                        className="text-light"
                        style={{ fontSize: '4vw' }}
                    >
                        Endeavour to inspire.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default HomePage;