using functions.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace functions.Repositories
{
    public class ManageExchangeRepository : IManageExchangeRepository
    {
        private readonly StockDBContext _context;
        public ManageExchangeRepository(StockDBContext context)
        {
            _context = context;
        }
        public List<StockExchange> GetAll()
        {
            return _context.StockExchange.ToList();
        }

        public StockExchange Get(string name)
        {
            return _context.StockExchange.SingleOrDefault(e => e.StockExchange1 == name);
        }

        public void Add(StockExchange c)
        {
            _context.Add(c);
            _context.SaveChanges();
        }

        public void Update(StockExchange c)
        {
            _context.StockExchange.Update(c);
            _context.SaveChanges();
        }
    }
}



