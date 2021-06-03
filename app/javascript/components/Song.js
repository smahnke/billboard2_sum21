import React from 'react';

const Song = ({ artist, song }) => {
  const { first_name, last_name } = artist;
  const { title, rank, album } = song;
  
  return (
    <>
      <h1>{title} by {first_name}{' '}{last_name}</h1>
      <p>
        Featured on: <a href={`/billboards/${id}`}>{title}{' '}{week}</a>
      </p>
      <a href='/'>Back</a>
      <br />
      <a href={'/songs/' + id} data-method="delete">Delete Song</a>
      <br />
      <a href={'/songs/' + id + '/edit'}>Edit Song</a>
    </>
  )
  }

export default Song;