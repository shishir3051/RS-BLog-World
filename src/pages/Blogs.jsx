import React from 'react'
import BlogsPage from '../component/BlogsPage';

function Blogs() {
  return (
      <div>
          <div className=" px-4 py-40 bg-black  text-center text-white">
              <h1 className=" font-primary mb-5 text-5xl lg:text-6xl font-bold leading-snug ">
                  BLOGs
              </h1>
          </div>

          {/* all blog container */}
          <div className="max-w-7xl mx-auto">
            <BlogsPage/>
          </div>
      </div>
  );
}

export default Blogs
