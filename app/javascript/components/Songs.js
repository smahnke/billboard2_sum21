import React from 'react';

const Songs = ({ artist, songs }) => {
  const { first_name, last_name, id } = artist
  const url = `/artists/${id}/songs`
  return (
    <>
      <h1>Songs from {first_name}{last_name}</h1>
      <a href={`/artists/${id}`}>Back to {first_name}{last_name}</a>
      <br />
      <a href= {url + '/new'}>Add New Song</a>
      {
        songs.map( (song) => (
          <div>
            <h3>{song.title} from the album "{song.album}" was ranked {song.rank}</h3>
            <a href={url + '/' + song.id}>Show Song</a>
            {' '}
            <a href={url + '/' + song.id + '/edit'}>Edit Song</a>
            {' '}
            <a href={url + '/' + song.id} data-method="delete">Delete Song</a>
          </div>
        ))
      }
    </>
  )
}

export default Songs;