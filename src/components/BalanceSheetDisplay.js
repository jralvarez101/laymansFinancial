import React from 'react';

function BalanceSheetDisplay(props) {
    return (
            <div >
                    {props.balanceList.map(data =>(<div>
                    {data.totalCurrentAssets??'default'}<br/>
                    {data.deferredRevenue?? 'default'}<br/>
                    {data.date}
                </div>))}
            </div>
    )
}

export default BalanceSheetDisplay
