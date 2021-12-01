import React from "react"
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  MenuItem,
  InputLabel,
  Select,
  CardActions,
  Button,
  CardHeader,
  FormControl,
} from "@material-ui/core"

import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { TextField } from "formik-material-ui"

const useStyle = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(3),
    marginTop: 30
  },
  button: {
    margin: theme.spacing(1),
  },
}))

//Data
const initialValues = {
  comments: ""
}

const nameChange = (e) => {
console.log(e.target.value);
}


//validation schema
let validationSchema = Yup.object().shape({
  comments: Yup.string().required("Required"),
})

const UserForm = ({ addComment }) => {
  const classes = useStyle()

  const onSubmit = (values) => {
    console.log(values)
    addComment(values.comments)
  }

  return (
    <Grid container justify="center" spacing={1}>
      <Grid item md={12}>
        <Card className={classes.padding}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {({ dirty, isValid, values, handleChange, handleBlur }) => {
              return (
                <Form>
                  <CardContent>
                    <Grid item container spacing={1} justify="center">
                      <Grid item xs={12} sm={12} md={12}>
                        <Field
                          label="Enter your comment"
                          variant="outlined"
                          fullWidth
                          name="comments"
                          value={values.comments}
                          component={TextField}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button
                      disabled={!dirty || !isValid}
                      variant="contained"
                      color="primary"
                      type="Submit"
                      className={classes.button}>
                      COMMENT
                    </Button>
                  </CardActions>
                </Form>
              )
            }}
          </Formik>
        </Card>
      </Grid>
    </Grid>
  )
}

export default UserForm
