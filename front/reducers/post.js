export const initialState = {
  mainPosts: [{
    id:1,
    User: {
      id:1,
      nickname: '제로초',
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [
      {src: 'https://img.sbs.co.kr/newimg/news/20210205/201518043_300.jpg'},
      {src: 'https://www.ekn.kr/mnt/file/202101/2021012801001469500065291.jpg'},
      {src: 'https://i.ytimg.com/vi/o9FX-0luJog/maxresdefault.jpg'},
    ],
    Comments: [
      {
      User: {nickname: 'nero'},
      content: '우와우와',
      },

      {
        User: {nickname: '키키키'},
        content: '우ㅎㅎ',
      }
    ],
  }],
  imagePaths: [],
  postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
}

const dummyPost = {
  id: 2,
  content: '더미데이터',
  User: {
    id: 1,
    nickname: '지지'
  },
  Images: [],
  Comments: [],
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true
      }
    default:
      return state
  }
}

export default reducer;