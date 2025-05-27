import BlogHeader from "./blog-header"
import BlogContent from "./blog-content"
import BlogAuthor from "./blog-author"
import RelatedBlogs from "./related-blogs"
// import BlogComments from "./blog-comments"

export default function BlogPage({ params }) {
    return (
        <main className="min-h-screen px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <BlogHeader slug={params.slug} />
            <BlogContent slug={params.slug} />
            <BlogAuthor slug={params.slug} />
            <RelatedBlogs slug={params.slug} />
            {/* <BlogComments /> */}
        </main>
    )
}
