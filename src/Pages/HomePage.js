import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const handleClick = (accountId) => {
    // change navigation link to transaction details page
    navigate("/about", { state: { accountId: accountId } })

    // how to use it on the other page
    /*
    import { useLocation } from "react-router-dom";
    const location = useLocation();
    console.log(location.state.accountId)
    */
  }
  const [accountData, setAccountData] = useState([])

  const fetchApi = async (userId) => {
    try {
      const data = await fetch(`http://localhost:4001/v1/getBankAccountsByUserId/${userId}`)
      const dataJson = await data.json();
      setAccountData(dataJson.map((field) => {
        delete field['_id']
        return field
      }))
    } catch (error) {
      console.log("error")
      setAccountData([]);
    }

  }

  useEffect(() => {
    //fetch api
    // needs to get the user ID from useContext Provider
    fetchApi(1);
  }, [accountData]);

  return (
    <div>
      <NavBar1 />
      <Table striped bordered hover>
        <thead>
          <tr>
            {accountData.length !== 0 ? Object.keys(accountData[0]).map((accountDetailHeader, index) => {
              return (<th key={index}>
                {accountDetailHeader}
              </th>)
            }) : null}
          </tr>
        </thead>
        <tbody>
          {accountData.length !== 0 ? accountData.map((account) => {
            return (
              <tr key={account.accountId} onClick={() => handleClick(account.AccountID)}>
                {Object.values(account).map((accountDetails, index) => {
                  return <td key={index}>{accountDetails}</td>
                })}
              </tr>
            );
          }) : <h1>No Data Available!</h1>}
        </tbody>
      </Table>
    </div>
  )
}

export default Home