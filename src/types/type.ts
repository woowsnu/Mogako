export type CampType = {
    id: number;
    name: string;
    type: "pupular" | "sale";
    status: "ready" | "doing" | "done";
    filed: string;
    skill: string;
    startDate : string;
    thumnail: string;
}

export type CampDetail = {
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