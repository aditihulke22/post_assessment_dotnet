using functions.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace functions.Repositories
{
    public interface IManageExchangeRepository
    {
        public List<StockExchange> GetAll();
        public StockExchange Get(string name);
        public void Add(StockExchange c);
        public void Update(StockExchange c);
    }
}
