import React , {useState} from 'react';
import {Table} from 'react-bootstrap';
import { BsFillCaretRightFill } from "react-icons/bs";
import moment from 'moment';

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
    const tableHasData = Boolean (balanceSheetSymbol)

    const [isOpenCurrentAsset, setIsOpenCurrentAsset] = useState(false);
    const [isOpenNonCurrentAsset, setIsOpenNonCurrentAsset] = useState(false);
    const [isOpenCurrentLiabilities, setIsOpenCurrentLiabilities] = useState(false);
    const [isOpenNonCurrentLiabilities, setIsOpenNonCurrentLiabilities] = useState(false);
    const [isOpenStockHoldersEquity, setIsOpenStockHoldersEquity] = useState(false);

   
    // reduce result of number by 1000.
    const reducedNumber  = (value) => {
        if(value && value > 0 && typeof value === 'number'){

            return value/1000;
        }

        return 0
    }
        
    const formatedDate = (value) => {
        return moment(value,'YYYY-MM-DD').format('MMM YYYY')
        
    }
    
// const displayedDate = balanceSheetObj.date;
// console.log(displayedDate);
// const m = moment(displayedDate,'YYYY-MM-DD').format('MMM,YYYY');
// console.log(m);

    return (
            <div >
                
                    <Table responsive bordered striped className='table-text'>
                        <thead>
                            <tr>
                            <th>Balance Sheet for {balanceSheetSymbol}<small>(ALL IN THOUSANDS)</small></th>
                            {balanceSheetObj.date?.map((value, index) => (
                            <th key={index}>{formatedDate(value)}</th>
                            ))}
                            </tr>
                        </thead>
                        <tbody>
                            {/* first level title*/}
                            <tr>
                                <td className="font-weight-bold">ASSETS</td>
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
                                {/* first level */}
                            <td className="font-weight-bold">Total Assets</td>
                                {balanceSheetObj.totalAssets?.map((value, index) => (
                            <td className="font-weight-bold" key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>
                            {/* first level indented */}
                            <tr>
                                <td className="font-weight-bold"> 
                                <BsFillCaretRightFill className={`animateTransition ${isOpenCurrentAsset? "iconOpen ":""}`} onClick={() => setIsOpenCurrentAsset(!isOpenCurrentAsset)}/> 
                                Total Current Assets</td>
                                {balanceSheetObj.totalCurrentAssets?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>
                            {/* sub current assets */}
                        
                        {isOpenCurrentAsset && 
                        <tr>
                                <td >Cash and Cash Equivalents</td>
                                {balanceSheetObj.cashAndCashEquivalents?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>}
                            {isOpenCurrentAsset && <tr>
                                <td>Short Term Investments</td>
                                {balanceSheetObj.shortTermInvestments?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>}
                            {isOpenCurrentAsset && <tr>
                                <td>Other Current Assets</td>
                                {balanceSheetObj.otherCurrentAssets?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>}
                            {isOpenCurrentAsset && <tr>
                                <td>Receivables</td>
                                {balanceSheetObj.netReceivables?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>}
                            {isOpenCurrentAsset && <tr>
                                <td>Inventory</td>
                                {balanceSheetObj.inventory?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr> }
                        
                        
                            {/* first level indented */}
                            <tr>
                                <td className="font-weight-bold"> 
                                <BsFillCaretRightFill className={`animateTransition ${isOpenNonCurrentAsset? "iconOpen ":""}`}  onClick={() => setIsOpenNonCurrentAsset(!isOpenNonCurrentAsset)}/>  Total Non-Current Assets</td>
                                {balanceSheetObj.totalNonCurrentAssets?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>
                            {/* sub for non-current assets */}
                            {isOpenNonCurrentAsset && <tr>
                                <td>Net PPE</td>
                                {balanceSheetObj.propertyPlantEquipmentNet?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>}
                            {isOpenNonCurrentAsset && <tr>
                                <td>Goodwill</td>
                                {balanceSheetObj.goodwill?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>}
                            {isOpenNonCurrentAsset && <tr>
                                <td>Intangible Assets</td>
                                {balanceSheetObj.intangibleAssets?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>}
                            {isOpenNonCurrentAsset && <tr>
                            <td>Long Term Investments</td>
                                {balanceSheetObj.longTermInvestments?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>}
                            {isOpenNonCurrentAsset && <tr>
                            <td>Tax Assets</td>
                                {balanceSheetObj.taxAssets?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>}
                            {isOpenNonCurrentAsset && <tr>
                                <td>Other Non-Current Assets</td>
                                {balanceSheetObj.otherNonCurrentAssets?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>}
                            {/* first level title*/}
                            <tr>
                                <td className="font-weight-bold">LIABILITIES AND STOCKHOLDER'S EQUITY</td>
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
                            {/* first level */}
                            <tr>
                                <td className="font-weight-bold">Total Liabilities and Stockholder's Equity</td>
                                {balanceSheetObj.totalLiabilitiesAndStockholdersEquity?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>
                            <tr>
                                {/* first level indented */}
                                <td className="font-weight-bold"> Total Liabilities (Current and Non-Current)</td>
                                {balanceSheetObj.totalLiabilities?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>
                            {/* sub for Total liabilities */}
                            <tr>
                                <td className="font-weight-bold"> <BsFillCaretRightFill className={`animateTransition ${isOpenCurrentLiabilities? "iconOpen ":""}`}  onClick={() => setIsOpenCurrentLiabilities(!isOpenCurrentLiabilities)}/> Total Current Liabilities</td>
                                {balanceSheetObj.totalCurrentLiabilities?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>
                            {/* sub for total current liabilities */}
                        {isOpenCurrentLiabilities && <tr>
                                <td>Account Payables</td>
                                {balanceSheetObj.accountPayables?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>}
                            {isOpenCurrentLiabilities && <tr>
                                <td>Short Term Debt</td>
                                {balanceSheetObj.shortTermDebt?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>}
                            {isOpenCurrentLiabilities && <tr>
                                <td>Tax Payables</td>
                                {balanceSheetObj.taxPayables?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>}
                            {isOpenCurrentLiabilities && <tr>
                                <td>Deferred Revenue</td>
                                {balanceSheetObj.deferredRevenue?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>}
                            {isOpenCurrentLiabilities && <tr>
                                <td>Other Current Liabilities</td>
                                {balanceSheetObj.otherCurrentLiabilities?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>}
                                {/* first level indented */}
                            <tr>
                                <td className="font-weight-bold"> <BsFillCaretRightFill className={`animateTransition ${isOpenNonCurrentLiabilities? "iconOpen ":""}`}  onClick={() => setIsOpenNonCurrentLiabilities(!isOpenNonCurrentLiabilities)}/>  Total Non-Current Liabilities</td>
                                {balanceSheetObj.totalNonCurrentLiabilities?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>
                                {/* sub for total non-current Liabilities*/}
                            {isOpenNonCurrentLiabilities && <tr>
                                <td>Long Term Debt</td>
                                {balanceSheetObj.longTermDebt?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>}
                            {isOpenNonCurrentLiabilities && <tr>
                                <td>Deferred Revenue Non-Current</td>
                                {balanceSheetObj.deferredRevenueNonCurrent?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>}
                            {isOpenNonCurrentLiabilities && <tr>
                                <td>Deferred Tax Liabilities Non-Current</td>
                                {balanceSheetObj.deferredTaxLiabilitiesNonCurrent?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>}
                            {isOpenNonCurrentLiabilities && <tr>
                                <td>Other Non-Current Liabilities</td>
                                {balanceSheetObj.otherNonCurrentLiabilities?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>}
                                {/* first level indented*/}
                            <tr>
                                <td className="font-weight-bold"> <BsFillCaretRightFill className={`animateTransition ${isOpenStockHoldersEquity? "iconOpen ":""}`}  onClick={() => setIsOpenStockHoldersEquity(!isOpenStockHoldersEquity)}/>  Total Stockholder's Equity</td>
                                {balanceSheetObj.totalStockholdersEquity?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>
                            {/* sub for Stock Holders equity */}
                            {isOpenStockHoldersEquity && <tr>
                                <td>Common Stock</td>
                                {balanceSheetObj.commonStock?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>}
                            {isOpenStockHoldersEquity && <tr>
                                <td>Retained Earnings</td>
                                {balanceSheetObj.retainedEarnings?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>}
                            {isOpenStockHoldersEquity && <tr>
                                <td>Comprehensive Income Loss</td>
                                {balanceSheetObj.accumulatedOtherComprehensiveIncomeLoss?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>}
                            {isOpenStockHoldersEquity && <tr>
                                <td>Other Total Stockholder's Equity</td>
                                {balanceSheetObj.othertotalStockholdersEquity?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>}
                            {isOpenStockHoldersEquity && <tr>
                                <td>Comprehensive Income Loss</td>
                                {balanceSheetObj.accumulatedOtherComprehensiveIncomeLoss?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>}
                            {/* first level (non-indented) */}
                            <tr>
                                <td className="font-weight-bold">Total Investments</td>
                                {balanceSheetObj.totalInvestments?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>
                            {/* first level (non-indented) */}
                            <tr>
                                <td className="font-weight-bold">Total Debt</td>
                                {balanceSheetObj.totalDebt?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>
                            {/* first level (non-indented) */}
                            <tr>
                                <td className="font-weight-bold">Net Debt</td>
                                {balanceSheetObj.netDebt?.map((value, index) => (
                            <td key={index}>{reducedNumber(value)}</td>
                            ))}
                            </tr>
                        </tbody>
                    </Table>
                
            </div>
    )
}

export default BalanceSheetDisplay
