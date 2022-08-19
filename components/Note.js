import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline';
import React from 'react';
import moment from 'moment';

export default function Note({ item }) {
  return (
    <div className='bg-white rounded-xl p-5 shadow border'>
      <h2 className='font-bold text-lg mb-3'>{item.title}</h2>
      <p>{item.body}</p>
      <div className='flex items-center justify-between mt-5'>
        <small className='font-light text-xs text-gray-500'>
          Last updated: {moment(item.updatedAt).format('DD-MM-yyyy')}
        </small>
        <div className='flex space-x-3'>
          <PencilAltIcon className='w-5 cursor-pointer' />
          <TrashIcon className='w-5 cursor-pointer text-red-500' />
        </div>
      </div>
    </div>
  );
}
