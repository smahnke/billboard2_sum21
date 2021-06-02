import React from 'react';

const ArtistNew = ({artist, billboard}) => {
  const {title, week, id} = billboard
  const { first_name, last_name, errors} = artist
  const defaultFName = first_name ? first_name : ''
  const defaultLName = last_name ? last_name : ''
  return (
    <>
    <h1>New Artist</h1>
    {errors && errors }
    <form action={`/billboards/${id}/artists`} method='post'>
      <input
        type='text'
        required
        placeholder='First Name'
        defaultValue={defaultFName}
        name='artist[first_name]'
      />
      <textarea 
        required
        placeholder="Last Name"
        defaultValue={defaultLName}
        name='artist[last_name]'
      />
      <button type='submit'>Add Artist</button>
    </form>
    </>
  )
}

export default ArtistNew;