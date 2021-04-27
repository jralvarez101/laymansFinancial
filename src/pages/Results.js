import React, { useState} from 'react'
import ResultsTabs from '../components/ResultsTabs';
import Footer from '../components/Footer';




// url = 'https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=120&apikey=0e75c00c779cdc040d4c23248caa51b1'

const API_KEY = '0e75c00c779cdc040d4c23248caa51b1'
const API_URL = 'https://financialmodelingprep.com'
const API_VERSION = '/api/v3/'
const INCOME_STATEMENT_URL = '/income-statement/'
const BALANCE_SHEET_STATEMENT_URL = '/balance-sheet-statement/'
const CASH_FLOW_URL = '/cash-flow-statement/'
const GET_LIMIT = 5


function Results() {

    const [incomeList, setIncomeList] = useState([])
    const [balanceList, setBalanceList] = useState([])
    const [cashFlowList, setCashFlowList] = useState([])
    const [searchInput, setSearchInput] = useState('')

    const handleOnChange = (event)=> {
        const inputValue = event.target.value.toUpperCase()??''

        setSearchInput(inputValue)
    }
//Income Statement


    const getIncomeStatement = async (event) => {
        event.preventDefault()

        const getIncomeStatementURL = `${API_URL}${API_VERSION}${INCOME_STATEMENT_URL}${searchInput}?limit=${GET_LIMIT}&apikey=${API_KEY}`
        try{

            const response = await fetch(getIncomeStatementURL)
            
            const responseDataList = await response.json()

            setIncomeList(responseDataList)

        }catch(error){
            console.log('error: ', error)
        }
        
         }
         console.log('data list IncomeStatement: ', incomeList)

//Balance Sheet

const getBalanceSheet = async (event) => {
    event.preventDefault()

    const getBalanceSheetURL = `${API_URL}${API_VERSION}${BALANCE_SHEET_STATEMENT_URL}${searchInput}?limit=${GET_LIMIT}&apikey=${API_KEY}`
    try {
        const response = await fetch(getBalanceSheetURL)

        const responseDataList = await response.json()

        setBalanceList(responseDataList)
    }
    catch(error){
        console.log('error', error)
    }
}
console.log('data List Balance Sheet:', balanceList)

//Cash Flow Statement

const getCashFlowStatement = async (event) => {
    event.preventDefault()

    const getCashFlowURL = `${API_URL}${API_VERSION}${CASH_FLOW_URL}${searchInput}?limit=${GET_LIMIT}&apikey=${API_KEY}`
    try {
        const response = await fetch(getCashFlowURL)

        const responseDataList = await response.json()

        setCashFlowList(responseDataList)
    }
    catch(error){
        console.log('error', error)
    }
}
console.log('data List CashFlow:', cashFlowList)

    const getData = (e)=> {
        getBalanceSheet(e);
        getIncomeStatement(e); 
        getCashFlowStatement(e);
    }

    return (
        <div>
            <h1>The Results Page</h1>
            <h1>Search Value: {searchInput ?? 'no dataList'}</h1>
            <input value={searchInput||''} onChange={handleOnChange}/>
            <button onClick={getData}>Click Me</button>
            <ResultsTabs incomeList={incomeList} balanceList={balanceList} cashFlowList={cashFlowList}/>
            <Footer/>

        </div>
    )
}

export default Results


