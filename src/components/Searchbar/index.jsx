import React, { useEffect, useState } from 'react';
import { StyledInput, InputClearIcon, InputContainer } from './Searchbar.style';
import useDebounce from '../../utils/debounce';

const SearchBar = ({defaultValue = '', onSearch, label, clearable= true}) => {
  const [value, setValue] = useState(defaultValue);
  const debouncedValue = useDebounce(value, 500);

  /**
   * Here we wont trigger our search each time our user change value of our searchbar because it will trigger on each
   * characters update. Instead we add some debounce using our debounce hook (see /utils/debounce) to wait when user stop typing.
   */
  useEffect(
    () => {
      if (value === '') {
        onSearch('');
      } else {
        if (debouncedValue) {
          onSearch(debouncedValue);
        }
      }
    },
    [debouncedValue, value]
  );

  return (
    <InputContainer>
      <StyledInput type='text' placeholder={label} value={value} onChange={event => setValue(event.target.value)} />
      {clearable && value!=='' &&
        <InputClearIcon onClick={() => setValue(defaultValue)}>
          <span className="material-icons">
            clear
          </span>
        </InputClearIcon>
      }
    </InputContainer>
  )
}

export default SearchBar;