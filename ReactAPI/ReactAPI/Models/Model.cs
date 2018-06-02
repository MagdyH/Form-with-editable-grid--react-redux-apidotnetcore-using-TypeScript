using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace ReactApp.Models
{
    public class ReactAppContext : DbContext
    {
        public ReactAppContext(DbContextOptions<ReactAppContext> options)
            : base(options)
        { }

        public DbSet<User> Users { get; set; }
        //public DbSet<Post> Posts { get; set; }
    }

    
    public class User
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Birthday { get; set; }
        public string Email { get; set; }

        // public List<Post> Posts { get; set; }
    }

    //public class Post
    //{
    //    public int PostId { get; set; }
    //    public string Title { get; set; }
    //    public string Content { get; set; }

    //    public int BlogId { get; set; }
    //    public Blog Blog { get; set; }
    //}
}
