import React, { useState } from 'react'
import axios from 'axios'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import BlockContent from './block-content'
import clientConfig from '../../client-config'

import { button } from './button.module.css'
import styles from './contact-form.module.css'

const maybeImage = illustration => {
  let img = null
  if (illustration && illustration.image && illustration.image.asset && !illustration.disabled) {
    const fluidProps = getFluidGatsbyImage(
      illustration.image.asset._id,
      { maxWidth: 2160 },
      clientConfig.sanity
    )
    img = fluidProps.src
  }

  return img
}

const ContactForm = props => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: 'post',
      url: 'https://getform.io/f/e279bf53-18e5-4240-86ab-36dbcc80a955',
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, 'Your itinerary has been submitted. Thank you!', form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }

  const img = maybeImage(props.illustration)

  return (
    <section className={styles.root} style={{ backgroundColor: `${props.colors.value}` }}>
      <div>
        <h2 className={styles.title}>{props.header}</h2>
        {props.body && <BlockContent blocks={props.body} />}
      </div>
      <div className={styles.formWrapper}>
        <form
          action="https://getform.io/f/e279bf53-18e5-4240-86ab-36dbcc80a955"
          method="POST"
          onSubmit={handleOnSubmit}
        >
          <div className={styles.firstName}>
            <label type="text">First name</label>
            <input
              className={styles.textInput}
              type="text"
              name="First name"
              placeholder="First name"
              required="required"
            />
          </div>
          <div className={styles.lastName}>
            <label>Last name</label>
            <input
              className={styles.textInput}
              type="text"
              name="Last name"
              placeholder="Last name"
              required="required"
            />
          </div>
          <div className={styles.email}>
            <label type="text">Email</label>
            <input
              className={styles.textInput}
              type="email"
              name="Email"
              placeholder="Email"
              required="required"
            />
          </div>
          <div className={styles.phone}>
            <label type="text">Phone</label>
            <input className={styles.textInput} type="tel" name="phone" placeholder="Phone" />
          </div>
          <div className={styles.departure}>
            <label type="text">Depart</label>
            <input
              className={styles.textInput}
              type="date"
              name="Depart date"
              placeholder="depart"
              required="required"
            />
          </div>
          <div className={styles.return}>
            <label type="text">Return</label>
            <input
              className={styles.textInput}
              type="date"
              name="Return date"
              placeholder="return"
              required="required"
            />
          </div>
          <div className={styles.from}>
            <label type="text">From</label>
            <input className={styles.textInput} type="text" name="From" placeholder="From" />
          </div>
          <div className={styles.to}>
            <label type="text">To</label>
            <input className={styles.textInput} type="text" name="To" placeholder="To" />
          </div>
          <div className={styles.interests}>
            <label type="text">Interests</label>
            <div className={styles.formGroup}>
              <div className={styles.formCheck}>
                <input
                  className={styles.checkInput}
                  type="checkbox"
                  value=""
                  name="Private aviation"
                />
                <label type="text">Private aviation</label>
              </div>
              <div className={styles.formCheck}>
                <input className={styles.checkInput} type="checkbox" value="" name="Hotel stay" />
                <label type="text">Hotel stay</label>
              </div>
              <div className={styles.formCheck}>
                <input
                  className={styles.checkInput}
                  type="checkbox"
                  value=""
                  name="Private house stay"
                />
                <label type="text">Private house stay</label>
              </div>
            </div>
          </div>
          <div className={styles.message}>
            <label type="text">Details</label>
            <textarea
              className="messageText"
              name="Message"
              rows="4"
              placeholder="Additional travel information"
            />
          </div>
          <button className={button} type="submit">
            Submit
          </button>
          {serverState.status && (
            <p className={!serverState.status.ok ? 'errorMsg' : ''}>{serverState.status.msg}</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default ContactForm
