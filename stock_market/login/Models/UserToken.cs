using System;
using System.Collections.Generic;

namespace login.Models
{
    public partial class UserToken
    {
        public int? Id { get; set; }
        public string Token { get; set; }
    }
}
