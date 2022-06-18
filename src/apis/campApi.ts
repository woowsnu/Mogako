import axios from "axios";

const serverApi = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URI,
}); 
// 서버 주소는 환경 변수로 뺀 후 깃허브에 업로드

const getCampByType = async (type: string) => {
    const reponse = await serverApi.get(`/camps?type=${type}`);
    return Response;
}

// axios.get("https://")