import { useState } from "react";

const EditableText = () => {
  const [text, setText] = useState("");

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <input
      className="bg-transparent"
      placeholder="Input your text here"
      onChange={handleChangeText}
      value={text}
    />
  );
};

export default EditableText;
