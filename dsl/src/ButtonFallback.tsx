import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: Blue;
  color: white;
  color: white;
  font-size: 2em;
  width: 100%;
  padding: 18px 20px;
  border-radius: 4px;
  &:hover {
    opacity: 0.8;
  }
`;

export default function ButtonFallback() {
    const [counter, setCounter] = useState(0);

    if (counter === 5) throw new Error("Count is 5. Error occurred.")

    return (
        <StyledButton onClick={() => setCounter(state => state += 1)}>Create Account {counter}</StyledButton>
    )
}
