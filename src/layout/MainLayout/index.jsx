import React from 'react'

function MainLayout({children}) {
  return (
    <>
       <div className='max-w-[700px]'>
        {children}
          <footer className='my-14'>
          <p className='py-8 border-t border-[#DADADA] text-center'>Proudly published with  <b>Prismic</b></p>
        </footer>
       </div>
    </>
  )
}

export default MainLayout