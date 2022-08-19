import Link from 'next/link';
import React from 'react';

export default function Login() {
  return (
    <Link href='/api/auth/login'>
      <p>Login</p>
    </Link>
  );
}
