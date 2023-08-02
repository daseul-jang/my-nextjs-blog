import AdjacentPostCard from '@/components/AdjacentPostCard';
import PostContent from '@/components/PostContent';
import { getAllPosts, getPostData } from '@/service/posts';
import { Metadata } from 'next';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};

<<<<<<< HEAD
=======
/* export const metadata: Metadata = {
  title: '아니 왜 안돼',
}; */

>>>>>>> 1e4f500160b18f113198396ac567f42fdb0a4fdb
export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = await getPostData(slug);
  return {
    title,
    description,
  };
}

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, path, next, prev } = post;
  return (
    <article className='rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4'>
      <Image
        className='w-full h-1/5 max-h-[500px]'
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section className='flex shadow-md'>
        {next && <AdjacentPostCard post={next} type='next' />}
        {prev && <AdjacentPostCard post={prev} type='prev' />}
      </section>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.path,
  }));
}
