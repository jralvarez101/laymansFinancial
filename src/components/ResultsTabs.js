import React, {useState}from 'react';
import {Tabs, Tab, Container} from 'react-bootstrap';
import BalanceSheetDisplay from './BalanceSheetDisplay';
import CashFlowStatementDisplay from './CashFlowStatementDisplay';
import IncomeStatementDisplay from './IncomeStatementDisplay';




function ResultsTabs(props) {
    const [key, setKey] = useState('balanceSheet');
  
    return (
      <Container className='table-container'>
          <Tabs
         
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab  eventKey="balanceSheet" title="Balance Sheet">
        <BalanceSheetDisplay balanceList={props.balanceList}/>
        </Tab>
        <Tab eventKey="incomeStatement" title="Income Statement">
        <IncomeStatementDisplay incomeList={props.incomeList}/>
        </Tab>
        <Tab  eventKey="cashFlowStatement" title="Cash Flow Statement">
         <CashFlowStatementDisplay cashFlowList= {props.cashFlowList}/>
        </Tab>
      </Tabs>
     
      </Container>
    );
  }

export default ResultsTabs;