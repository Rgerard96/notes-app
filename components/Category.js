import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React from 'react';
import moment from 'moment';

export default function Category({ key, item }) {
  return (
    <div key={key} className='bg-white font-bold rounded-xl p-5 shadow border w-full text-center'>
      <div className='flex items-center justify-between'>
        <Link href={`/${item.id}/notes`}>
          <h2 className='font-bold text-lg cursor-pointer'>{item.name}</h2>
        </Link>
        <div className='flex space-x-3'>
          <PencilAltIcon className='w-5 cursor-pointer' />
          <TrashIcon className='w-5 cursor-pointer text-red-500' />
        </div>
      </div>
      <div className='flex items-center justify-between mt-2'>
        <small className='font-light text-xs text-gray-500'>
          Last updated: {moment(item.updatedAt).format('DD-MM-yyyy')}
        </small>
      </div>
    </div>
  );
}
