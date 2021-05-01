import React from 'react';
import {Table, Container} from 'react-bootstrap';
import moment from 'moment';
moment().format();

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


function IncomeStatementDisplay({incomeList}) {
    const incomeObj = incomeList?formatTable(incomeList):{}
    const incomeStatementSymbol = incomeObj.symbol && incomeObj.symbol[0]

     // reduce result of number by 1000.
     const reducedNumber  = (value) => {
        if(value && value !== 0 && typeof value === 'number'){

            return value/1000;
        }

        return 0
    }
    const formatedDate = (value) => {
        return moment(value,'YYYY-MM-DD').format('MMM YYYY')
        
    }

    return (
        <Container>
            <Table responsive bordered striped>
                <thead>
                    <tr>
                    <th>Income Statement for {incomeStatementSymbol} in (000's)</th>
                    {incomeObj.date?.map((value, index) => (
                    <th key={index}>{formatedDate(value)}</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="font-weight-bold">Revenue</td>
                        {incomeObj.revenue?.map((value, index) => (
                    <td className="font-weight-bold" key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td > - Cost of Goods Sold</td>
                        {incomeObj.costOfRevenue?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td> - Research and Development Expenses</td>
                        {incomeObj.researchAndDevelopmentExpenses?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td> - Selling and Marketing Expenses</td>
                        {incomeObj.sellingAndMarketingExpenses?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td> - Other Expenses</td>
                        {incomeObj.otherExpenses?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Total Operating Expenses</td>
                        {incomeObj.operatingExpenses?.map((value, index) => (
                    <td  className="font-weight-bold" key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td className="font-weight-bold">OTHER EXPENSES</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td> - Cost and Expenses</td>
                        {incomeObj.costAndExpenses?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td> - Interest Expense</td>
                        {incomeObj.interestExpense?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td> - Depreciation and Amortization</td>
                        {incomeObj.depreciationAndAmortization?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Operating Profit</td>
                        {incomeObj.operatingIncome?.map((value, index) => (
                    <td className="font-weight-bold" key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td> - Total Other Income Expenses Net</td>
                        {incomeObj.totalOtherIncomeExpensesNet?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Income Before Tax</td>
                        {incomeObj.incomeBeforeTax?.map((value, index) => (
                    <td className="font-weight-bold" key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td > - Income Tax Expense</td>
                        {incomeObj.incomeTaxExpense?.map((value, index) => (
                    <td key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Net Income</td>
                        {incomeObj.netIncome?.map((value, index) => (
                    <td className="font-weight-bold" key={index}>{reducedNumber(value)}</td>
                    ))}
                    </tr>
                
                </tbody>
            </Table>
        </Container>
    )
}

export default IncomeStatementDisplay
