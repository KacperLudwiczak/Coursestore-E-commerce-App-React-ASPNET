export type ProductParams = {
    orderBy: string;
    searchTerm?: string;
    types: string[];
    authors: string[];
    pageNumber: number;
    pageSize: number;
}