import React from 'react'
import MainLayout from '../../src/layout/MainLayout'
import Link from "next/link"


export default function Post({post}) {
  return (
    <div className='flex justify-center post-div w-full'>
        <MainLayout>
            <div className='p-5'>
                <Link href="/">← back to list</Link>
                <h1 className='text-[38px] sm:text-[50px] font-black'>{post.title}</h1>
            </div>
            <div dangerouslySetInnerHTML={{__html:post.content}}></div>
        </MainLayout>
    </div>
  )
}

export async function getServerSideProps(context) {
    const {id} = context.query
    console.log(id)
    const result = await fetch(`http://localhost:3000/api/posts/${id}`)
    const post = await result.json()
    return {
        props: {
            post
        }
    }
}