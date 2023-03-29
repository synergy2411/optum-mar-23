import { gql, useQuery } from "@apollo/client";

const FETCH_POSTS = gql`
  query {
    posts {
      id
      title
      body
    }
  }
`;

const Posts = () => {
  const { data, loading, error } = useQuery(FETCH_POSTS);

  if (loading) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>Something went wrong...</h3>;
  }

  return (
    <div>
      <h2 className="text-center">All Posts</h2>
      <div className="row">
        {data.posts.map((post) => {
          return (
            <div className="col-3 m-2" key={post.id}>
              <div className="card">
                <div className="card-header">{post.title.toUpperCase()}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
