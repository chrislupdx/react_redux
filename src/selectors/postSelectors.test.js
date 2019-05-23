import { getPosts, getPost } from './postSelectors';

describe('post selectors', () => {
  it('gets all posts', () => {
    const state = {
      posts: [
        { title: 'post1', body: 'nobody' },
        { title: 'post2', body: 'noone' }
      ]
    };

    expect(getPosts(state)).toEqual([
      { id: 0, title: 'post1', body: 'nobody' },
      { id: 1, title: 'post2', body: 'noone' }
    ]);
  });
  
});
