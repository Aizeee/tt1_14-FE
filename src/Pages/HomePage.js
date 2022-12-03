import React, { useState, useEffect } from 'react'
import NavBar1 from '../Components/NavBars/NavBar1'
import Table from 'react-bootstrap/Table';

const bankAccountMockArray = [
  {
    "AccountID": 621156213,
    "UserID": 1,
    "AccountType": "Saving",
    "AcccountBalance": 70200.71
  },
  {
    "AccountID": 958945214,
    "UserID": 1,
    "AccountType": "Current",
    "AcccountBalance": 99720.46
  },
  {
    "AccountID": 828120424,
    "UserID": 2,
    "AccountType": "Multiplier",
    "AcccountBalance": 50640.12
  },
  {
    "AccountID": 322798030,
    "UserID": 3,
    "AccountType": "Multiplier",
    "AcccountBalance": 39740.17
  },
  {
    "AccountID": 353677039,
    "UserID": 3,
    "AccountType": "Saving",
    "AcccountBalance": 76660.21
  },
  {
    "AccountID": 259555772,
    "UserID": 4,
    "AccountType": "Saving",
    "AcccountBalance": 14020.58
  },
  {
    "AccountID": 339657462,
    "UserID": 1,
    "AccountType": "Current",
    "AcccountBalance": 47380.33
  },
  {
    "AccountID": 785703027,
    "UserID": 5,
    "AccountType": "Current",
    "AcccountBalance": 42460.32
  }
]

const Home = () => {

  const [accountData, setAccountData] = useState([])
  
  useEffect(() => {
    //fetch api
    setAccountData(bankAccountMockArray)
  }, [accountData]);

  return (
    <div>
      <NavBar1 />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Account ID</th>
            <th>Account Type</th>
            <th>Acccount Balance</th>
          </tr>
        </thead>
        <tbody>
          {accountData.map((account, index) => {
            return (<tr>
              <td>{account.UserID}</td>
              <td>{account.AccountID}</td>
              <td>{account.AccountType}</td>
              <td>{account.AcccountBalance}</td>
            </tr>);
          })}


        </tbody>
      </Table>
    </div>
  )
}

export default Home