import React from 'react'
import { getPosts, getPostDetails } from '../../services';
import { GetStaticProps, GetStaticPaths } from 'next';

import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm} from '../../components';

const PostDetails: React.FC<any> = ({ post }) => {
  console.log("whatt", post);
  return (
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post}/>
            <Author author={post.author}/>
            <CommentsForm slug={post.slug}/>
            <Comments slug={post.slug}/>
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget slug={post.slug} categories={post.categories.map((category:any) => category.slug)}/>
              <Categories />
            </div>
          </div>
        </div>
      </div>
  );
};

export default PostDetails;

// Fetch data at build time
export const getStaticProps: GetStaticProps = async (context)  => {
  //const slug = context.params.slug;
  const slug = context.params?.slug;
  if (slug) {
    try {
      const data = await getPostDetails(slug);
      return {
        props: {
          post: data,
        },
      };
    } catch (error) {
     }
  }
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export const getStaticPaths: GetStaticPaths = async ()  => {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}