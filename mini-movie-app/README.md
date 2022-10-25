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
-   https://github.com/yoojh9/nextjs/commit/2acf9f2521dfe34f3952d3d158dbfffcfd9bcfeb

<br><br>

## 3) Redirect and Rewrite

### (1) Redirect

-   next.config.js에서 redirect 설정도 할 수 있다.
-   아래 코드는 /contact로 접근할 시 /form으로 redirect 된다.
-   우리 website 안에서든, 바깥으로든 redirect 할 수 있다.
-   서버 설정이 바뀌는 것이므로 서버 restart 필요.

<br>

```javascript
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
        return [
            {
                source: "/contact",
                destination: "/form",
                permanent: false,
            },
        ];
    },
};

module.exports = nextConfig;
```

<br>

```javascript
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
        return [
            {
                source: "/old-blog/:path",
                destination: "/new-blog/:path",
                permanent: false,
            },
        ];
    },
};

module.exports = nextConfig;
```

<br>

### (2) Rewrite

-   rewirtes는 유저를 redirect 시키기는 하지만 URL은 변하지 않는다.
-   그래서 index.js에서 fetch 한 API_KEY를 숨기고 싶다면 rewrites를 이용한다.
-   이 방법으로 NextJS가 Request를 Masking 할 수 있음. (마스크를 씌울 수 있음..)

```javascript
// next.config.js

const API_KEY = "###########";

async rewrites() {
    return [
      {
          source: "/api/movies",
          destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`
      }
    ]
  }

```

<br>

-   위 API_KEY는 .env 파일로도 작업할 수 있다.
