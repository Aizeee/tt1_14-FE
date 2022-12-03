import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "../axiosAuth/api/axios";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
export default function TransactionDetails() {
  const accountIdObj = useLocation().state;
  console.log(accountIdObj);
  let accountsForThisUser = [];

  const { id } = useParams();
  const [allAccountData, setAllAccountData] = useState([]);
  const [toBeDelete, setToBeDelete] = useState({ TransactionID: "" });

  useEffect(() => {
    const fetchApi = async () => {
      try {
        let response = await axios.get(`/v1/getTransactionsByAccountId/${id}`);
        setAllAccountData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchApi();
    accountsForThisUser = allAccountData.filter((accountObj) => {
      if (accountObj.Transactions.AccountID == accountIdObj.accountId) {
        return accountObj;
      }
    });
  }, []);

  ///////////////////////////////////////////////////////////
  function handleDelete(transactionId) {
    setToBeDelete({ TransactionID: String(transactionId) });
    const fetchApi = async () => {
      try {
        let response = await axios.delete("/v1/delTransactions", {
          data: { toBeDelete },
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchApi();
  }
  ///////////////////////////////////////////////////////////
  const element = accountsForThisUser.map((accountContainer) => (
    <>
      <tr>
        <td>{accountContainer.Transactions.TransactionID}</td>
        <td>{accountContainer.Transactions.ReceivingAccountID}</td>
        <td>{dayjs().format(accountContainer.Transactions.Date)}</td>
        <td>{accountContainer.Transactions.TransactionAmount}</td>
        <td>{accountContainer.Transactions.Comment}</td>

        <td>
          <Button
            variant="danger"
            className="deleteButton"
            onClick={() => handleDelete(accountContainer.TransactionID)}
          >
            Delete
          </Button>
        </td>
      </tr>
    </>
  ));

  return (
    <>
      <h3>{accountIdObj.accountId}</h3>
      <Link to="/scheduletransaction" state={accountIdObj}>
        <Button variant="primary" className="createButton">
          Schedule New Transaction
        </Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Receiving Acct ID</th>
            <th>Date</th>
            <th>Transaction Amount</th>
            <th>Comment</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{element}</tbody>
      </Table>
    </>
  );
}
