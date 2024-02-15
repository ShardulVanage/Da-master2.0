import React from 'react'
import { GridPattern } from './GridPattern'

function Footer() {
  return (
  <footer className="relative pb-20 pt-5 sm:pb-8 sm:pt-14 bg-slate-500">
      <div className="absolute inset-x-0 top-0 h-32 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern x="50%" />
      </div>
      <div className="relative text-center text-sm text-slate-600">
        <p>Copyright &copy; {new Date().getFullYear()} ZepAnalytics</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer