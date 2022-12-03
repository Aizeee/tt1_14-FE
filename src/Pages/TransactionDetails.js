import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import axios from "../axiosAuth/api/axios";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";

export default function TransactionDetails() {
  const { id } = useParams();
  const [allAccountData, setAllAccountData] = useState([]);
  const [toBeDelete, setToBeDelete] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      try {
        let response = await axios.get(`/v1/getTransactionsByUserId/${id}`);
        setAllAccountData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchApi();
  }, []);

  ///////////////////////////////////////////////////////////
  function handleDelete() {
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
      <tbody>
        <tr>
          <td>Account{accountContainer.id}</td>
          <td>{accountContainer.TransactionID}</td>
          <td>{accountContainer.AccountID}</td>
          <td>{accountContainer.Date}</td>
          <td>{accountContainer.TransactionAmount}</td>
          <td>{accountContainer.Comment}</td>
          <Button
            variant="primary"
            className="exchangeButton"
            onClick={handleDelete}
          >
            delete
          </Button>
        </tr>
      </tbody>
      {/*  */}
      {/* <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Account{accountContainer.id}</Card.Title>

          <Row>
            <Button
              variant="primary"
              className="exchangeButton"
              onClick={handleDelete}
            >
              delete
            </Button>
          </Row>
        </Card.Body>
      </Card> */}
    </>
  ));

  return (
    <>
      <h3>John</h3>
      <div className="allCards">{element}</div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>{element}</tbody>
      </Table>
    </>
  );
}
