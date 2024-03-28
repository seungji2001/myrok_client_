import { css } from "@emotion/react";

const example = css`
  background-color: pink;
`;

function App() {
  return (
    <div className="App" css={example}>
      이거 되냐?
    </div>
  );
}

export default App;
