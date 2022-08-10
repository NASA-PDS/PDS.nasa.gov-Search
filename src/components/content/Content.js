import React, { useState } from 'react'
import logo from '../../logo.svg';
import '../../App.css';
import TextField from '@mui/material/TextField';
import { setSearchText } from "../../store/AppSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import { getSearchResults } from '../../store/AppSlice'

const Content = () => {
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const dispatch = useDispatch();

  const searchText = useSelector((state) => state.app.searchText);
  const searchResults = useSelector((state) => state.app.searchResults);

  const handleSearchTextChanged = (e) => {
    dispatch(setSearchText(e.target.value));
  }

  const onSearchClicked = async () => {
    try {
      setAddRequestStatus('pending')
      await dispatch(getSearchResults(searchText)).unwrap()
    } catch (err) {
      console.error('Failed to save the post: ', err)
    } finally {
      setAddRequestStatus('idle')
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <TextField 
          label="Text Box" 
          variant="outlined"
          value={searchText}
          onChange={handleSearchTextChanged}
        />
        <Button 
          variant="contained" 
          onClick={onSearchClicked}
        >
          Search!
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {JSON.stringify(searchText)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br/>
        <p>Search Response:</p>
        <p>{JSON.stringify(searchResults)}</p>
      </header>
    </div>
  );
}

export default Content;
