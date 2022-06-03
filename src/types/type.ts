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

export type User = {
    id: number;
    name: string;
    avatar: String[];
}

export type CommunityType = {
    id: number;
    tag: "취업고민" | string;
    name: string;
    summary: String;
    commentedUser: User[];
    comment: string;
}


export {}