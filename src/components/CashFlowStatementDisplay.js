import React from 'react'

const formatTable =(response=[])=>{
    if(response.length<1)return {}
    const firstResponse = response[0];

    const responseKeys = Object.keys(firstResponse);
    const obj = {};
    
    responseKeys.forEach((key) => (obj[key] = []));
    
    response.forEach((incomeStatement) => {
      // 5x
      responseKeys.forEach((key) => {
        // length amount of keys in object
        obj[key].push(incomeStatement[key]);
      });
    });
   
    return obj
}

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
