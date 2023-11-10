import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { ResultCard } from "./Card";
import '../styles/navbar.css'

export function Navbar({ cart, items }) {

  const [query, setQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const newResults = items.filter((item) => item.id.includes(query.toLowerCase()));
    setResults(newResults);
  },[items, query])

  useEffect(() => {
    if (showSearch) document.getElementById('sc').classList.add('animate');
  },[showSearch])

  function toggleSearch() {
    if (showSearch) {
      setShowSearch(false);
      setQuery('');
    } else {
      setShowSearch(true);
    }
  }

  function newQuery(e) {
    const regex = /(^[A-Za-z '-]*$)/;
    if (regex.test(e.target.value)) {
      setQuery(e.target.value)
    }
  }

  return (
    <>
      <div className="navbar">
        <Link className="navbar-link" to="/">
          <img className="navbar-logo" src="/static/images/RDSH-Logo.avif" alt="" />
        </Link>
        <div className="navbar-links">
          <Link className="navbar-link text-link" to={`catalog`}>Catalog</Link>
        </div>
        <div className="navbar-right">
          <svg onClick={toggleSearch} className="icon navbar-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>magnify</title><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>
          <Link className="navbar-link" to={`cart`}>
            { cart.length === 0 ?
              <svg id="cart-icon-empty" className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cart</title><path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" /></svg>
            :
              <svg id="cart-icon-full" className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cart-plus</title><path d="M11 9H13V6H16V4H13V1H11V4H8V6H11M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18M7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2H1V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8Z" /></svg>
            }
          </Link>
        </div>
      </div>

      { showSearch ? 
        <>
          <div onClick={toggleSearch} className="search-overlay"></div>
          <div id="sc" className="search-container">
            <div className="search-controls">
              <svg onClick={toggleSearch} className="icon search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close-box</title><path d="M19,3H16.3H7.7H5A2,2 0 0,0 3,5V7.7V16.4V19A2,2 0 0,0 5,21H7.7H16.4H19A2,2 0 0,0 21,19V16.3V7.7V5A2,2 0 0,0 19,3M15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4L13.4,12L17,15.6L15.6,17Z" /></svg>
              <div className="search-header-text">
                <div className="search-letter">S</div>
                <div className="search-letter">e</div>
                <div className="search-letter">a</div>
                <div className="search-letter">r</div>
                <div className="search-letter">c</div>
                <div className="search-letter">h</div>

              </div>
              <div className="search-input">
                <svg className="icon search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>magnify</title><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>
                <input value={query} onChange={newQuery} autoFocus/>
              </div>
            </div>
            { query === '' || results.length === 0 ?
              <div className="search-results">
                <div>No Results</div>
              </div>
            :
              <div className="search-results">
                { results.map((result) => (
                  <ResultCard 
                    key={result.id}
                    result={result}
                    toggleSearch={toggleSearch}
                  />
                ))}
              </div>
            }
          </div>
        </>
      :
        <></>
      }
    </>
  )
}