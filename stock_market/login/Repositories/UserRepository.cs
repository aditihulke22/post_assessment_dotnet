using login.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace login.Repositories
{
    public class UserRepository : IUserRepository
    {
        private UserDBContext db;

        public UserRepository()
        {
            db = new UserDBContext();
        }

        public User Get(string uname, string password)
        {
            return db.User.SingleOrDefault(e => e.Username == uname && e.Password == password && e.Confirmed == "yes");
        }

        public UserToken GetById(int Id)
        {
            return db.UserToken.SingleOrDefault(e => e.Id == Id);
        }

        public User GetByIdUser(int Id)
        {
            return db.User.SingleOrDefault(e => e.Id == Id);
        }

        public void AddUserToken(UserToken ut)
        {
            db.UserToken.Add(ut);
            db.SaveChanges();
        }
        public void Add(User u)
        {
            db.User.Add(u);
            db.SaveChanges();
        }

        public void Update(User u)
        {
            db.User.Update(u);
            db.SaveChanges();
        }
    }
}
