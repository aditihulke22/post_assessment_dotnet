using login.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace login.Repositories
{
    public interface IUserRepository
    {
        public User Get(string uname, string password);
        public UserToken GetById(int Id);
        public User GetByIdUser(int Id);
        public void AddUserToken(UserToken ut);
        public void Add(User u);
        public void Update(User u);
    }
}