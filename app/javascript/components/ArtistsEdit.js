import React from 'react';

const ArtistEdit = ({artist, billboard}) => {
  const {id} = billboard
  const { first_name, last_name } = artist
  const defaultFName = first_name ? first_name : "";
  const defaultLName = last_name ? last_name : "";
  return (
    <>
      <h1>Editing {first_name}{' '}{last_name}</h1>
      <form action={`/billboards/${id}/artists`} method='post'>
        <input type='hidden' name='_method' value='patch' />
        <input
          placeholder='First Name'
          type='text'
          required
          defaultValue={defaultFName}
          name='artist[first_name]'
        />
        <input
          placeholder='Last Name'
          type='text'
          required
          defaultValue={defaultLName}
          name='artist[last_name]'
        />
        <button type='submit'>Update</button>
      </form>
    </>
  )
}

export default ArtistEdit;