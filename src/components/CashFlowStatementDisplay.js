import React from 'react'
import {Table} from 'react-bootstrap';
import moment from 'moment';
moment().format();

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
    const tableHasData = Boolean (cashFlowStatementSymbol)

    // reduce result of number by 1000.
    const reducedNumber  = (value) => {
        if(value && value !== 0 && typeof value === 'number'){

            return value/1000;
        }

        return 0
    }

    const formattedDate = (value) => {
        return moment(value,'YYYY-MM-DD').format('MMM YYYY')
        
    }

    return (
        <div>
            <Table responsive bordered striped className='table-text'>
                <thead>
                    <tr>
                    <th>Cash Flow from Operating Activities {cashFlowStatementSymbol} <small>(ALL IN THOUSANDS)</small></th>
                    {cashFlowObj.date?.map((value, index) => (
                    <th key={index}>{formattedDate(value)}</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="font-weight-bold">Net Income</td>
                        {cashFlowObj.netIncome?.map((value, index) => (
                    <td className="font-weight-bold" key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td > - Depreciation and Amortization</td>
                        {cashFlowObj.depreciationAndAmortization?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td> - Stock Based Compensation</td>
                        {cashFlowObj.stockBasedCompensation?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td> - Deferred Income Tax</td>
                        {cashFlowObj.deferredIncomeTax?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Changes in Operating Assets and Liabilities</td>
                        {tableHasData &&
                                <React.Fragment>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </React.Fragment>
                                }
                       
                    </tr>
                    <tr>
                        <td> - Inventory</td>
                        {cashFlowObj.inventory?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td> - Accounts Receivables</td>
                        {cashFlowObj.accountsReceivables?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td> - Accounts Payables</td>
                        {cashFlowObj.accountsPayables?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td > - Change in Working Capital</td>
                        {cashFlowObj.changeInWorkingCapital?.map((value, index) => (
                    <td  key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td> - Other Working Capital</td>
                        {cashFlowObj.otherWorkingCapital?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td > - Other Non-Cash Items</td>
                        {cashFlowObj.otherNonCashItems?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Net Cash Provided By Operating Activities</td>
                        {cashFlowObj.netCashProvidedByOperatingActivities?.map((value, index) => (
                    <td className="font-weight-bold" key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                </tbody>
            </Table>

            <Table responsive bordered striped className='table-text'>
                <thead>
                    <tr>
                    <th>Investing Activities for {cashFlowStatementSymbol} <small>(ALL IN THOUSANDS)</small></th>
                    {cashFlowObj.date?.map((value, index) => (
                    <th key={index}>{formattedDate(value)}</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td > - Investment in Property Plant and Equipment</td>
                        {cashFlowObj.investmentsInPropertyPlantAndEquipment?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td > - Acquisitions Net</td>
                        {cashFlowObj.acquisitionsNet?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td> - Purchase of Investments</td>
                        {cashFlowObj.purchasesOfInvestments?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td> - Sales and Maturities of marketable Securities</td>
                        {cashFlowObj.salesMaturitiesOfInvestments?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td> - Other Investing Activities</td>
                        {cashFlowObj.otherInvestingActivites?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Net Cash Used for Investing Activities</td>
                        {cashFlowObj.netCashUsedForInvestingActivites?.map((value, index) => (
                    <td  className="font-weight-bold" key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>   
                </tbody>
            </Table>

            <Table responsive bordered striped className='table-text'>
                <thead>
                    <tr>
                    <th> - Financing Activities for {cashFlowStatementSymbol} <small>(ALL IN THOUSANDS)</small></th>
                    {cashFlowObj.date?.map((value, index) => (
                    <th key={index}>{formattedDate(value)}</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td > - Debt Repayment</td>
                        {cashFlowObj.debtRepayment?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td > - Common Stock Issued</td>
                        {cashFlowObj.commonStockIssued?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td> - Common Stock Purchased</td>
                        {cashFlowObj.commonStockRepurchased?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td> - Dividends Paid</td>
                        {cashFlowObj.dividendsPaid?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td> - Other Financing Activities</td>
                        {cashFlowObj.otherFinancingActivites?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Net Cash Provided by Financing Activities</td>
                        {cashFlowObj.netCashUsedProvidedByFinancingActivities?.map((value, index) => (
                    <td  className="font-weight-bold" key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>   
                </tbody>
            </Table>

            <Table responsive bordered striped className='table-text'>
                <tbody>
                    <tr>
                    <td >Foreign Currency on Cash and Cash Equivalents</td>
                        {cashFlowObj.effectOfForexChangesOnCash?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td >Net Change in Cash</td>
                        {cashFlowObj.netChangeInCash?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td className="font-weight-bold">CASH AND CASH EQUIVALENTS, END OF PERIOD</td>
                        {cashFlowObj.cashAtEndOfPeriod?.map((value, index) => (
                    <td  className="font-weight-bold" key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>   
                </tbody>
            </Table>
       
         </div>
    )
}

export default CashFlowStatementDisplay;
