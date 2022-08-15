import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Variable = ({ stockData }) => {
    const { stockId, criteriaId, variableId } = useParams();

    const [value, setValue] = useState([]);
    const [indicator, setIndicator] = useState([]);
    const subData = stockData.filter((data) => data.id == stockId);
    useEffect(() => {
        let variableAccessor = `$${variableId}`;
        if (subData.length > 0) {
            if (
                subData[0].criteria[criteriaId].variable[variableAccessor].type ===
                "value"
            ) {
                setValue(
                    subData[0].criteria[criteriaId].variable[variableAccessor].values
                );
            }
            if (
                subData[0].criteria[criteriaId].variable[variableAccessor].type ===
                "indicator"
            ) {
                setIndicator(
                    subData[0].criteria[criteriaId].variable[variableAccessor]
                );
            }
        }
    }, [stockData]);

    return (
        <div className="App">
            {Object.keys(value).length !== 0 && (
                <ul >
                    {value.sort().map((d, i) => {
                        return <li key={i} className="list" style={{ listStyle: "none" }}>{d}</li>;
                    })}
                </ul>
            )}
            {indicator.length !== 0 && (
                <div className="indicator">
                    <h2>{indicator.study_type}</h2>
                    <p>Set Parameter</p>
                    <div className="input-container">
                        <div className="input-label">{indicator.parameter_name}</div>
                        <input type="text" onChange={(e) => console.log(e.target.value)} value={indicator.default_value} />
                    </div>

                </div>
            )}
        </div>
    );
};

export default Variable;
