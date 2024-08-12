import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";

function BlogsPage() {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12;
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        async function fetchBLogs() {
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
            
            // filter By category
            if (selectedCategory) {
                url += `&category=${selectedCategory}`;
            }
            
            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
        }
        fetchBLogs();
    }, [currentPage, pageSize, selectedCategory]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    };
    

    return (
        <div>
            {/* category */}
            <div>
                <CategorySelection
                    onSelectedCategory={handleCategoryChange}
                    selectedCategory={selectedCategory}
                    activeCategory={activeCategory}
                />
            </div>
            {/* blogCards */}
            <div className=" flex flex-col lg:flex-row gap-12">
                <BlogCards
                    blogs={blogs}
                    currentPage={currentPage}
                    selectedCategory={selectedCategory}
                    pageSize={pageSize}
                />

                <div>
                    <SideBar/>
                </div>
            </div>
            {/* pagination */}
            <div>
                <Pagination
                    onPageChange={handlePageChange}
                    blogs={blogs}
                    currentPage={currentPage}
                    pageSize={pageSize}
                />
            </div>
        </div>
    );
}

export default BlogsPage;
