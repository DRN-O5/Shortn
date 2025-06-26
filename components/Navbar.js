import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className="h-20 items-center p-4 bg-blue-500 text-white">
        <div className="logo flex font-bold justify-center items-center text-5xl font-mono">
            Shortn
        {/* <ul className="flex justify-center gap-10 text-xl">
            <Link href="/"><li>Home</li></Link>
            <Link href="/shorten"><li>Shorten</li></Link>
            <Link href="/about"><li>About</li></Link>
        </ul> */}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
