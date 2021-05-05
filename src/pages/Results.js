import React, { useState, useEffect } from 'react'
import ResultsTabs from '../components/ResultsTabs';
import Footer from '../components/Footer';
import {Container,  Button} from 'react-bootstrap';


import {
    useParams,
    Link
  } from "react-router-dom";




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

    const {tickerID} = useParams()
    const uppercaseTickerID = tickerID?.toUpperCase()??''

    const getData = ()=> {
        getBalanceSheet();
        getIncomeStatement(); 
        getCashFlowStatement();
    }

    useEffect(()=>{
        if(tickerID)getData()
    },[tickerID])

    console.log('tickerID: ',tickerID)



    const handleOnChange = (event)=> {
        const inputValue = event.target.value.toUpperCase()??''

        setSearchInput(inputValue)
    }
//Income Statement


    const getIncomeStatement = async () => {

        const getIncomeStatementURL = `${API_URL}${API_VERSION}${INCOME_STATEMENT_URL}${uppercaseTickerID}?limit=${GET_LIMIT}&apikey=${API_KEY}`
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

const getBalanceSheet = async () => {

    const getBalanceSheetURL = `${API_URL}${API_VERSION}${BALANCE_SHEET_STATEMENT_URL}${uppercaseTickerID}?limit=${GET_LIMIT}&apikey=${API_KEY}`
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

const getCashFlowStatement = async () => {

    const getCashFlowURL = `${API_URL}${API_VERSION}${CASH_FLOW_URL}${uppercaseTickerID}?limit=${GET_LIMIT}&apikey=${API_KEY}`
    try {
        const response = await fetch(getCashFlowURL)

        const responseDataList = await response.json()

        setCashFlowList(responseDataList)
    }
    catch(error){
        console.log('error', error)
    }
}

// navigateToTickerDetail = 
console.log('data List CashFlow:', cashFlowList)



    return (
        <div className='results-container'>
            <Container  className='results-container' >
                <h1 >Financial Results</h1>
                <h2>Show Financial Statements for: {uppercaseTickerID||searchInput}</h2>
                <input className ="mb-5" value={searchInput||''} onChange={handleOnChange}/>
                <Link to={`/results/${searchInput}`}>
                                <Button className='search-btn' variant="outline-primary">Search</Button>
                        </Link>
                {/* <button className='results-btn' variant="outline-primary" onClick={getData}>Search</button> */}
            </Container>
            <ResultsTabs incomeList={incomeList} balanceList={balanceList} cashFlowList={cashFlowList}/>
           
            <Footer/>

        </div>
    )
}

export default Results


