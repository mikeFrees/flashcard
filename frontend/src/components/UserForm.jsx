import LoginForm from "@/components/LoginForm";
import RegistrationForm from "@/components/RegistrationForm";
import styles from "@/components/UserForm.module.css";
import { useState } from "react";

function UserForm() {
  const [login, setLogin] = useState(true);
  return (
      <div className={`${styles.form}`}>
        <div className={`${styles.modeSelector}`}>
          <div
            className={`${styles.mode} ${login ? styles.active : ""} text-preset-4-semibold`}
            onClick={() => setLogin(true)}
          >
            Login
          </div>
          <div
            className={`${styles.mode} ${!login ? styles.active : ""} text-preset-4-semibold`}
            onClick={() => setLogin(false)}
          >
            Register
          </div>
        </div>
        {login ? <LoginForm /> : <RegistrationForm />}
      </div>
  );
}

export default UserForm;
