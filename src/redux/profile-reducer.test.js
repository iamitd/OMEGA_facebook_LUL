import profileReducer, {deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likesCount: 0},
        {id: 2, message: 'It\'s my first post', likesCount: 24},
        {id: 3, message: 'Blablabla', likesCount: 4},
        {id: 4, message: 'Basfcc', likesCount: 22},
    ]
}
it('after deleting length of messages should be decrement', () => {
    // 1.test data
    let action = deletePost(1)

    // 2. action
    let newState = profileReducer(state,action)

    // 3. expectation
    expect(newState.posts.length).toBe(3)
});