import React from 'react'
import './search.css'

 const search = (props) => {
  return (
    <div>
      <div className="inputbox">
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 48 48"><path d="M31 28h-1.59l-.55-.55C30.82 25.18 32 22.23 32 19c0-7.18-5.82-13-13-13S6 11.82 6 19s5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55V31l10 9.98L40.98 38 31 28zm-12 0c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z"/></svg>
        <input type="text" autoFocus={true} placeholder="Search royalty free images" onChange={props.onSearch}/>
      </div>
    </div>
  )
}

export default search;