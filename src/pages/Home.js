import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="App">
            <div className="card">
                <div className="card-title">Stock Parser App</div>
                <div className="card-btn">
                    <Link to="/page">Go to Page</Link>
                </div>
            </div>
        </div>
    );
};
export default Home;
