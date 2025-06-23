import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className="h-20 px-3 items-center p-4 bg-blue-500 text-white font-mono">
        <div className="logo flex font-bold justify-center text-5xl">
            Shortn
        </div>
        {/* <ul className="flex justify-center gap-10 text-xl">
            <Link href="/"><li>Home</li></Link>
            <Link href="/shorten"><li>Shorten</li></Link>
            <Link href="/about"><li>About</li></Link> */}
        {/* </ul> */}
      </nav>
    </div>
  )
}

export default Navbar
