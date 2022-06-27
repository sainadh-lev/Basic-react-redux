import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import SubmitPhenotypes from ".././Redux/Features/Phenotypes/ActionCreators";

let newPhenotypes = [];
let i = 0;
function ReactForm(props) {
  const [phenotypes, setPhenotypes] = useState([]);
  const [nofdocs, setNoofDocs] = useState();
  const [name, setName] = useState("");
  const navigate = useNavigate();
  function HandleSubmit(event) {
    event.preventDefault();
    newPhenotypes = phenotypes;
    newPhenotypes.push(event.target[0].value);
    console.log(newPhenotypes);
    setPhenotypes([...newPhenotypes]);
  }
  function handleClick(event) {
    // event.preventDefault();
    console.log(event.target);
    newPhenotypes = phenotypes;
    var phenotypeIndex = newPhenotypes.indexOf(event.target.value);
    newPhenotypes.splice(phenotypeIndex, 1);
    setPhenotypes([...newPhenotypes]);
  }
  function handlePhenotypeChange(event) {
    return;
  }
  // if(props.phenotypes==true) {
  //   navigate("/login")
  // }
  return (
    <div>
      {/* {error && <p>{error.message}</p>} */}
      {props.phenotypes==true && navigate("/documents") }
      {phenotypes &&
        phenotypes.map(function (phenotype) {
          // console.log(phenotype)
          return (
            <div key={i++} className="input-group mb-3">
              <div className="input-group-prepend">
                <input
                  type="text"
                  className="form-control"
                  value={phenotype}
                  onChange={handlePhenotypeChange}
                  placeholder={phenotype}
                />
              </div>
              <button
                className="btn btn-outline-secondary"
                type="submit"
                value={phenotype}
                onClick={handleClick}
              >
                REMOVE
              </button>
            </div>
          );
        })}
      <Form onSubmit={HandleSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter phenotype"
            />
          </div>
          <button className="btn btn-outline-secondary" type="submit">
            ADD
          </button>
        </div>
        <div>
          <input
            type="text"
            className="form-control"
            value={nofdocs}
            onChange={(e) => setNoofDocs(e.target.value)}
            placeholder="No of documents"
          />
        </div>
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => props.SubmitPhenotypes({ phenotypes }, { nofdocs })}
        >
          Submit
        </button>
      </Form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    phenotypes: state.phenotypes.validPhenotypes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SubmitPhenotypes: (phenotypes, nofdocs) =>
      dispatch(SubmitPhenotypes(phenotypes, nofdocs)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReactForm);
export { newPhenotypes };
