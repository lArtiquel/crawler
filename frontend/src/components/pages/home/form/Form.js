import React from 'react'
import { connect } from 'react-redux'
import { Formik, Form as FormikForm } from 'formik'
import * as Yup from 'yup'
import UrlField from './UrlField'
import SettingsLayout from './SettingsLayout'
import TagPicker from './TagPicker'
import Header from './Header'
import SubmitButton from './SubmitButton'
import {
  CrawlAction,
  ChangeFormFieldAction
} from '../../../../store/actions/homeActions'

const Form = ({ formData, crawl, changeFormField }) => {
  const handleFormFieldChange = (e) => {
    changeFormField(e.target.name, e.target.value)
  }

  return (
    <Formik
      initialValues={{
        url: formData.url,
        limit: formData.limit,
        depth: formData.depth
      }}
      onSubmit={(values, actions) => {
        // `untouch` form fields
        actions.setTouched({ url: false, limit: false, depth: false })
        // call crawl action and make request to the backend
        crawl()
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
        <FormikForm onChange={handleFormFieldChange}>
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

const mapStateToProps = (state) => {
  return {
    formData: state.home.request
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    crawl: () => dispatch(CrawlAction()),
    changeFormField: (name, value) =>
      dispatch(ChangeFormFieldAction(name, value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
