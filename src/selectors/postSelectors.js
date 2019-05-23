export const getPosts = state => state.posts.map((post, id) => ({
  ...post,
  id
}));
