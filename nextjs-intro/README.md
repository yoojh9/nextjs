# NextJS Introduction

## 1) Framework vs Library

-   library는 개발자로서 사용하는 것
-   library를 불러와서 library를 사용해서 무언가를 함.
-   framework는 개발자가 작성한 코드를 불러 옴
-   framework에서는 만약 코드를 적절한 위치에 잘 적기만 한다면 코드를 불러와서 모든 걸 동작하게 함
-   library를 사용할 때는 개발자가 원하는 대로 코드를 작성할 수 있다. library는 사용하고 싶을 때 사용할 수 있다.

-   framework는 코드를 어떤 곳에 넣으면 framework가 그 코드를 부르는 형태다.

-   React.js는 우리가 원할 때 부르고 원할 때 사용하는 library이다.
-   next.js 같은 framework에서는 특정한 규칙을 따라서 코드를 작성해야 함.

<br><br>

## 2) Pages

-   pages안에 파일을 만들면 next.js에서 해당 파일명의 이름으로 url 이름으로 쓴다.
-   /about url로 이동하면 about.js가 랜더링 된다.

-   이것은 시간을 많이 절약해준다. create-react-app만을 한다면 React Router DOM을 다운받아야 하고, 설정해야 하고 router를 만들고 routes를 설계하고 component를 import 하고, router를 render하고..
-   next.js를 사용하게 되면 이 모든 것들이 이미 framework에 구현되어 있다.
-   pages 하위의 파일명은 중요하지만, 파일 내의 components 이름은 중요하지 않다. 그냥 **export default**이기만 하면 된다.
-   만약 default로 export 하지 않는다면, 해당 페이지 이름의 url로 접근했을 때 에러가 발생하는 것을 볼 수 있음
-   즉, 유저에게 보여주고 싶은 게 있다면 pages 폴더에서 **export default function**을 해야 함.

<br><br>

## 3) Pre Rendering

-   Next.js의 가장 큰 장점 중 하나는 앱에 있는 페이지들이 미리 렌더링 된다는 것이다.
-   create-react-app은 client-side Render(CSR)를 하는 앱을 만든다.
-   client-side 렌더링이란 사용자의 브라우저가 유저가 보는 모든 UI를 만드는 것을 의미한다. 브라우저가 react.js를 다운 받고 코드를 다운받았을 때, 그 때 react.js는 다른 모든 것들을 렌더링하고 유저는 그 이후에 화면을 볼 수 있다.
-   즉 CSR은 브라우저가 자바스크립트를 가져와서 client-side의 자바스크립트가 모든 UI를 만든다.

-   Next.js는 server-side Render로 유저들의 연결 속도가 느리거나 자바스크립트가 비활성화 되어 있어도 사용자에게 HTML을 제공해줄 수 있다.
-   Next.js는 초기 상태로 pre-rendering을 한다.

-   react.js를 프론트엔드 안에서 실행하는 걸 hydration이라고 부른다.
-   왜냐면 next.js는 react.js를 백엔드에서 동작시켜서 이 페이지를 미리 만드는데, 이 때 component들을 render 시키고 렌더링이 끝났을 때 HTML이 된다. next.js는 그 HTML을 페이지의 소스코드에 넣어준다. 그럼 유저는 자바스크립트와 react.js가 로딩되지 않았더라도 콘텐츠를 볼 수 있다. 그리고 react.js가 로딩 되었을 때 기본적으로 이미 존재하는 것들과 연결하여, 일반적인 react.js 앱이 된다.
-   유저가 웹 사이트에 가면 초기 상태의 component로 된 미리 생성된 HTML 페이지를 보게 되고 그리고 상호 작용이 일어나면 react.js는 그걸 받아서 아주 잘 동작하게 된다.

<br><br>

## 4) Routing

-   NavBar.js 에서 아래와 같이 nativage 하는 데 <a> 태그를 사용하게 되면 아래와 같은 ESLint 에러 메세지를 볼 수 있다.

```javascript
Do not use an `<a>` element to navigate to `/`. Use `<Link />` from `next/link` instead
```

```javascript
export default function NavBar() {
    return (
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </nav>
    );
}
```

<br>

-   Next.js 어플리케이션에서 <a> 태그를 내비게이션 하는 데에 사용하면 안되는 이유는 Next.js에 앱 내에서 페이지를 네비게이트 할 때 사용해야만 하는 특정 컴포넌트가 존재하기 때문이다. (React.js에서 React Router Link를 사용해야 할 때와 같은 이유이다.)
-   <a> 태그로 이동하게 되면 전체 어플리케이션이 새로고침 된다. 이 말은 브라우저가 다른 페이지로 보내기 위해 전체 페이지를 새로고침 한다는 말이다. 이런 방식은 느릴 수 있기 때문에 Next.js에서는 특정 Link 컴포넌트가 존재한다.

<br>

```javascript
import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
        </nav>
    );
}
```

<br><br>

## 5) CSS 추가하는 방법

### (1) CSS Modules

-   https://github.com/yoojh9/nextjs/commit/4774bc539f7cf12264a5251ac11fe7d3aaf7d0ca

-   아래 패턴을 CSS 모듈이라고 하는데, 이 패턴은 className을 추가할 때, className을 텍스트로 적지 않고 자바스크립트 오브젝트에서의 프로퍼티 형식으로 적는다.

```javascript
import styles from "./NavBar.module.css";

export default function NavBar() {
    const router = useRouter();

    return <nav className={styles.nav}>...</nav>;
}
```

<br>

-   이런 방식의 장점은 클래스 이름을 내부적으로 변경해주므로 그 어떤 '충돌'도 만들지 않는다.
-   아래는 위 코드를 소스보기 했을 때의 코드이다.

```javascript
<nav class="NavBar_nav__OBiyO">
    <a style="color:blue" href="/">
        Home
    </a>
    <a style="color:red" href="/about">
        About
    </a>
</nav>
```

<br><br>

### (2) Styled.jsx

-   https://github.com/yoojh9/nextjs/commit/dbe927e8d5c95ab1013201bbcd6ece193edd47fb

```javascript
export default function NavBar() {
    const router = useRouter();

    return (
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>

            <style jsx>{`
                nav {
                    background-color: tomato;
                }
                a {
                    text-decoration: none;
                }
                .active {
                    color: yellow;
                }
            `}</style>
        </nav>
    );
}
```

<br>

-   className에 대해서 고민할 필요도 없다.
-   부모 컴포넌트가 그 클래스 이름을 사용하고 있을지라도 상관 없다.
-   코드 내에서 NavBar가 active라는 이름의 클래스를 갖고 있다고 하더라도 styled.jsx를 사용하기 때문에, 이 스타일들은 오직 이 컴포넌트 내부로 범위가 한정된다.
    그래서 index.js 파일에서 anchor의 색을 바꾸려고 시도해도 NavBar 내의 다른 anchor에 영향을 미치지 못한다.
-   또한 h1 태그 내에 'active'라는 className을 직접 입력해도 작동하지 않는다. className은 랜덤으로 이름이 변경되고 내부에서만 적용된다.
-   이렇게 랜덤으로 변경되는 className은 충돌에서부터 구해준다.

```javascript
// index.js

export default function Home() {
    return (
        <div>
            <NavBar />
            <h1 className="active">Hello</h1>

            <style jsx>{`
                a {
                    color: white;
                }
            `}</style>
        </div>
    );
}
```

<br><br>

## 6) Global Styles 추가

-   style 태그에 global Prop을 추가한다.

```javascript
<style jsx global>
    {``}
</style>
```

-   App Component App Page

<br>

### (1) App Component

-   App Component는 NextJS가 모든 페이지를 렌더링할 수 있게 하는 일종의 어떤 컴포넌트의 청사진(blue print)이다.
-   기본적으로 Next.js 프레임워크 내에 포함되어 있다. 하지만 그걸 커스터마이징하려면 어떤 파일을 하나 만들어야 하는데, **\_app.js**라는 이름으로 만들어야 한다.
-   Next.js는 index.js 파일을 렌더링 하기 전에 \_app.js를 먼저 확인하고, \_app.js에 넣어둔 청사진을 기반으로 index.js의 내용을 렌더링한다.
-   그러므로 \_app.js는 어떻게 페이지가 있어야 하는지, 어떤 컴포넌트가 어떤 페이지에 있어야 하는지에 대한 청사진이다.

<br>

```javascript
// _app.js

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
```

-   NextJS가 about가 about 페이지를 렌더링하려고 할 때, NextJS는 About 컴포넌트를 가져다가 Component의 prop으로서 \_app.js 파일 내의 App 함수에 전달해준다. 그리고 App 함수는 그 페이지를 렌더링한다.

<br>

-   원한다면 Global Styles를 추가할 수도 있다.

```javascript
export default function App({ Component, pageProps }) {
    return (
        <>
            <NavBar />
            <Component {...pageProps} />
            <style jsx global>{`
                a {
                    color: gray;
                }
            `}</style>
        </>
    );
}
```

<br>

-   만약 Next.js에서 페이지나 컴포넌트 내에 css를 임포트 하고 싶다면 반드시 module이어야 한다.

-   예를 들어 about.js에 아래와 같이 globals.css를 import 하면 에러가 발생한다.

```
// about.js

import "../styles/globals.css";

export default function About() {
    return <div>
        <h1>About</h1>
    </div>
}
```

<br>

```
error - ./styles/globals.css

Global CSS cannot be imported from files other than your Custom <App>. Due to the Global nature of stylesheets, and to avoid conflicts,
```

-   하지만 커스텀 App 컴포넌트가 있는 \_app.js에서는 모든 Global Styles를 임포트 할 수 있다.

```
// _app.js

import NavBar from "../components/NavBar";
import "../styles/globals.css"

export default function App({Component, pageProps}) {
    return (
        <>
            <NavBar/>
            <Component {...pageProps}/>
            <style jsx global>{`
                a {
                    color: gray;
                }
            `}</style>
        </>
    )
}
```
