import { useState } from "react";

function useInput(initalValue) {
  const [value, setValue] = useState(initalValue);
  return [{ value, onChange: (e) => setValue(e.target.value) },()=>setValue(initalValue)];
}

export default useInput;
