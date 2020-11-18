using excel.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace excel.Repositories
{
    public interface IImportExcelRepository
    {
        public void Add(StockPrice s);
    }
}
