export interface ProductFilter {
    category?: string;
    minprice?: number;
    maxprice?: number;
    instock?: boolean;
    page?: number;
    pagesize?: number;
    orderby?: string;
}

export function parseProductFilter(query: any): ProductFilter {
  return {
    category: query.category ? query.category : undefined,
    minprice : query.minprice ? Number(query.minprice) : undefined,
    maxprice: query.maxprice ? Number(query.maxprice) : undefined,
    instock: query.instock ? query.instock === "true" : undefined,
    page : query.page ? Number(query.page) : undefined,
    pagesize : query.pagesize ? Number(query.pagesize) : undefined,
    orderby : query.orderby ?  query.orderby : undefined
  };
}