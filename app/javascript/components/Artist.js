import React from 'react';
import Billboard from './Billboard';

const Artist = ({ billboard, artist }) => {
  const { title, week, id } = billboard
  const { first_name, last_name } = artist;
  
  return (
    <>
      <h1>Artist: {first_name}{' '}{last_name}</h1>
      <p>
        Featured on: <a href={`/billboards/${id}`}>{title}{' '}{week}</a>
      </p>
      <a href='/'>Back</a>
      <br />
      <a href={'/artists/' + id} data-method="delete">Delete Artist</a>
      <br />
      <a href={'/artists/' + id + '/edit'}>Edit Artist</a>
      <br />
      <a href={`/artists/${id}/songs`}>Show Songs</a>
    </>
  )
}

export default Artist;