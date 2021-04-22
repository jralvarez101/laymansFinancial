import React from 'react'
import {Table, Container} from 'react-bootstrap';

const formatTable =(response=[])=>{
    if(response.length<1)return {}
    const firstResponse = response[0];

    const responseKeys = Object.keys(firstResponse);
    const obj = {};
    
    responseKeys.forEach((key) => (obj[key] = []));
    
    response.forEach((cashFlowStatement) => {
      // 5x
      responseKeys.forEach((key) => {
        // length amount of keys in object
        obj[key].push(cashFlowStatement[key]);
      });
    });
   
    return obj
}

function CashFlowStatementDisplay({cashFlowList}) {
    const cashFlowObj = cashFlowList?formatTable(cashFlowList):{}
    const cashFlowStatementSymbol = cashFlowObj.symbol && cashFlowObj.symbol[0]
    return (
        <Container>
            <Table responsive bordered striped>
                <thead>
                    <tr>
                    <th>Cash Flow from Operating Activities {cashFlowStatementSymbol}</th>
                    {cashFlowObj.date?.map((value, index) => (
                    <th key={index}>{value}</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="font-weight-bold">Net Income</td>
                        {cashFlowObj.netIncome?.map((value, index) => (
                    <td className="font-weight-bold" key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td >Depreciation and Amortization</td>
                        {cashFlowObj.depreciationAndAmortization?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Stock Based Compensation</td>
                        {cashFlowObj.stockBasedCompensation?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Deferred Income Tax</td>
                        {cashFlowObj.deferredIncomeTax?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Changes in Operating Assets and Liabilities</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Inventory</td>
                        {cashFlowObj.inventory?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Accounts Receivables</td>
                        {cashFlowObj.accountsReceivables?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Accounts Payables</td>
                        {cashFlowObj.accountsPayables?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td >Change in Working Capital</td>
                        {cashFlowObj.changeInWorkingCapital?.map((value, index) => (
                    <td  key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Other Working Capital</td>
                        {cashFlowObj.otherWorkingCapital?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td >Other Non-Cash Items</td>
                        {cashFlowObj.otherNonCashItems?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Net Cash Provided By Operating Activities</td>
                        {cashFlowObj.netCashProvidedByOperatingActivities?.map((value, index) => (
                    <td className="font-weight-bold" key={index}>{value}</td>
                    ))}
                    </tr>
                </tbody>
            </Table>

            <Table responsive bordered striped>
                <thead>
                    <tr>
                    <th>Investing Activities for {cashFlowStatementSymbol}</th>
                    {cashFlowObj.date?.map((value, index) => (
                    <th key={index}>{value}</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td >Investment in Property Plant and Equipment</td>
                        {cashFlowObj.investmentsInPropertyPlantAndEquipment?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td >Acquisitions Net</td>
                        {cashFlowObj.acquisitionsNet?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Purchase of Investments</td>
                        {cashFlowObj.purchasesOfInvestments?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Sales and Maturities of marketable Securities</td>
                        {cashFlowObj.salesMaturitiesOfInvestments?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Other Investing Activities</td>
                        {cashFlowObj.otherInvestingActivites?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Net Cash Used for Investing Activities</td>
                        {cashFlowObj.netCashUsedForInvestingActivites?.map((value, index) => (
                    <td  className="font-weight-bold" key={index}>{value}</td>
                    ))}
                    </tr>   
                </tbody>
            </Table>
        </Container>
        
    )
}

export default CashFlowStatementDisplay;
