using excel.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace excel.Repositories
{
    public class ImportExcelRepository: IImportExcelRepository
    {
        private readonly StockDBContext _context;
        public ImportExcelRepository(StockDBContext context)
        {
            _context = context;
        }

        public void Add(StockPrice c)
        {
            _context.StockPrice.Add(c);
            _context.SaveChanges();
        }
    }
}
