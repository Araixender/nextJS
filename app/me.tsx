"use client";

import { signIn, useSession } from 'next-auth/react';
import React from 'react'

function Me() {
    const session = useSession()
  return (
    <div>{session.data?.user && "hello"}
    <div>
        <button onClick={() => signIn()} className='text-red-200 p-3 bg-black'>Sign in</button>
    </div>
    </div>
  )
}

export default Me