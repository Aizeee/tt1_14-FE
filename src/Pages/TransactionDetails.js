import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import axios from "../axiosAuth/api/axios";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useLocation } from "react-router-dom";
/* import dayjs, { Dayjs } from "dayjs"; */
export default function TransactionDetails() {
  const accountIdObj = useLocation();
  console.log(accountIdObj);

  const alyssa = "2022-11-08T04:00:00.000Z";

  const { id } = useParams();
  const [allAccountData, setAllAccountData] = useState([
    {
      TransactionID: 1,
      AccountID: 621156213,
      ReceivingAccountID: 339657462,
      Date: "2022-11-08T04:00:00.000Z",
      TransactionAmount: 500.0,
      Comment: "Monthly Pocket Money",
    },
  ]);
  const [toBeDelete, setToBeDelete] = useState({ TransactionID: "" });

  /*  useEffect(() => {
    const fetchApi = async () => {
      try {
        let response = await axios.get(`/v1/getTransactionsByAccountId/${id}`);
        setAllAccountData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchApi();
  }, []); */

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
  }
  ///////////////////////////////////////////////////////////
  const element = allAccountData.map((accountContainer) => (
    <>
      <tr>
        <td>Account{accountContainer.id}</td>
        <td>{accountContainer.TransactionID}</td>
        <td>{accountContainer.AccountID}</td>
        <td>{accountContainer.Date}</td>
        <td>{accountContainer.TransactionAmount}</td>
        <td>{accountContainer.Comment}</td>
        <td>
          <Button
            variant="primary"
            className="deleteButton"
            onClick={() => handleDelete(accountContainer.TransactionID)}
          >
            delete
          </Button>
        </td>
      </tr>
    </>
  ));

  return (
    <>
      <h3>John</h3>
      <Link to="/scheduletransaction" state={accountIdObj}>
        <Button variant="primary" className="createButton">
          Schedule New Transaction
        </Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User id</th>
            <th>TransactionID</th>
            <th>AccountID</th>
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
