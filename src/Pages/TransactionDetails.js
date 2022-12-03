import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

export default function TransactionDetails() {
  const [allAccountData, setAllAccountData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        let response = await api.get("");
        setAllAccountData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchApi();
  }, []);

  ///////////////////////////////////////////////////////////
  const element = allAccountData.map((accountContainer) => (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Account {accountContainer.id}</Card.Title>
          <Card.Text>text 1</Card.Text>
          <Card.Text>text 2</Card.Text>
          <Card.Text>text 3</Card.Text>

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
      </Card>
    </>
  ));

  return (
    <>
      <h3>John</h3>
      <div className="allCards">{element}</div>
    </>
  );
}
