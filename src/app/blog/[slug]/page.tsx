export const dynamic = "force-static";
import posts from "@/data/posts.generated.json";

type Post = {
  slug: string;
  title: string;
  date: string | null;
  image?: string | null;
  html: string;
};

export async function generateStaticParams() {
  return (posts as Post[]).map((p) => ({ slug: p.slug }));
}

function fmt(d?: string | null) {
  return d ? new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(d)) : "";
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = (posts as Post[]).find((p) => p.slug === params.slug);
  if (!post) return <main className="mx-auto max-w-3xl px-4 py-10">Not found</main>;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <article
        className="
          prose prose-invert lg:prose-lg
          prose-a:text-sky-400 hover:prose-a:underline
          prose-img:rounded-xl prose-img:shadow
          prose-pre:bg-zinc-900 prose-pre:text-zinc-100 prose-pre:rounded-xl prose-pre:p-4
        "
      >
        <header className="not-prose mb-6">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          {post.date && <p className="mt-1 text-sm text-white/60">{fmt(post.date)}</p>}
        </header>

        {/* If you still want a hero image from frontmatter */}
        {/* {post.image && (
          <figure className="not-prose mb-8 overflow-hidden rounded-xl border border-white/10">
            <img src={post.image} alt={post.title} className="h-auto w-full object-cover" />
          </figure>
        )} */}

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </main>
  );
}
