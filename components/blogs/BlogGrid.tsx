import type { BlogPost } from "@/lib/data/blogs"
import RanderBlog from "./RanderBlog"



export function BlogGrid() {
    // const { data: blogs, isLoading, error } = useQuery({
    //     queryKey: ["blogs"],
    // queryFn: fetchBlogs,
    // })



    return (
        <section className="relative bg-slate-50 dark:bg-[#030308] py-24 px-4 sm:px-6 lg:px-8 min-h-screen z-10 pb-40">
            <div className="mx-auto max-w-7xl">
                <RanderBlog />
            </div>
        </section>
    )
}


