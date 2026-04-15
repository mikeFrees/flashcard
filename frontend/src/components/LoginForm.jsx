import styles from "@/components/LoginForm.module.css";

function LoginForm () {
  return (
    <form className={styles.form}>
      <input
        id='username'
        type='text'
        placeholder='username'
        className={styles.input}
      />
      <input
        id='password'
        type='password'
        placeholder='password'
        className={styles.input}
      />
      <button className={styles.button}>Login</button>
    </form>
  );
}

export default LoginForm;