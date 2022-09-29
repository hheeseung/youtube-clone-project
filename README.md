# YouTube Clone Project

## 📝 About Project

YouTube Data API를 이용한 유튜브 사이트의 클론 코딩 프로젝트입니다. 리액트에서의 API 통신을 공부하기 위해 제작하게 되었습니다. 모바일에서도 화면이 잘 나타날 수 있도록 반응형으로 제작하였습니다.

![youtube-clone](https://user-images.githubusercontent.com/87454393/192952407-e742c7de-5943-47b0-b5c1-c8ccd443878c.gif)

## 🖥 Environment

1. Skills: PostCSS, React JS
2. Deploy: [Click Here To See Demo](https://youtube-clone-coding-project.netlify.app/)

## 💡 Code

### youtube.js

```javascript
class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async search(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items.map((item) => ({...item, id: item.id.videoId}));
  }

  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=KR&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items;
  }
}

export default Youtube;
```

- 의존성 주입: API 통신 구현 부분은 따로 분리하여 컴포넌트에 주입하는 방식으로 구현했습니다.
- 검색 코드에서 id의 항목을 videoId로 한정하여 검색 결과가 영상만 나타날 수 있도록 하였습니다.
- 성능개선: useMemo, useCallback의 사용으로 불필요한 렌더링을 줄이도록 하였습니다.

## During the Project

### 어려웠던 점

- 의존성 주입을 위해 API 데이터 통신을 따로 분리하는 작업이 어려웠습니다.
- props 전달을 통해 API 데이터를 받아서 화면을 구성하는 부분이 헷갈리기도 하였습니다.

### 해결방식

- 의존성 주입의 개념부터 알아보고 이 작업의 필요성을 이해한 후 막히는 부분은 검색을 통해서 컴포넌트로의 주입 구현을 하였습니다.
- props를 통한 컴포넌트 간의 값 전달 시 프로세스를 이해하도록 노력했습니다.

### ✏ 추가 구현 또는 개선하고 싶은 부분

- [ ] 좋아요 수, 조회수 불러오기
- [ ] axios를 사용하여 데이터 받아오기
- [ ] 상세 화면에서 사이드바에 나타나는 영상 목록 개수 줄이기
- [ ] 화면 간 이동을 Router를 써서 구현해보기
- [ ] API를 통해 데이터를 받아올 때 좀 더 빨리 받아올 수 있는 방법?
