import React from "react";
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
`

export default function Search() {
  const [query, setQuery] = React.useState('')
  const navigate = useNavigate();

  function search(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    navigate(`/${query}`)
  }

  return (
    <SearchForm onSubmit={search}>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)}/>
      <button type="submit">Search</button>
    </SearchForm>
  )
}