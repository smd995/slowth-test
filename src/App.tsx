import { useState } from "react";
import "./App.css";
import { Input } from "./components/atom/input";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex min-h-screen w-full flex-col justify-center">
      <Input
        label="이메일"
        type="email"
        value={inputValue}
        onChange={handleChange}
        errorMessage={"잘못된 입력입니다!"}
        placeholder={"이메일을 입력해주세요"}
      />
      <Input
        label="아이디"
        type="text"
        value={inputValue}
        onChange={handleChange}
        errorMessage={"잘못된 입력입니다!"}
        placeholder={"이메일을 입력해주세요"}
      />
      <Input
        label="비밀번호"
        type="password"
        value={inputValue}
        onChange={handleChange}
        errorMessage={"잘못된 입력입니다!"}
        placeholder={"이메일을 입력해주세요"}
      />
      <Input
        label="비밀번호 확인"
        type="password"
        value={inputValue}
        onChange={handleChange}
        errorMessage={"잘못된 입력입니다!"}
        placeholder={"이메일을 입력해주세요"}
      />
      <h1>{inputValue}</h1>
    </div>
  );
}

export default App;
