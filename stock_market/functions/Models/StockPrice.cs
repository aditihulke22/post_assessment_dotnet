using System;
using System.Collections.Generic;

namespace functions.Models
{
    public partial class StockPrice
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string StockExchange { get; set; }
        public string Price { get; set; }
        public string Date { get; set; }
        public string Time { get; set; }

        public virtual Company CodeNavigation { get; set; }
        public virtual StockExchange StockExchangeNavigation { get; set; }
    }
}
