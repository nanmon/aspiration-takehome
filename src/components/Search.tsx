import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  background-color: #161b22;
  padding: 16px;
  box-sizing: border-box;
`;

const Input = styled.input`
  background-color: #0d1117;
  border: 1px solid #30363d;
  border-radius: 2px 0 0 2px;
  padding: 8px;
  color: white;
`;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid #30363d;
  border-left-width: 0;
  border-radius: 0 2px 2px 0;
  color: white;
`;

export default function Search() {
  const [query, setQuery] = React.useState("");
  const navigate = useNavigate();

  function search(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(`/${query}`);
  }

  return (
    <SearchForm onSubmit={search}>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        data-testid="search-input"
      />
      <Button type="submit">Search</Button>
    </SearchForm>
  );
}
