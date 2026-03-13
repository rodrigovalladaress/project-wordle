import React from "react";

function GuessInput({ length, disabled, value, onChange, onSubmit }) {
  /**
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  function handleChange(e) {
    onChange(e.target.value.toUpperCase());
  }

  /**
   *
   * @param {React.SubmitEvent<HTMLFormElement>} e
   */
  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(value);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={value}
        onChange={handleChange}
        minLength={length}
        maxLength={length}
        pattern={`[a-zA-Z]{${length}}`}
        title="5 letter word"
        required
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
