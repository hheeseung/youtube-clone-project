# YouTube Clone Project

## 📝 About Project

YouTube Data API를 이용한 유튜브 사이트의 클론 코딩 프로젝트입니다. 인기 목록과 검색 API를 사용했으며 한국의 인기동영상 상위 30개의 데이터를 가져와 메인화면에 뿌린 뒤, 영상 클릭 시 해당 영상을 띄우고 사이드바에 인기 동영상 목록을 뜨게 하였습니다. 또한 모바일에서도 화면이 잘 나타날 수 있도록 반응형으로 제작하였습니다.

![youtube-clone-project](https://user-images.githubusercontent.com/87454393/185095134-b6f646fe-19c2-4ad2-a729-65511fc8a57e.png)
![youtube-clone-project-detail](https://user-images.githubusercontent.com/87454393/185095144-d0b26e50-4a7a-4ba7-86dc-188b573716ce.png)

## 🖥 Environment

1. Skills: `React JS`, `PostCSS`
2. Deploy: `Netlify` - [Click Here To See Demo](https://youtube-clone-coding-project.netlify.app/)

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

- React는 View 영역에 해당하기 때문에 컴포넌트 안의 데이터 통신을 따로 분리하여 밖으로 빼주었습니다.
- 보안을 위해 API Key값 역시 다른 파일로 빼주어 배포 시 공개되지 않도록 하였습니다.
- 검색 코드에서 id의 항목을 videoId로 한정하여 검색 결과가 영상만 나타날 수 있도록 하였습니다.

## ✏ 추가 구현 사항

- [ ] 라우팅으로 화면 간 이동 구현하기
- [ ] 좋아요 수, 조회수 불러오기
- [ ] 상세 화면에서 사이드바에 나타나는 영상 목록 개수 줄이기
- [ ] axios를 사용하여 데이터 받아오기
