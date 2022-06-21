import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import MainLayout from '../src/layout/MainLayout'
import styles from '../styles/Home.module.css'

export default function Home({posts}) {
  // const [posts, setPosts] = useState([])
  // useEffect(() => {
  //   fetch('/api/posts').then(res => res.json()).then(data => setPosts(data))
  // },[])
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className='flex justify-center pt-20'>
        <MainLayout>
          <main>
            <div className='text-center flex flex-col items-center gap-2'>
              <div className='w-[140px] h-[140px] rounded-[50%]' style={{backgroundImage:'url("https://images.prismic.io/bambi-blog/ab848cb7d831fbd5d8f021e416159d6c01b91fb8_6h0heyg_.jpg?auto=compress,format")'}}></div>
              <h1 className='text-[50px] font-black'>Feet on the ground</h1>
              <p className='text-[#9a9a9a] w-full mb-8 text-[18px] border-b pb-12'>Getting to know yourself by knowing the world</p>
            </div>
            <div className='flex flex-col gap-8'>
              {posts?.map(post => (
                <Link key={post._id} href={`/posts/${post._id}`}>
                  <div className='cursor-pointer flex flex-col gap-1'>
                    <h1 className='text-[28px] font-black'>{post.title}</h1>
                    <time className='text-[#9a9a9a]'>{post.date}</time>
                    <p className='text-[20px]'>{post.preface}</p>
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </MainLayout>
    </div>
    </div>
  )
}

export async function getStaticProps() {
  const result = await fetch('http://localhost:3000/api/posts')
  const posts = await result.json()
  return {
    props: {
      posts
    }
  }
}


