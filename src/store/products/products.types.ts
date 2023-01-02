export interface IProduct {
    id: number;
    name: string;
    description: string;
};

export interface IProductsState {
    loading: boolean;
    products: IProduct[];
    current: IProduct | null;
};
