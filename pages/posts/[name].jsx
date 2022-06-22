import React, { useEffect, useLayoutEffect, useState } from 'react'
import MainLayout from '../../src/layout/MainLayout'
import Link from "next/link"
import { server } from '../../config'
import Head from 'next/head'
import {useRouter } from "next/router"

export default function Post({post}) {
  return (
    <>
        <Head>
            <title>{post.title}</title>
        </Head>
        <div className='flex justify-center post-div w-full'>
            <MainLayout>
                <div className='p-5'>
                    <Link href="/">← back to list</Link>
                    <h1 className='text-[38px] sm:text-[50px] font-black'>{post?.title}</h1>
                </div>
                <div dangerouslySetInnerHTML={{__html:post?.content}}></div>
            </MainLayout>
        </div>
    </>
  )
}

export async function getServerSideProps(context) {
    const {id} = context.query
    const result = await fetch(`${server}/api/posts/${id}`)
    const post = await result.json()
    return {
        props: {
            post
        }
    }
}