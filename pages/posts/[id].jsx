import React, { useEffect, useState } from 'react'
import MainLayout from '../../src/layout/MainLayout'
import Link from "next/link"
import { server } from '../../config'
import { useRouter } from 'next/router'
import useSwr from "swr"

const fetcher = (...args) => fetch(...args).then((res) => res.json())


export default function Post() {
    const router = useRouter()
    const { id } = router.query
    const {data:post,error} = useSwr(`${server}/api/posts/${id}`,fetcher)
    // console.log(router)
    // const [post, setPost] = useState({})
    // useEffect(() => {
    //     fetch(`/api/posts/${id}`).then(res => res.json()).then(data => setPost(data))
    // }, [id])
  return (
    <div className='flex justify-center post-div w-full'>
        <MainLayout>
            <div className='p-5'>
                <Link href="/">← back to list</Link>
                <h1 className='text-[38px] sm:text-[50px] font-black'>{post?.title}</h1>
            </div>
            <div dangerouslySetInnerHTML={{__html:post?.content}}></div>
        </MainLayout>
    </div>
  )
}

// export async function getServerSideProps(context) {
//     const {id} = context.query
//     console.log(id)
//     const result = await fetch(`${server}/api/posts/${id}`)
//     const post = await result.json()
//     return {
//         props: {
//             post
//         }
//     }
// }