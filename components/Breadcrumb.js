import { ChevronRightIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Breadcrumb() {
  const router = useRouter();

  const path = router.asPath.split('/');

  console.log(path);
  return (
    <div className='font-bold mb-10 flex items-center space-x-2'>
      <div className='flex items-center space-x-2'>
        <ChevronRightIcon className='w-5' />
        <Link href='/'>
          <span className='cursor-pointer hover:underline'>Categories</span>
        </Link>
      </div>
      {path[2] === 'notes' && (
        <div className='flex items-center space-x-2'>
          <ChevronRightIcon className='w-5' />
          <span className='text-yellow-400'>Notes</span>
        </div>
      )}
    </div>
  );
}
