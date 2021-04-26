import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
// import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './Form.css'

class Form extends React.Component {
  static defaultProps = {
    name: 'Simple Form Ajax',
    subject: '', // optional subject of the notification email
    action: '',
    successMessage: 'Thanks for your enquiry, we will get back to you soon',
    errorMessage:
      'There is a problem, your message has not been sent, please try contacting us via email'
  }

  state = {
    alert: '',
    disabled: false
  }

  handleSubmit = async e => {
    e.preventDefault()
    if (this.state.disabled) return

    const form = e.target
    const data = serialize(form)

    this.setState({ disabled: true })

    const body = {
      clientEmail: 'fiftyfitnessgym@gmail.com',
      clientName: 'Jereme at 50+Fitness',
      userEmail: data.emailAddress,
      userName: data.firstname + ' ' + data.lastname,
      userSubject: this.props.name,
      type: 'message',
      userMessage: data.message.replace(/\n/g, '<br/>')
    }

    try {
      const response = await fetch(
        'https://j77237xnyl.execute-api.us-west-2.amazonaws.com/Prod/no-reply-email',
        {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      if (!response.ok) {
        console.log(response)
        //not 200 response
        return
      } else {
        form.reset()
        this.setState({
          alert: this.props.successMessage,
          disabled: false
        })
      }
    } catch (e) {
      console.error(e)
      this.setState({
        disabled: false,
        alert: this.props.errorMessage
      })
      throw new Error('Network error')
    }
  }

  render() {
    const { name, subject, action } = this.props

    return (
      <Fragment>
        {/* <Helmet>
          <script src="https://www.google.com/recaptcha/api.js" />
        </Helmet> */}
        <form
          className="Form"
          name={name}
          action={action}
          onSubmit={this.handleSubmit}
          data-netlify=""
          netlify-recaptcha=""
        >
          {this.state.alert && (
            <div className="Form--Alert">{this.state.alert}</div>
          )}
          <div className="Form--Group">
            <label className="Form--Label">
              <input
                className="Form--Input Form--InputText"
                type="text"
                placeholder="Firstname"
                name="firstname"
                required
              />
              <span>Firstname</span>
            </label>
            <label className="Form--Label">
              <input
                className="Form--Input Form--InputText"
                type="text"
                placeholder="Lastname"
                name="lastname"
                required
              />
              <span>Lastname</span>
            </label>
          </div>
          <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="email"
              placeholder="Email"
              name="emailAddress"
              required
            />
            <span>Email address</span>
          </label>
          <label className="Form--Label">
            <textarea
              className="Form--Input Form--Textarea Form--InputText"
              placeholder="Message"
              name="message"
              rows="10"
              required
            />
            <span>Message</span>
          </label>
          <div
            className="g-recaptcha"
            data-sitekey="6LfKN3kUAAAAAGIM1CbXmaRZx3LIh_W2twn1tzkA"
          />
          {!!subject && <input type="hidden" name="subject" value={subject} />}
          <input type="hidden" name="form-name" value={name} />
          <input
            className="Button Form--SubmitButton"
            type="submit"
            value="Enquire"
            disabled={this.state.disabled}
          />
        </form>
      </Fragment>
    )
  }
}

export default Form
