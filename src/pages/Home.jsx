import React, { useEffect,useState } from 'react'
import Product from '../components/Product';
import Spinner from '../components/Spinner';

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading]=useState(false);
  const [posts ,setPosts]=useState([]);

  async function fetchProductData(){
    setLoading(true);
    try {
      const res=await fetch(API_URL);
      const data=await res.json();
      setPosts(data);
    } catch (error) {
      console.log("error");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchProductData();
  },[])

   return (
    <div>
        {
          loading?<Spinner/>:
          posts.length>0?
          (
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
            max-w-6xl mx-auto p-2 space-y-10 space-x-5' >
              {posts.map((post)=>(
                <Product key={post.id} post={post} />
              ))}
            </div>
          ):
          <div className='flex flex-col justify-center items-center h-[100vh]' >
            <p className='text-xl text-bold text-slate-700' >No Data Found</p>
          </div>
        }
    </div>
  )
}

export default Home
