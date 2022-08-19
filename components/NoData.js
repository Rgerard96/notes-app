import React from 'react';

export default function NoData({children}) {
  return (
    <div className='max-w-lg rounded-xl bg-white border-2 border-dashed flex justify-center items-center p-10 mx-auto text-center'>
      No {children} has been created yet.
    </div>
  );
}
