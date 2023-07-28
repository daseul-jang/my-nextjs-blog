import { PostData } from '@/service/posts';

type Props = { post: PostData };

export default async function Post({ post }: Props) {
  return <div>{post.title}</div>;
}
