import React from 'react';
import {Table, Container} from 'react-bootstrap';

const formatTable =(response=[])=>{
    if(response.length<1)return {}
    const firstResponse = response[0];

    const responseKeys = Object.keys(firstResponse);
    const obj = {};
    
    responseKeys.forEach((key) => (obj[key] = []));
    
    response.forEach((balanceSheet) => {
      // 5x
      responseKeys.forEach((key) => {
        // length amount of keys in object
        obj[key].push(balanceSheet[key]);
      });
    });
   
    return obj
}

function BalanceSheetDisplay({balanceList}) {
    const balanceSheetObj = balanceList?formatTable(balanceList):{}
    const balanceSheetSymbol = balanceSheetObj.symbol && balanceSheetObj.symbol[0]
    return (
            <div >
                <Container>
                <Table responsive bordered striped>
                <thead>
                    <tr>
                    <th>Balance Sheet for {balanceSheetSymbol}</th>
                    {balanceSheetObj.date?.map((value, index) => (
                    <th key={index}>{value}</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    {/* first level title*/}
                    <tr>
                        <td className="font-weight-bold">ASSETS</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        {/* first level */}
                    <td className="font-weight-bold">Total Assets</td>
                        {balanceSheetObj.totalAssets?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    {/* first level indented */}
                    <tr>
                        <td className="font-weight-bold"> - Total Current Assets</td>
                        {balanceSheetObj.totalCurrentAssets?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    {/* sub current assets */}
                    <tr>
                        <td >Cash and Cash Equivalents</td>
                        {balanceSheetObj.cashAndCashEquivalents?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Short Term Investments</td>
                        {balanceSheetObj.shortTermInvestments?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Other Current Assets</td>
                        {balanceSheetObj.otherCurrentAssets?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Receivables</td>
                        {balanceSheetObj.netReceivables?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Inventory</td>
                        {balanceSheetObj.inventory?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    {/* first level indented */}
                    <tr>
                        <td className="font-weight-bold"> - Total Non-Current Assets</td>
                        {balanceSheetObj.totalNonCurrentAssets?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    {/* sub for non-current assets */}
                    <tr>
                        <td>Net PPE</td>
                        {balanceSheetObj.propertyPlantEquipmentNet?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Goodwill</td>
                        {balanceSheetObj.goodwill?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Intangible Assets</td>
                        {balanceSheetObj.intangibleAssets?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Long Term Investments</td>
                        {balanceSheetObj.longTermInvestments?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Tax Assets</td>
                        {balanceSheetObj.taxAssets?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Other Non-Current Assets</td>
                        {balanceSheetObj.otherNonCurrentAssets?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    {/* first level title*/}
                    <tr>
                        <td className="font-weight-bold">LIABILITIES AND STOCKHOLDER'S EQUITY</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    {/* first level */}
                    <tr>
                        <td className="font-weight-bold">Total Liabilities and Stockholder's Equity</td>
                        {balanceSheetObj.totalLiabilitiesAndStockholdersEquity?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        {/* first level indented */}
                        <td className="font-weight-bold"> - Total Liabilities</td>
                        {balanceSheetObj.totalLiabilities?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    {/* sub for Total liabilities */}
                    <tr>
                        <td className="font-weight-bold">Total Current Liabilities</td>
                        {balanceSheetObj.totalCurrentLiabilities?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    {/* sub for total current liabilities */}
                    <tr>
                        <td>Account Payables</td>
                        {balanceSheetObj.accountPayables?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Short Term Debt</td>
                        {balanceSheetObj.shortTermDebt?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Tax Payables</td>
                        {balanceSheetObj.taxPayables?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Deferred Revenue</td>
                        {balanceSheetObj.deferredRevenue?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Other Current Liabilities</td>
                        {balanceSheetObj.otherCurrentLiabilities?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                        {/* first level indented */}
                    <tr>
                        <td className="font-weight-bold"> - Total Non-Current Liabilities</td>
                        {balanceSheetObj.totalNonCurrentLiabilities?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                        {/* sub for total non-current Liabilities*/}
                    <tr>
                        <td>Long Term Debt</td>
                        {balanceSheetObj.longTermDebt?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Deferred Revenue Non-Current</td>
                        {balanceSheetObj.deferredRevenueNonCurrent?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Deferred Tax Liabilities Non-Current</td>
                        {balanceSheetObj.deferredTaxLiabilitiesNonCurrent?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Other Non-Current Liabilities</td>
                        {balanceSheetObj.otherNonCurrentLiabilities?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                        {/* first level indented*/}
                    <tr>
                        <td className="font-weight-bold"> - Total Stockholder's Equity</td>
                        {balanceSheetObj.totalStockholdersEquity?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    {/* sub for Stock Holders equity */}
                    <tr>
                        <td>Common Stock</td>
                        {balanceSheetObj.commonStock?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Retained Earnings</td>
                        {balanceSheetObj.retainedEarnings?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Comprehensive Income Loss</td>
                        {balanceSheetObj.accumulatedOtherComprehensiveIncomeLoss?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Other Total Stockholder's Equity</td>
                        {balanceSheetObj.othertotalStockholdersEquity?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    <tr>
                        <td>Comprehensive Income Loss</td>
                        {balanceSheetObj.accumulatedOtherComprehensiveIncomeLoss?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    {/* first level (non-indented) */}
                    <tr>
                        <td className="font-weight-bold">Total Investments</td>
                        {balanceSheetObj.totalInvestments?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    {/* first level (non-indented) */}
                    <tr>
                        <td className="font-weight-bold">Total Debt</td>
                        {balanceSheetObj.totalDebt?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                    {/* first level (non-indented) */}
                    <tr>
                        <td className="font-weight-bold">Net Debt</td>
                        {balanceSheetObj.netDebt?.map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                    </tr>
                </tbody>
            </Table>
                </Container>
                      {/* <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        data-toggle="collapse"
                        data-target=".multi-collapse1"
                        aria-controls="multiCollapseExample1"
                    >
                        <td>1</td>
                        <td>TEST 123</td>
                        <td>test123@test.com</td>
                    </tr>
                    <tr class="collapse multi-collapse1" id="multiCollapseExample1">
                        <td>Child col 1</td>
                        <td>Child col 2</td>
                        <td>Child col 3</td>
                    </tr>
                    <tr
                        data-toggle="collapse"
                        data-target=".multi-collapse2"
                        aria-controls="multiCollapseExample2"
                    >
                        <td>2</td>
                        <td>TEST 456</td>
                        <td>test456@test.com</td>
                    </tr>
                    <tr class="collapse multi-collapse2" id="multiCollapseExample2">
                        <td>Child col 1</td>
                        <td>Child col 2</td>
                        <td>Child col 3</td>
                    </tr>
                </tbody>
            </Table> */}


            </div>
    )
}

export default BalanceSheetDisplay
