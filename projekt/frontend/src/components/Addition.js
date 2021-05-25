import React from "react";
import { Formik, Field, Form } from "formik";
import {addition, getHistory} from '../requests/requests';

const Addition = ({setHistory}) => {
  return (
    <div className="cont">
      <h3>ADDITION</h3>
      <Formik
        initialValues={{ a: "", b: "" }}
        onSubmit={async (values) => {
          await addition(values.a, values.b);
          setHistory(await getHistory());
        }}
      >
        <Form className="form-cont">
          <Field name="a" type="text" />
          <label for="b" style={{fontWeight: 'bold'}}>+</label>
          <Field name="b" type="text"/>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Addition;
