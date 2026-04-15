import styles from "@/components/CardCreationForm.module.css";
import addLogo from "@/assets/icons/icon-circle-plus.svg";

import { useState } from "react";

function CardCreationForm() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newCard = {
      question,
      answer,
      category,
      knownCount: 0,
    };

    console.log(newCard); // later send to backend
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <label htmlFor='question'>Question</label>
      <input
        id='question'
        type='text'
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder='e.g. What is the capital of France?'
        className={styles.input}
      ></input>
      <label htmlFor='answer'>Answer</label>
      <input
        id='answer'
        type='text'
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder='e.g. Paris'
        className={styles.input}
      ></input>
      <label htmlFor='category'>Category</label>
      <input
        id='category'
        type='text'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder='e.g. Geography'
        className={styles.input}
      ></input>

      <button className={styles.button}>
        <img
          src={addLogo}
          alt='plus sign in circle'
        />
        Create Card
      </button>
    </form>
  );
}

export default CardCreationForm;
