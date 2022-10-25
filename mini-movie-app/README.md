# Mini Movie App

## 1) Layout 패턴

-   https://github.com/yoojh9/nextjs/commit/ff981966e0e8a5dfc6425013602c3d0e3494cbe2

<br>

### (1) Head

-   Next.js가 제공하는 head component를 사용해보자.
-   Next.js가 가진 멋진 점은 이런 작은 패키지들을 사용할 수 있다는 것이다

<br>

```javascript
import Head from "next/head";
```

<br>

-   만약 Next.js가 아닌 create-react-app으로 앱의 head 부분을 관리한다면 react helmet 같은 라이브러리를 다운해야 된다. 그 말은 우리 프로젝트완느 별개로 새로운 컴포넌트, 코드, 오류 등이 생긴다는 것이다.

-   https://github.com/yoojh9/nextjs/commit/d049ce4b686aa352bb10dd501533775f9a5cc27f

<br><br>

## 2) Fetching Data

-   Movie Data: https://www.themoviedb.org/
