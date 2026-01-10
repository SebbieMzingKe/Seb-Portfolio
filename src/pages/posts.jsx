// import { Link } from "react-router-dom";

// const posts = [
//   {
//     slug: "/explore",
//     title: "explore",
//     status: "Placeholder",
//     summary: "Overview and assets coming soon. Share what should appear here and I will fill it in.",
//   },
//   {
//     slug: "/tech-blog",
//     title: "Tech Blog",
//     status: "Placeholder",
//     summary: "Ready for your write-up, code snippets, and media once you provide them.",
//   },
// ];

const Posts = () => {
  return (
    <div className="container mx-auto px-8 py-20 text-neutral-300">
      <p className="text-sm text-neutral-400">Posts</p>
      <h1 className="mt-2 text-4xl md:text-5xl font-bold">Latest Writing</h1>
      <p className="mt-4 max-w-3xl leading-relaxed text-neutral-200">
            coming soooonnn....
      </p>

      {/* <div className="mt-10 grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={post.slug}
            className="group rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 shadow-lg shadow-cyan-900/10 transition hover:-translate-y-1 hover:border-cyan-500/70 hover:bg-neutral-900/70"
          >
            <div className="flex items-center gap-2 text-sm uppercase tracking-wide text-cyan-300">
              <span>{post.status}</span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-400">Coming soon</span>
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-neutral-50 group-hover:text-cyan-200">
              {post.title}
            </h2>
            <p className="mt-3 leading-relaxed text-neutral-300">{post.summary}</p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-cyan-300 group-hover:text-cyan-200">
              View placeholder
              <span className="ml-2 text-lg">→</span>
            </span>
          </Link>
        ))}
      </div> */}
    </div>
  );
};

export default Posts;
