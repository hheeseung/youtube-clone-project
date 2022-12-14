# YouTube Clone Project

## π About Project

YouTube Data APIλ₯Ό μ΄μ©ν μ νλΈ μ¬μ΄νΈμ ν΄λ‘  μ½λ© νλ‘μ νΈμλλ€. λ¦¬μ‘νΈμμμ API ν΅μ μ κ³΅λΆνκΈ° μν΄ μ μνκ² λμμ΅λλ€. λͺ¨λ°μΌμμλ νλ©΄μ΄ μ λνλ  μ μλλ‘ λ°μνμΌλ‘ μ μνμμ΅λλ€.

![youtube-clone](https://user-images.githubusercontent.com/87454393/192952407-e742c7de-5943-47b0-b5c1-c8ccd443878c.gif)

## π₯ Environment

1. Skills: PostCSS, React JS
2. Deploy: [Click Here To See Demo](https://youtube-clone-coding-project.netlify.app/)

## π‘ Code

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

- μμ‘΄μ± μ£Όμ: API ν΅μ  κ΅¬ν λΆλΆμ λ°λ‘ λΆλ¦¬νμ¬ μ»΄ν¬λνΈμ μ£Όμνλ λ°©μμΌλ‘ κ΅¬ννμ΅λλ€.
- κ²μ μ½λμμ idμ ν­λͺ©μ videoIdλ‘ νμ νμ¬ κ²μ κ²°κ³Όκ° μμλ§ λνλ  μ μλλ‘ νμμ΅λλ€.
- μ±λ₯κ°μ : useMemo, useCallbackμ μ¬μ©μΌλ‘ λΆνμν λ λλ§μ μ€μ΄λλ‘ νμμ΅λλ€.

## During the Project

### μ΄λ €μ λ μ 

- μμ‘΄μ± μ£Όμμ μν΄ API λ°μ΄ν° ν΅μ μ λ°λ‘ λΆλ¦¬νλ μμμ΄ μ΄λ €μ μ΅λλ€.
- props μ λ¬μ ν΅ν΄ API λ°μ΄ν°λ₯Ό λ°μμ νλ©΄μ κ΅¬μ±νλ λΆλΆμ΄ ν·κ°λ¦¬κΈ°λ νμμ΅λλ€.

### ν΄κ²°λ°©μ

- μμ‘΄μ± μ£Όμμ κ°λλΆν° μμλ³΄κ³  μ΄ μμμ νμμ±μ μ΄ν΄ν ν λ§νλ λΆλΆμ κ²μμ ν΅ν΄μ μ»΄ν¬λνΈλ‘μ μ£Όμ κ΅¬νμ νμμ΅λλ€.
- propsλ₯Ό ν΅ν μ»΄ν¬λνΈ κ°μ κ° μ λ¬ μ νλ‘μΈμ€λ₯Ό μ΄ν΄νλλ‘ λΈλ ₯νμ΅λλ€.

### β μΆκ° κ΅¬ν λλ κ°μ νκ³  μΆμ λΆλΆ

- [ ] μ’μμ μ, μ‘°νμ λΆλ¬μ€κΈ°
- [ ] axiosλ₯Ό μ¬μ©νμ¬ λ°μ΄ν° λ°μμ€κΈ°
- [ ] μμΈ νλ©΄μμ μ¬μ΄λλ°μ λνλλ μμ λͺ©λ‘ κ°μ μ€μ΄κΈ°
- [ ] νλ©΄ κ° μ΄λμ Routerλ₯Ό μ¨μ κ΅¬νν΄λ³΄κΈ°
- [ ] APIλ₯Ό ν΅ν΄ λ°μ΄ν°λ₯Ό λ°μμ¬ λ μ’ λ λΉ¨λ¦¬ λ°μμ¬ μ μλ λ°©λ²?
