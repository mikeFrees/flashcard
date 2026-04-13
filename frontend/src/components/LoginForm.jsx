import styles from "@/components/LoginForm.module.css";

function LoginForm () {
  return (
    <form>
      <h1>Hello Guest</h1>
      <input
        id='username'
        type='text'
        placeholder='username'
      />
      <input
        id='password'
        type='password'
        placeholder='password'
      />
      <button>Login</button>
    </form>
  );
}

export default LoginForm;