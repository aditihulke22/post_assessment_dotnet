using functions.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace functions.Repositories
{
    public interface IIpoDetailsRepository
    {
        public List<IpoDetails> GetAll();
        public IpoDetails Get(int id);
        public void Add(IpoDetails c);
        public void Update(IpoDetails c);
    }
}
