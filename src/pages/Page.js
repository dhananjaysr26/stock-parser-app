import { Link } from "react-router-dom";

const Page = ({ stockData }) => {
    return (
        <div className="App">
            <ul>
                {stockData.map((data, i) => {
                    return (
                        <li key={i} className="list">
                            <Link to={`${data.id}`}>{data.name}</Link>
                            <small data-testid={data.tag} style={{ color: `${data.color}`, display: "block" }}>
                                {data.tag}
                            </small>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default Page;
