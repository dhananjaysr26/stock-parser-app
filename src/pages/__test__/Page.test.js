import { cleanup, render, screen, within } from "@testing-library/react"
import { MemoryRouter } from 'react-router-dom';
import Page from "../Page"

const StockData = [
    {
        "id": 1,
        "name": "Top gainers",
        "tag": "Intraday Bullish",
        "color": "green",
        "criteria": [
            {
                "type": "plain_text",
                "text": "Sort - %price change in descending order"
            }
        ]
    },
    {
        "id": 2,
        "name": "Intraday buying seen in last 15 minutes",
        "tag": "Bullish",
        "color": "green",
        "criteria": [
            {
                "type": "plain_text",
                "text": "Current candle open = current candle high"
            },
            {
                "type": "plain_text",
                "text": "Previous candle open = previous candle high"
            },
            {
                "type": "plain_text",
                "text": "2 previous candle’s open = 2 previous candle’s high"
            }
        ]
    },
    {
        "id": 3,
        "name": "Open = High",
        "tag": "Bullish",
        "color": "green",
        "criteria": [
            {
                "type": "variable",
                "text": "Today’s open < yesterday’s low by $1 %",
                "variable": {
                    "$1": {
                        "type": "value",
                        "values": [
                            -3,
                            -1,
                            -2,
                            -5,
                            -10
                        ]
                    }
                }
            }
        ]
    },
    {
        "id": 4,
        "name": "CCI Reversal",
        "tag": "Bearish",
        "color": "red",
        "criteria": [
            {
                "type": "variable",
                "text": "CCI $1 crosses below $2",
                "variable": {
                    "$1": {
                        "type": "indicator",
                        "study_type": "cci",
                        "parameter_name": "period",
                        "min_value": 1,
                        "max_value": 99,
                        "default_value": 20
                    },
                    "$2": {
                        "type": "value",
                        "values": [
                            100,
                            200
                        ]
                    }
                }
            }
        ]
    },
    {
        "id": 5,
        "name": "RSI Overbought",
        "tag": "Bearish",
        "color": "red",
        "criteria": [
            {
                "type": "variable",
                "text": "Max of last 5 days close > Max of last 120 days close by $1 %",
                "variable": {
                    "$1": {
                        "type": "value",
                        "values": [
                            2,
                            1,
                            3,
                            5
                        ]
                    }
                }
            },
            {
                "type": "variable",
                "text": "Today's Volume > prev $2 Vol SMA by $3 x",
                "variable": {
                    "$2": {
                        "type": "value",
                        "values": [
                            10,
                            5,
                            20,
                            30
                        ]
                    },
                    "$3": {
                        "type": "value",
                        "values": [
                            1.5,
                            0.5,
                            1,
                            2,
                            3
                        ]
                    }
                }
            },
            {
                "type": "variable",
                "text": "RSI $4 > 20",
                "variable": {
                    "$4": {
                        "type": "indicator",
                        "study_type": "rsi",
                        "parameter_name": "period",
                        "min_value": 1,
                        "max_value": 99,
                        "default_value": 14
                    }
                }
            }
        ]
    }
]
afterEach(cleanup);
describe("Test the Page Component", () => {
    test("render the Page with 5 List", () => {
        render(<Page stockData={StockData} />, { wrapper: MemoryRouter })
        const list = screen.getByRole("list")
        const { getAllByRole } = within(list)
        const items = getAllByRole("listitem")
        expect(items.length).toBe(5)
    })
    test("Intraday Bullish should green in Color", () => {
        render(<Page stockData={StockData} />, { wrapper: MemoryRouter })
        // eslint-disable-next-line testing-library/prefer-screen-queries, testing-library/no-node-access
        expect(screen.getByTestId('Intraday Bullish')).toHaveStyleRule("color", "green");
    })

})