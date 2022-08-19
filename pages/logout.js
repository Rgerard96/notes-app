import Link from 'next/link';
import React from 'react';

export default function Logout() {
  return (
    <Link href='/api/auth/logout'>
      <p>Logout</p>
    </Link>
  );
}
