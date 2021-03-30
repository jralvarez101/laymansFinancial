import React, { useState } from 'react'
import styled from 'styled-components'

const API_KEY = '0e75c00c779cdc040d4c23248caa51b1'
const API_URL = 'https://financialmodelingprep.com'
const API_VERSION = '/api/v3/'
const INCOME_STATEMENT_URL = '/income-statement/'
const GET_LIMIT = 3

const PageHeader = styled.h1`
    color: red;
    font-size: 16px;
`


function Results() {

    const [dataList, setDataList] = useState([])
    const [searchInput, setSearchInput] = useState('')

    const handleOnChange = (event)=> {
        const inputValue = event?.target?.value.toUpperCase()??''

        setSearchInput(inputValue)
    }

    const getIncomeStatement = async (event) => {
        event.preventDefault()

        const getIncomeStatementURL = `${API_URL}${API_VERSION}${INCOME_STATEMENT_URL}${searchInput}?limit=${GET_LIMIT}&apikey=${API_KEY}`
        try{

            const response = await fetch(getIncomeStatementURL)
            
            const responseDataList = await response.json()

            setDataList(responseDataList)

        }catch(error){
            console.log('error: ', error)
        }
        
         }
         console.log('data list: ', dataList)
    return (
        <div>
            <PageHeader>The Results Page</PageHeader>
            <h1>Search Value: {searchInput ?? 'no dataList'}</h1>
            <input value={searchInput||''} onChange={handleOnChange}/>
            <button onClick={getIncomeStatement}>Click Me</button>

            {dataList.map(data =>(<div>
                {data?.netIncomeRatio??'default'}<br></br>
                {data?.date}
            </div>))}

        </div>
    )
}

export default Results


