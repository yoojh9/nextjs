import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({params}){
    const router = useRouter();
    
    const [title, id] = params || [];
    return <div>
        <Seo title={title}/>
        <h4>{title}</h4>
    </div>;
}

// API가 fetch가 아니라 데이터를 조금 더 빠르게 가져오기 위해 getServerSideProps를 사용
// 이 경우에는 영화 제목이랑 ID를 얻기 위해 getServerSideProps를 사용
// SEO에 최적화되게 만들 수 있음. 이렇게 하면 백엔드에서 가져온 데이터도 소스코드보기로 화면에 나옴
export function getServerSideProps({params: {params}}) {
    return {
        props: {
            params
        }
    }
}