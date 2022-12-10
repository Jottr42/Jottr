import React from "react";
import styles from './SignUpForm.module.css'

const SignUpForm = () => {
  // component will have the sign up form
  // many inputs to be sent out to the backend
  // will have an onclick type of submit returning the invocation of a function
  
  const handleSubmit = (event) => {
    event.preventDefault()
    // this handle submit will console log the input fields and their values using event.target[index of form].value
    console.log('First Name: ', event.target[0].value)
    console.log('Last Name: ', event.target[1].value)
    console.log('Username: ', event.target[2].value)
    console.log('Password: ', event.target[3].value)
    // form will also make a request to the back end storing the relevant data in a database
  }

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formContainer}>
        <form onSubmit={(event) => handleSubmit(event)}>
          {/* have 6 input forms and a register button*/}
          <input type="text" id="fname" className={styles.textInput} placeholder="First Name"/>
          <input type="text" id="lname" className={styles.textInput} placeholder="Last Name"/>
          <input type="text" id="username" className={styles.textInput} placeholder="Username"/>
          <input type="text" id="password" className={styles.textInput} placeholder="Password"/>
          <button type="submit" className={styles.registerButton}>Register</button>
        </form >
      </div>
    </div>
  )
}

export default SignUpForm