import styles from "@/components/RegistrationForm.module.css";

function RegistrationForm() {
  return (
    <form>
      <h1>Hello Guest</h1>
      <input
        id='username'
        type='text'
        placeholder='Username'
      />
      <input
        id='password'
        type='password'
        placeholder='Password'
      />
      <input
        id='confirmPassword'
        type='password'
        placeholder='Confirm password'
      />
      <input
        id='email'
        type='email'
        placeholder='Email'
      />
      <button>Register</button>
    </form>
  );
}

export default RegistrationForm;
