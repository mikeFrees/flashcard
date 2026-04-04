import styles from "@/components/Header.module.css";
import LogoLarge from "@/assets/images/logo-large.svg";
import LogoSmall from "@/assets/images/logo-small.svg";
import PageSelector from "@/components/PageSelector";

function Header({ setStudy, study }) {
  return (
    <header className={`${styles.header}`}>
      <picture>
        <source
          media='(max-width: 480px)'
          srcSet={LogoSmall}
        />
        <img
          src={LogoLarge}
          alt='Flashcard Logo'
        />
      </picture>

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
      <PageSelector
        setStudy={setStudy}
        study={study}
      />
    </header>
  );
}

export default Header;
