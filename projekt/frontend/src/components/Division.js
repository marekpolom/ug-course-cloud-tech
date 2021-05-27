import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import {division, getHistory} from '../requests/requests';

const Division = ({setHistory}) => {
  return (
    <div className="cont">
      <h3>DIVISION</h3>
      <Formik
        initialValues={{ a: "", b: "" }}
        onSubmit={async (values) => {
          await division(values.a, values.b);
          setHistory(await getHistory());
        }}
      >
        <Form className="form-cont">
          <Field name="a" type="text" />
          <label for="b" style={{fontWeight: 'bold'}}>/</label>
          <Field name="b" type="text"/>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Division;
