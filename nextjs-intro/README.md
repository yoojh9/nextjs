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
