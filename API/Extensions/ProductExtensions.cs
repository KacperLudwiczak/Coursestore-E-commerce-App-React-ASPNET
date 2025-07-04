using API.Entities;

namespace API.Extensions;

public static class ProductExtensions
{
    public static IQueryable<Product> Sort(this IQueryable<Product> query, string? orderBy)
    {
        query = orderBy switch
        {
            "price" => query.OrderBy(x => x.Price),
            "priceDesc" => query.OrderByDescending(x => x.Price),
            _ => query.OrderBy(x => x.Name)
        };

        return query;
    }

    public static IQueryable<Product> Search(this IQueryable<Product> query, string? searchTerm)
    {
        if (string.IsNullOrEmpty(searchTerm)) return query;

        var lowerCaseSearchTerm = searchTerm.Trim().ToLower();

        return query.Where(x => x.Name.ToLower().Contains(lowerCaseSearchTerm));
    }

    public static IQueryable<Product> Filter(this IQueryable<Product> query, 
        string? authors, string? types) {
            var authorList = new List<string>();
            var typeList = new List<string>();

            if (!string.IsNullOrEmpty(authors))
            {
                authorList.AddRange([.. authors.ToLower().Split(",")]);
            }

            if (!string.IsNullOrEmpty(types))
            {
                typeList.AddRange([.. types.ToLower().Split(",")]);
            }

            query = query.Where(x => authorList.Count == 0 || authorList.Contains(x.Author.ToLower()));
            query = query.Where(x => typeList.Count == 0 || typeList.Contains(x.Type.ToLower()));

            return query;
        }
}