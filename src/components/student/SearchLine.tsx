import { useState } from "react";
import { SearchIcon } from "../../icons/icons";
import styled from "@emotion/styled";

export const SearchButton = styled.button`
  font-size: 20px;
  color: #475569;
  padding: 10px;
  border-radius: 8px;
  transition: background 0.2s ease;
  display: flex;
  gap: 15px;
  align-items: center;
  &:hover {
    background: #f5f7fb;
  }
`;

export const SearchInput = styled.input`
  height: 36px;
  min-width: 220px;
  padding: 0 10px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  outline: none;
  font-size: 14px;
  color: #0f172a;
  background: #fff;
  :focus {
    border-color: #0e73f6;
    box-shadow: 0 0 0 3px rgba(14, 115, 246, 0.15);
  }
`;

export function SearchLine() {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <>
      {!searchOpen ? (
        <SearchButton onClick={()=> setSearchOpen(true)}>
          <SearchIcon /> Открыть поиск
        </SearchButton>
      ) : (
        <SearchInput 
          autoFocus 
          onBlur={() => setSearchOpen(false)}
          placeholder="Поиск..."
        />
      )}
      
    </>
  );
}