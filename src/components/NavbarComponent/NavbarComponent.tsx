import { Link } from "react-router-dom";

const NavbarComponent = () => {
    return (
        <div >
            <div
                className="container d-flex justify-content-between align-items-center"
            >
                {/* start */}
                <Link
                    to={"/"}
                    className="text-decoration-none text-light fs-1 fw-bold"
                >
                    Fluxus
                </Link>

                {/* end */}
                <div className="d-flex gap-4 fs-5">
                    <Link
                        to={"/"}
                        className="text-decoration-none text-light"
                    >
                        Home
                    </Link>
                    <Link
                        to={"/events"}
                        className="text-decoration-none text-light"
                    >
                        Events
                    </Link>
                    <Link
                        to={"/competitions"}
                        className="text-decoration-none text-light"
                    >
                        Competitions
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NavbarComponent;