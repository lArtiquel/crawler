import React from 'react'
import { Formik, Form as FormikForm } from 'formik'
import * as Yup from 'yup'
import UrlField from './UrlField'
import SettingsLayout from './SettingsLayout'
import TagPicker from './TagPicker'
import Header from './Header'
import SubmitButton from './SubmitButton'

export default function Form() {
  return (
    <Formik
      initialValues={{
        url: '',
        limit: 10,
        depth: 3,
        terms: []
      }}
      onSubmit={(values, actions) => {
        // // on success it'll automatically close dialog and clear error state, else it'll keep dialog opened with error
        // signUp(values)
        // // clear `errorness` fields
        // actions.setFieldValue('password', '')
        // actions.setTouched({ password: false })
      }}
      validationSchema={Yup.object().shape({
        url: Yup.string()
          .url('Field should contain valid URL.')
          .required('Please, enter URL.'),
        limit: Yup.number()
          .integer('The number must be an integer.')
          .min(1, 'At least one page should be crawled.')
          .max(10000, 'Server can process up to 10k pages.')
          .required('Page limit is required.'),
        depth: Yup.number()
          .integer('The number must be an integer.')
          .min(1, 'Min depth level - 1.')
          .max(8, 'Max depth level - 8.')
          .required('Search depth level is required.')
      })}
      validateOnChange
      validateOnBlur
    >
      {({ errors, touched }) => (
        <FormikForm>
          <Header />
          <UrlField error={errors.url} touched={touched.url} />
          <SettingsLayout errors={errors} touched={touched} />
          <TagPicker />
          <SubmitButton />
        </FormikForm>
      )}
    </Formik>
  )
}
