using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReactApp.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReactAPI.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller       
    {
        private readonly ReactAppContext _context;
        public UsersController(ReactAppContext context)
        {
            _context = context;
        }
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return _context.Users.ToList();
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public User Get(int id)
        {
            return _context.Users.FirstOrDefault(u=>u.UserId == id);
        }

        // POST api/<controller>
        [HttpPost]
        public User Post([FromBody] User user)
        {
            _context.Add(user);
            _context.SaveChanges();
            return user;
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public User Put(int id, [FromBody] User user)
        {
            if (id != user.UserId)
            {
                 NotFound();

                return user;
            }

            if (UserExists(id))
            {
                _context.Update(user);
                _context.SaveChanges();

                return user;
            }
            else
            {
                return user;
            }
           
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var user = _context.Users.FirstOrDefault(u => u.UserId == id);
            if (user != null)
            {
                _context.Users.Remove(user);
                _context.SaveChanges();
            }
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.UserId == id);
        }
    }
}
