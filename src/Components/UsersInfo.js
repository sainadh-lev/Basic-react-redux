import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ReceiveUsersInfo from "../Redux/Features/UsersInfo/ActionCreators";
import { Table } from "react-bootstrap";

function UserInfo() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.login);
  useEffect(() => dispatch(ReceiveUsersInfo(token)), []);
  return (
    <div>
      <h2>UsersInfo</h2>
      {loading && <h3>loading....</h3>}
      {error && <h3>{error}</h3>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}

export default UserInfo;
