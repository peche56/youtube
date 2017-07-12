import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import './index.css';
const API_KEY = 'AIzaSyCngGEeH0jbC0tMJSmgY7Fygo08nBmyB-g';

YTSearch({key: API_KEY, term: 'surf'}, function(data){
console.log(data);
})

const App =() => {
  return (
    <div>
      <SearchBar />,
    </div>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
