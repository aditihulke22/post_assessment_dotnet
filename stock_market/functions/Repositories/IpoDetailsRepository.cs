using functions.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace functions.Repositories
{
    public class IpoDetailsRepository : IIpoDetailsRepository
    {
        private readonly StockDBContext _context;
        public IpoDetailsRepository(StockDBContext context)
        {
            _context = context;
        }
        public List<IpoDetails> GetAll()
        {
            return _context.IpoDetails.ToList();
        }

        public IpoDetails Get(int id)
        {
            return _context.IpoDetails.SingleOrDefault(e => e.Id == id);
        }

        public void Add(IpoDetails c)
        {
            _context.Add(c);
            _context.SaveChanges();
        }

        public void Update(IpoDetails c)
        {
            _context.IpoDetails.Update(c);
            _context.SaveChanges();
        }
    }
}
