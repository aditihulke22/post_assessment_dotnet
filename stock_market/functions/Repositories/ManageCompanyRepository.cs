using functions.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace functions.Repositories
{
    public class ManageCompanyRepository : IManageCompanyRepository
    {
        private readonly StockDBContext _context;
        public ManageCompanyRepository(StockDBContext context)
        {
            _context = context;
        }
        public List<Company> GetAll()
        {
            return _context.Company.ToList();
        }

        public Company Get(string name)
        {
            return _context.Company.SingleOrDefault(e => e.CompanyName == name);
        }

        public void Add(Company c)
        {
            _context.Add(c);
            _context.SaveChanges();
        }

        public void Update(Company c)
        {
            _context.Company.Update(c);
            _context.SaveChanges();
        }
    }
}
