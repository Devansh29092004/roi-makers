// blog post page

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  return <div>Blog Post: {slug}</div>;
}
