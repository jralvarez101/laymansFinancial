import React from 'react'

function CashFlowStatementDisplay(props) {
    return (
        <div>
                {props.cashFlowList.map(data =>(<div>
                {data.netIncome??'default'}<br/>
                {data.inventory??'default'}<br/>
                {data.date}
            </div>))}
        </div>
    )
}

export default CashFlowStatementDisplay;
