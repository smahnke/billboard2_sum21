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
      <br />
      <a href={'/billboards/' + id} data-method="delete">Delete Billboard</a>
      <br />
      <a href={'/billboards/' + id + '/edit'}>Edit Billboard</a>
      <br />
      <a href={`/billboards/${id}/artists`}>Show Artists</a>
    </>
  )
}

export default Billboard;