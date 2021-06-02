import React from 'react';

const BillboardNew = ({billboard}) => {
  const { title, week, id } = billboard
  const defaultTitle = title ? title : "";
  const defaultWeek = week ? week :"";
  return (
    <>
      <h1>New Billboard</h1>
      <form action='/billboards' method='post'>
        <input
          placeholder='Title'
          type='text'
          required
          defaultValue={defaultTitle}
          name='billboard[title]'
        />
        <input
          placeholder='Week'
          type='text'
          required
          defaultValue={defaultWeek}
          name='billboard[week]'
        />
        <button type='submit'>Add</button>
      </form>
    </>
  )
}

export default BillboardNew;
