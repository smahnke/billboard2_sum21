import React from 'react';

const BillboardEdit = ({billboard}) => {
  const { title, id } = billboard
  const defaultTitle = title ? title : "";
  return (
    <>
      <h1>Editing {title}</h1>
      <form action={'/billboards/$(id)'} method='post'>
        <input type='hidden' name='_method' value='patch' />
        <input
          placeholder='Title'
          type='text'
          required
          defaultValue={defaultTitle}
          name='billboard[title]'
        />
        <button type='submit'>Update</button>
      </form>
    </>
  )
}

export default BillboardEdit;