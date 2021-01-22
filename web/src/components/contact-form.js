import React, { useState } from 'react'
import axios from "axios"
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import PortableText from './portableText';
import clientConfig from '../../client-config';

import { button } from './button.module.css'
import styles from './contact-form.module.css'

const maybeImage = illustration => {
  let img = null
  if (
    illustration &&
    illustration.image &&
    illustration.image.asset &&
    !illustration.disabled
  ) {
    const fluidProps = getFluidGatsbyImage(
      illustration.image.asset._id,
      { maxWidth: 2160 },
      clientConfig.sanity
    )    
    img = fluidProps.src
  }
  
  return img
};

const ContactForm = props => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/e279bf53-18e5-4240-86ab-36dbcc80a955",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Your itinerary has been submitted. Thank you!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  const img = maybeImage(props.illustration)

  return (
    <section className={styles.root} style={{backgroundColor: `${props.colors.value}`}}>
      <div>
        <h2 className={styles.title}>{props.header}</h2>
        <PortableText blocks={props.text} />
      </div>
      <div className={styles.formWrapper}>
        <form action="https://getform.io/f/e279bf53-18e5-4240-86ab-36dbcc80a955" method="POST" onSubmit={handleOnSubmit}>
          <div className={styles.firstName}>
            <input className={styles.textInput} type="text" name="firstName" placeholder="First name" required="required" />
          </div>
          <div className={styles.lastName}>
            <input className={styles.textInput} type="text" name="lastName" placeholder="Last name" required="required" />
          </div>
          <div className={styles.email}>
            <input className={styles.textInput} type="email" name="email" placeholder="Email address" required="required" />
          </div>
          <div className={styles.phone}>
            <input className={styles.textInput} type="tel" name="phone" placeholder="Phone" />
          </div>
          <div className={styles.departure}>
            <label>Depart</label>
            <input className={styles.textInput} type="date" name="departDate" placeholder="depart" required="required" />
          </div>
          <div className={styles.return}>
            <label>Return</label>
            <input className={styles.textInput} type="date" name="returnDate" placeholder="return" required="required" />
          </div>
          <div className={styles.from}>
            <input className={styles.textInput} type="text" name="from" placeholder="From" />
          </div>
          <div className={styles.to}>
            <input className={styles.textInput} type="text" name="to" placeholder="To" />
          </div>
          <div className={styles.interests}>
            <label>Interests</label>
            <div className={styles.formCheck}>
              <input className={styles.checkInput} type="checkbox" value="" name="interest1" />
              <label type="text">Private aviation</label>
            </div>
            <div className={styles.formCheck}>
              <input className={styles.checkInput} type="checkbox" value="" name="interest2" />
              <label type="text">Hotel stay</label>
            </div>
            <div className={styles.formCheck}>
              <input className={styles.checkInput} type="checkbox" value="" name="interest3" />
              <label type="text">Private house stay</label>
            </div>
          </div>
          <div className={styles.message}>
            <textarea class="messageText" name="messageText" rows="4" placeholder="Additional travel information" />
          </div>
          <button className={button} type="submit">Submit</button>
          {serverState.status && (
            <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default ContactForm