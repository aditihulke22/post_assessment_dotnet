using System;
using System.Collections.Generic;

namespace functions.Models
{
    public partial class Company
    {
        public Company()
        {
            StockPrice = new HashSet<StockPrice>();
        }

        public string CompanyName { get; set; }
        public string Turnover { get; set; }
        public string Ceo { get; set; }
        public string BoardOfDirectors { get; set; }
        public string StockExchange { get; set; }
        public string Brief { get; set; }
        public string Code { get; set; }
        public string Sector { get; set; }

        public virtual StockExchange StockExchangeNavigation { get; set; }
        public virtual ICollection<StockPrice> StockPrice { get; set; }
    }
}
