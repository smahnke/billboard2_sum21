import React from 'react';

const Artists = ({ billboard, artists }) => {
  const { title, id } = billboard
  const url = `/billboards/${id}/topics`
  return (
    <>
      <h1>Artists from {title}</h1>
      <a href={`/billboards/${id}`}>Back to {title}</a>
      <br />
      <a href= {url + '/new'}>New Artist</a>
      {
        artists.map( (artist) => (
          <div>
            <h3>{artist.first_name}</h3>
            <a href={url + '/' + artist.id}>Show Artist</a>
            {' '}
            <a href={url + '/' + artist.id + '/edit'}>Edit Artist</a>
            {' '}
            <a href={url + '/' + artist.id} data-method="delete">Delete Artist</a>
          </div>
        ))
      }
    </>
  )
}

export default Artists;
