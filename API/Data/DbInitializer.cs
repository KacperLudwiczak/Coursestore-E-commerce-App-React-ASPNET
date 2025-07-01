using System;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DbInitializer
{
    public static void InitDb(WebApplication app)
    {
        using var scope = app.Services.CreateScope();

        var context = scope.ServiceProvider.GetRequiredService<StoreContext>()
            ?? throw new InvalidOperationException("Failed to retrieve store context");

        SeedData(context);
    }

    private static void SeedData(StoreContext context)
    {
        context.Database.Migrate();

        if (context.Products.Any()) return;

        var products = new List<Product>
        {
        new() {
            Name = "JavaScript Mastery Course",
            Description = "Learn modern JavaScript from scratch including ES6+, async programming, and real-world DOM manipulation. Perfect for aspiring web developers.",
            Price = 15000,
            PictureUrl = "/images/products/JS-Course.jpg",
            Author = "JavaScript Academy",
            Type = "Web Development",
            QuantityInStock = 50
        },
        new() {
            Name = "Complete C# Developer Course",
            Description = "Master C# programming with hands-on projects. Covers OOP, .NET, ASP.NET Core, and more. Ideal for backend and full-stack developers.",
            Price = 18000,
            PictureUrl = "/images/products/C#-Course.webp",
            Author = "CodeSharp",
            Type = "Backend Development",
            QuantityInStock = 40
        },
        new() {
            Name = "HTML for Beginners",
            Description = "A step-by-step course to build a websites using HTML. Suitable for absolute beginners.",
            Price = 10000,
            PictureUrl = "/images/products/HTML-Course.jpg",
            Author = "Frontend School",
            Type = "Web Development",
            QuantityInStock = 60
        },
        new() {
            Name = "CSS for Beginners",
            Description = "A step-by-step course to build beautiful and responsive websites using CSS. Suitable for absolute beginners.",
            Price = 10000,
            PictureUrl = "/images/products/CSS-Course.jpg",
            Author = "Frontend School",
            Type = "Web Development",
            QuantityInStock = 60
        },
        new() {
            Name = "React for Frontend Developers",
            Description = "Learn how to build powerful single-page applications using React. Covers components, hooks, context, and project structure.",
            Price = 20000,
            PictureUrl = "/images/products/React-Course.jpg",
            Author = "Reactive Labs",
            Type = "Web Development",
            QuantityInStock = 45
        },
        new() {
            Name = "ASP.NET Core Web API Bootcamp",
            Description = "Learn to create RESTful APIs using ASP.NET Core, Entity Framework, and secure authentication. Ideal for building scalable backend services.",
            Price = 22000,
            PictureUrl = "/images/products/ASPNET-Course.jpg",
            Author = "Backenders Inc.",
            Type = "Backend Development",
            QuantityInStock = 30
        },
        new() {
            Name = "SQL & Databases for Developers",
            Description = "Understand relational databases, SQL queries, joins, and optimization. A must-have for any serious developer working with data.",
            Price = 14000,
            PictureUrl = "/images/products/SQL-Course.jpg",
            Author = "DataWiz",
            Type = "Databases",
            QuantityInStock = 55
        },
        new() {
            Name = "Python Programming Fundamentals",
            Description = "Learn Python from the ground up. Covers syntax, control flow, data structures, and hands-on projects. Great for automation and backend dev.",
            Price = 16000,
            PictureUrl = "/images/products/Python-Course.jpg",
            Author = "PyCoders Hub",
            Type = "Web Development",
            QuantityInStock = 70
        },
        new() {
            Name = "TypeScript in Depth",
            Description = "Master TypeScript with advanced types, interfaces, generics, and integration with modern JavaScript frameworks.",
            Price = 17000,
            PictureUrl = "/images/products/TS-Course.png",
            Author = "Typed Academy",
            Type = "Web Development",
            QuantityInStock = 35
        },
        new() {
            Name = "Version Control with Git",
            Description = "Understand Git workflows, branches, merges, rebases, and GitHub collaboration. A critical skill for every developer.",
            Price = 9000,
            PictureUrl = "/images/products/Git-Course.webp",
            Author = "DevOps University",
            Type = "Tools",
            QuantityInStock = 80
        },
        new() {
            Name = "Angular Complete Guide",
            Description = "Learn Angular from basics to advanced. Includes routing, components, forms, HTTP, RxJS, and deployment.",
            Price = 19000,
            PictureUrl = "/images/products/Angular-Course.jpg",
            Author = "Angular Pros",
            Type = "Web Development",
            QuantityInStock = 38
        },
        new() {
            Name = "Docker & Kubernetes Crash Course",
            Description = "Learn containerization and orchestration with Docker and Kubernetes. Build, deploy, and scale applications in modern dev environments.",
            Price = 21000,
            PictureUrl = "/images/products/Docker-Course.jpg",
            Author = "CloudOps School",
            Type = "DevOps",
            QuantityInStock = 25
        },
        new() {
            Name = "Node.js API Development",
            Description = "Build scalable backend services using Node.js, Express, and MongoDB. Learn routing, middleware, JWT authentication, and deployment.",
            Price = 19000,
            PictureUrl = "/images/products/Node-Course.jpg",
            Author = "Backend Ninjas",
            Type = "Backend Development",
            QuantityInStock = 45
        },
        new() {
            Name = "Next.js Fullstack Web App Course",
            Description = "Create fullstack React apps using Next.js, server-side rendering, API routes, and deployment with Vercel.",
            Price = 20000,
            PictureUrl = "/images/products/Next-Course.webp",
            Author = "Fullstack Forge",
            Type = "Web Development",
            QuantityInStock = 32
        },
        new() {
            Name = "Figma UI/UX Design Fundamentals",
            Description = "Learn how to design intuitive, user-friendly interfaces using Figma. Perfect for developers looking to improve UI design skills.",
            Price = 13000,
            PictureUrl = "/images/products/Figma-Course.jpg",
            Author = "Creative Studio",
            Type = "Tools",
            QuantityInStock = 48
        }
        };

        context.Products.AddRange(products);

        context.SaveChanges();
    }
}