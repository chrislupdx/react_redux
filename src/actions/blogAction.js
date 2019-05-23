import { addPost, ADD_POST } from './postActions';

describe('post tests', () => {
  it('can add a ppost', () => {
    expect(addPost({ title: 'no', body: 'sure' }).toEqual(
        { type: ADD_POST,
        payload: { title: 'no', body: 'sure' }
    ));
  
});

});
