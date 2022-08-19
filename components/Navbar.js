import React, { useState } from 'react';
import { PencilAltIcon, PlusIcon } from '@heroicons/react/solid';
import CreateModal from './CreateModal';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className='bg-yellow-400 w-full p-5 shadow-lg standalone:pt-16 fixed'>
      <CreateModal open={open} setOpen={setOpen} />
      <div className='container mx-auto flex justify-between items-center'>
        <div className='font-bold text-xl flex space-x-3'>
          <PencilAltIcon className='w-6' />
          <h1>Notes app</h1>
        </div>
        <div>
          <div
            className='bg-white rounded-lg p-2 flex space-x-2 items-center cursor-pointer'
            onClick={() => setOpen(true)}
          >
            <PlusIcon className='w-5' />
          </div>
        </div>
      </div>
    </div>
  );
}
