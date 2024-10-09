interface IBaseModal {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    creator: string;
    creator_email: string;
    isDeleted: boolean;
}

export interface IMeal extends IBaseModal {
    image: File | string;
    slug: string;
    instructions: string;
    title: string;
    price: string;
    summary: string;
}
