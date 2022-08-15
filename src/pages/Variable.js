import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Variable = ({ stockData }) => {
    const { stockId, criteriaId, variableId } = useParams();
    const [value, setValue] = useState([]);
    const [indicator, setIndicator] = useState([]);
    const subData = stockData.filter((data) => data.id == stockId);
    console.log(subData);
    // console.log(indicator);
    useEffect(() => {
        let variableAccessor = `$${variableId}`;
        if (subData.length > 0) {
            if (
                subData[0].criteria[criteriaId].variable[variableAccessor].type ===
                "value"
            ) {
                console.log("Value");
                setValue(
                    subData[0].criteria[criteriaId].variable[variableAccessor].values
                );
            }
            if (
                subData[0].criteria[criteriaId].variable[variableAccessor].type ===
                "indicator"
            ) {
                console.log("Indicator");
                setIndicator(
                    subData[0].criteria[criteriaId].variable[variableAccessor]
                );
            }
        }
    }, [stockData]);

    return (
        <div className="App">
            {Object.keys(value).length !== 0 && (
                <div>
                    {value.map((d, i) => {
                        return <li key={i}>{d}</li>;
                    })}
                </div>
            )}
            {indicator.length !== 0 && (
                <div>
                    <h2>{indicator.study_type}</h2>
                    <h3>Set Parameter</h3>
                    <label>{indicator.parameter_name}</label>
                    <input type="text" value={indicator.default_value} />
                </div>
            )}
        </div>
    );
};

export default Variable;
