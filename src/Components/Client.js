import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Table,Alert } from "react-bootstrap";
let i=0
export default function Client() {
  const [data, setData] = useState([{}]);
  const [err, setErr] = useState();
  useEffect(() => {
    axios
      .get("/documents")
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      })
      .catch((err) => {
        setErr(err);
      });
  }, []);
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Document Link</th>
            <th>Similarity Score</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user) => {
              return (
                <tr key={i++} >
                  <td><a href={user['link']} >{user['link']}</a></td>
                  <td>{user['score']}</td>
                </tr>
              );
            })}
            {err && <p>{err.message}</p>}
        </tbody>
      </Table>
    </div>
  );
}
