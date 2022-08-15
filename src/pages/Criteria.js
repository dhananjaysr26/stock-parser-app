import { Link, useParams } from "react-router-dom";

const Criteria = ({ stockData }) => {
    let { stockId } = useParams();
    let variableCount = 0;
    const subData = stockData.filter((data) => data.id == stockId);

    return (
        <div className="App">
            {subData.length > 0 ? (
                <div>
                    <div className="criteria-head">
                        <div className="criteria-title">{subData[0].name}</div>
                        <small style={{ color: `${subData[0].color}` }}>
                            {subData[0].tag}
                        </small>
                    </div>
                    <ul>
                        {subData.length > 0
                            ? subData[0].criteria.map((Cdata, ci) => {
                                let textArray = Cdata.text.split("$");
                                return (
                                    <li key={ci}>
                                        {textArray.map((Tdata, i) => {
                                            return (
                                                <span key={i}>
                                                    {parseInt(Tdata[0]) && textArray.length > 1 ? (
                                                        <Link to={`/page/${stockId}/${ci}/${++variableCount}`}>
                                                            <u style={{ marginRight: "10px" }}>{Tdata}</u>
                                                        </Link>
                                                    ) : (
                                                        Tdata
                                                    )}
                                                </span>
                                            );
                                        })}
                                        {1 + ci < subData[0].criteria.length && (
                                            <small style={{ display: "block" }}>and</small>
                                        )}
                                    </li>
                                );
                            })
                            : ""}
                    </ul>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};
export default Criteria;
