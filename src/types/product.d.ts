export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    rating: number;
    images: string[];
    description: string;
    details: {
        material: string;
        stone: string;
        chainLength: string;
        warranty: string;
    };
    tags: string[];
};
