import React from 'react'

const Search = () => {
  return (
    <>
      <div className="search">
        <div className="searchForm">
          <input type="text" placeholder='Find a user' />
        </div>
        <div className="userChat">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" alt="" />
          <div className="userChatInfo">
            <span>Sumit</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search
