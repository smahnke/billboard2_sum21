import React from 'react';

const ArtistNew = ({artist, billboard}) => {
  const {id} = billboard
  const { title, body, errors} = artist
  const defaultTitle = title ? title : ''
  const defaultBody = body ? body : ''
  return (
    <>
    <h1>New Artist</h1>
    {errors && errors }
    <form action={`/billboards/${id}/artists`} method='post'>
      <input
        type='text'
        required
        placeholder='Title'
        defaultValue={defaultTitle}
        name='artist[first_name]'
      />
      <textarea 
        required
        placeholder="body"
        defaultValue={defaultBody}
        name='artist[body]'
      />
      <button type='submit'>Add Artist</button>
    </form>
    </>
  )
}

export default ArtistNew;