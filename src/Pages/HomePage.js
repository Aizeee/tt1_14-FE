import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import NavBar1 from '../Components/NavBars/NavBar1'
import Table from 'react-bootstrap/Table';

import { UserAuth } from "../Context/AuthContext";

const Home = () => {

  const [user, setUser] = UserAuth()
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
    fetchApi(user.data.user.UserID);
  },[]);

  return (
    <div>
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