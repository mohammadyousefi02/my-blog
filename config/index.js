let server;
const dev = process.env.NODE_ENV !== 'production';

if(dev){
    server = "http://localhost:3000";
}else{
    server = "https://my-blog-seven-hazel.vercel.app/"
}

export{ server };
