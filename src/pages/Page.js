import { Link } from "react-router-dom";

const Page = ({ stockData }) => {
    return (
        <div className="App">
            <ul>
                {stockData.map((data, i) => {
                    return (
                        <li key={i}>
                            <Link to={`${data.id}`}>{data.name}</Link>
                            <small style={{ color: `${data.color}`, display: "block" }}>
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
