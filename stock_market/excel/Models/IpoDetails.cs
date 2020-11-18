using System;
using System.Collections.Generic;

namespace excel.Models
{
    public partial class IpoDetails
    {
        public int Id { get; set; }
        public string CompanyName { get; set; }
        public string StockExchange { get; set; }
        public string PricePerShare { get; set; }
        public int? TotalShares { get; set; }
        public DateTime? OpenDateTime { get; set; }
        public string Remarks { get; set; }
    }
}
