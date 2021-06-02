import React from 'react';

const Billboard = ({ billboard }) => {
  const { id, title, week } = billboard;
  
  return (
    <>
      <h1>Billboard of: {title}</h1>
      <p>
        Week of: {week}
      </p>
      <a href='/'>Back</a>
    </>
  )
}

export default Billboard;