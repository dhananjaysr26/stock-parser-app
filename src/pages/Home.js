import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate();
    return (
        <div className="App">
            <div className="card">
                <div className="card-title">Stock Parser App</div>
                <div className="card-btn">
                    <button onClick={() => navigate("/page")}>Go to Page</button>
                </div>
            </div>
        </div>
    );
};
export default Home;
