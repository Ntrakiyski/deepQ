import React from "react";

import styled from "styled-components";

function SubmitQuestion(e) {}

export const Popup = () => {
  const [showErrorText, setErrorText] = React.useState(false);
  const [showErrorInput, setErrorInput] = React.useState(false);
  const [storeText, setStoredText] = React.useState();

  function getValueFromTextArea(e) {
    if (e.target.value !== "") {
      setStoredText(e.target.value);
      setErrorText(false);
    } else {
      setErrorText(true);
    }
  }

  const submitTextArea = async () => {
    // await fetch("/api/questions", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     question: storeText,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
  };
  return (
    <Styles>
      <div className="textarea-section">
        <h3>ask a questions</h3>
        <textarea
          onChange={getValueFromTextArea}
          required
          name="enterQuestion"
          id="newQuestion"
          cols="30"
          rows="10"
          placeholder="Ask a question or briefly describe what answers you are looking for"
        ></textarea>
        {showErrorText && (
          <div className="error-field textArea">
            In order to answer please ask the question.
          </div>
        )}
      </div>
      <div className="flex">
        <input
          type="checkbox"
          name="Checkbox"
          id="checkbox"
          required
          value="accepted"
          onClick={(e) => setErrorInput(!e.target.checked)}
        />
        <label>
          My desire is to only ask questions which will help others and me 🙏
        </label>
      </div>
      {showErrorInput && (
        <div className="error-field input">
          Please agree with the single rule.
        </div>
      )}
      <button className="scnd-btn" onClick={submitTextArea}>
        Send
      </button>
    </Styles>
  );
};
const Styles = styled.div`
  padding: 40px 15px 40px 15px;
  min-height: 300px;

  .textarea-section {
    h3 {
      margin-bottom: 10px;
    }
    textarea {
      width: 100%;
      border: none;
      outline: none;
      resize: none;
      border-radius: 4px;
      background-color: #010912;
      color: white;
      padding: 20px;
      font-size: 16px;
    }
  }
  .flex {
    align-items: flex-start;
    justify-content: flex-start;
    margin: 50px 0 5px 0;
  }
  input {
    margin-top: 7px;
    transform: scale(1.5);
    outline: none;
    border: none;
    cursor: pointer;

    :checked {
      border: 1px solid #3c84b8;
    }
  }

  label {
    margin-left: 15px;
    font-size: 14px;
    font-weight: 300;
    font-style: italic;
    max-width: 400px;
  }
  .error-field {
    font-size: 12px;
    font-weight: 300;
    color: #b87f3c;
  }
  button {
    margin-top: 35px;
  }
`;
