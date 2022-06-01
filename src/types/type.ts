// import {camp} from "./"


// type task = ["IT", "디자인", "기획"]
// type filed = ["벡엔드", "SQL", "프론트"]

// interface camp {
//     task : String,
//     filed : String,
//     status : "모집전" | "모집중" | "모집완료"
// }


type CampType = {
    id: number;
    name: string;
    type: "pupular" | "sale";
    status: "ready" | "doing" | "done";
    filed: string;
    skill: string;
    startDate : string;
    thumnail: string;
}

type CampDetail = {
    id: number;
    name: string;
    tags: string[];
    desc: string;
    seat: string;
    reviewMaterial: string[];
    headerImage:string;
    images: string[];
    process: string;
    type: "popular" | "sale";
    status: string;
    review: {content: string; reviewer: string }
}


export {}