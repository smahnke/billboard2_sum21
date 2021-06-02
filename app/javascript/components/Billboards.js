import React from 'react';

const Billboards = ({billboards}) => {
  return (
    <>
      <h1>All Billboards</h1>
      <a href="/billboards/new">Add Billboard</a>
      {
        billboards.map( (billboard) => (
          <div>
            <h3>{billboard.title}</h3>
          <a href={'/billboards/' + billboard.id}>Show Billboard</a>
          {' '}
          <a href={'/billboards/' + billboard.id + '/edit'}>Edit Billboard</a>
          {' '}
          <a href={'/billboards/' + billboard.id} data-method="delete">Delete Billboard</a>
          {' '}
          </div>
        ))
      }
    </>
  )
}

export default Billboards;