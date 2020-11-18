using functions.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace functions.Repositories
{
    public interface IManageCompanyRepository
    {
        public List<Company> GetAll();
        public Company Get(string name);
        public void Add(Company c);
        public void Update(Company c);
    }
}
