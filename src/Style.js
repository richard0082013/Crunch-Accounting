import styled from 'styled-components';

export const Styles = styled.div`
  h1 {
    text-align: left;
    color: #e0904a;
    font-size: 24px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 10px auto;

    label {
    margin-top: 25px;
    margin-bottom: 10px;
    display: flex;
    width: 45%;
    font-size: 14px;
  }

  input, select {
    font-size: 12px;
    width: 75%;
    height: 25px;
    border: 1px  solid;
  }

  textarea {
    width: 100%;
    height: 200px;
  }

  .error {
    color: red;
    font-size: 12px;
    margin-left: 8px;
    margin-top: 5px;
  }
  .checkboxInput {
    margin-top: 20px;
  }
  }

  .buttonSave {
    background: #e0904a;
    padding: 5px;
    color: white;
    border-radius: 5px;
    font-size: 12px;
    margin-left: 5px;
  }
  .buttonCancel {
    background: white;
    padding: 5px;
    color: #e0904a;
    border-radius: 5px;
    font-size: 12px;
    margin-left: 5px;
  }

  



`