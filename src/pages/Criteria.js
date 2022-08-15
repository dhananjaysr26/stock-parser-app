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
                                    <li key={ci} className="criteria-list">
                                        {textArray.map((Tdata, i) => {
                                            if (textArray.length > 1) {
                                                let variableAccessor = `$${1 + variableCount}`;
                                                var link = Cdata.variable[variableAccessor].hasOwnProperty('values') ? Cdata.variable[variableAccessor].values[0] : Cdata.variable[variableAccessor].default_value
                                            }
                                            return (
                                                <span key={i}>
                                                    {parseInt(Tdata[0]) && textArray.length > 1 ? (
                                                        <Link to={`/page/${stockId}/${ci}/${++variableCount}`}>
                                                            ({link}){Tdata.slice(2)}
                                                        </Link>
                                                    ) : (
                                                        Tdata
                                                    )}
                                                </span>
                                            );
                                        })}
                                        {1 + ci < subData[0].criteria.length && (
                                            <small>and</small>
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
