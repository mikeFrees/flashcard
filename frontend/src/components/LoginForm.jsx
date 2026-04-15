import styles from "@/components/LoginForm.module.css";
import {useState} from "react";

function LoginForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const requestBody = {username, password};
    try {
      const res = await fetch("http://146.190.225.200:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(requestBody),
      });

      const data = await res.json();
      console.log(data)
    } catch (error){
      console.log(error);
    }


  }
  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <input
        id='username'
        type='text'
        placeholder='username'
        className={styles.input}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        id='password'
        type='password'
        placeholder='password'
        className={styles.input}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={styles.button}>Login</button>
    </form>
  );
}

export default LoginForm;
