import { useState, FC } from "react";

interface GreetFormProps {
  message: string;
  updateMessage: (m: string) => void;
}

const GreetForm: FC<GreetFormProps> = ({ message, updateMessage }) => {
  const [formValue, setFormValue] = useState<string>("");
  return (
    <>
      <h3>{message}</h3>
      <input
        onChange={(e) => {
          setFormValue(e.target.value);
        }}
        value={formValue}
      ></input>
      <button onClick={() => updateMessage(formValue)}>update</button>
    </>
  );
};
export default GreetForm;
