import styles from "@/components/RegistrationForm.module.css";

function RegistrationForm() {
  return (
    <form className={styles.form}>
      <input
        id='username'
        type='text'
        placeholder='Username'
        className={styles.input}
      />
      <input
        id='password'
        type='password'
        placeholder='Password'
        className={styles.input}
      />
      <input
        id='confirmPassword'
        type='password'
        placeholder='Confirm password'
        className={styles.input}
      />
      <input
        id='email'
        type='email'
        placeholder='Email'
        className={styles.input}
      />
      <button className={styles.button}>Register</button>
    </form>
  );
}

export default RegistrationForm;
