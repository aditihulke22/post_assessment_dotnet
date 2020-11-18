using System;
using System.Collections.Generic;

namespace functions.Models
{
    public partial class StockExchange
    {
        public StockExchange()
        {
            Company = new HashSet<Company>();
            StockPrice = new HashSet<StockPrice>();
        }

        public int? Id { get; set; }
        public string StockExchange1 { get; set; }
        public string Brief { get; set; }
        public string Contact { get; set; }
        public string Remarks { get; set; }

        public virtual ICollection<Company> Company { get; set; }
        public virtual ICollection<StockPrice> StockPrice { get; set; }
    }
}
