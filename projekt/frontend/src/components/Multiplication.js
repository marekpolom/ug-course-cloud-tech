import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import {multiplication, getHistory} from '../requests/requests';

const Multiplication = ({setHistory, setCalcRes}) => {
  return (
    <div className="cont">
      <h3>MULTIPLICATION</h3>
      <Formik
        initialValues={{ a: "", b: "" }}
        onSubmit={async (values) => {
          setCalcRes(await multiplication(values.a, values.b));
          setHistory(await getHistory());
        }}
      >
        <Form className="form-cont">
          <Field name="a" type="text" />
          <label for="b" style={{fontWeight: 'bold'}}>*</label>
          <Field name="b" type="text"/>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Multiplication;
