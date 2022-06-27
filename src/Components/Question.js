// import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import { Form, Button } from "react-bootstrap";
// import ReceiveNextQuestion from "../Redux/Features/Login/ActionCreators";

// export const Question = (props) => {
//   const [num, setNum] = useState(1);
//   function handleSubmit(e) {
//     props.receivenextquestion(num);
//   }
//   return (
//     <div>
//       <h2>Question {props.qnumber}</h2>
//         <Form.Select
//           aria-label="Default select example"
//           value={num}
//           onChange={(e) => setNum(e.target.value)}
//         >
//           <option value="0">Zero</option>
//           <option value="1">One</option>
//           <option value="2">Two</option>
//           <option value="3">Three</option>
//         </Form.Select>
//         <br/>
//         <Button type="submit" onClick={handleSubmit}>NextQuestion</Button>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     qnumber: state.question.qnumber,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     receivenextquestion: (qnumber) => dispatch(ReceiveNextQuestion(qnumber)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Question);
