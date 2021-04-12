import React from 'react';


function IncomeStatementDisplay(props) {
    return (
        <div >
                {props.incomeList.map(data =>(<div>
                {data.netIncomeRatio??'default'}<br/>
                {data.costOfRevenue?? 'default'}<br/>
                {data.date}<br/>
            </div>))}
        </div>
    )
}

export default IncomeStatementDisplay
