import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useState } from "react";
import Form from "./Forms";
import { newPhenotypes } from "./Forms";

const Phenotypes = (props) => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
        <Form />
        {/* <button type="submit" className="btn btn-primary">Submit</button> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
//   phenotypes: state.phenotypes,
});

const mapDispatchToProps = {
//   fetchPhenotypes: () => dispatch(FetchPhenotypes()),
};

export default connect(mapStateToProps, mapDispatchToProps)(Phenotypes);
