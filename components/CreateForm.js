import React, { useState } from 'react';
import CreateOptions from './CreateOptions.js';

export default function CreateForm() {
  const [createOption, setCreateOption] = useState('note');
  return (
    <div className='space-y-3 w-full'>
      <div className='space-y-2'>
        <label>{createOption === 'category' ? 'Name' : 'Title'}</label>
        <input
          type='text'
          name='name/title'
          id='name/title'
          className='w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none'
        />
      </div>
      {createOption === 'note' && (
        <div className='space-y-2'>
          <label>Body</label>
          <input
            type='text'
            name='body'
            id='body'
            className='w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none'
          />
        </div>
      )}
      <CreateOptions />
    </div>
  );
}
