import React from "react";
import { Container, Table } from "react-bootstrap";
import { Transaction } from "../../DataDummy/Transaction";

function HomeAdmin() {
  return (
    <Container>
      <h2 className="mt-5">Income Transaction</h2>
      <Table className="border border-2 my-5" bordered hover responsive>
        <thead style={{ backgroundColor: "#E5E5E5" }}>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Products Order</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Transaction.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.order}</td>
              <td>{item.status}</td>
              <td>action</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default HomeAdmin;
