using System;

namespace API.RequestHelpers;

public class ProductParams : PaginationParams
{
    public string? OrderBy { get; set; }
    public string? SearchTerm { get; set; }
    public string? Authors { get; set; }
    public string? Types { get; set; }
}