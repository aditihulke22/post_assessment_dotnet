using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using functions.Models;
using functions.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace functions.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IpoDetailsController : ControllerBase
    {
        private readonly IIpoDetailsRepository _repo;
        public IpoDetailsController(IIpoDetailsRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        [Route("GetAll")]
        public IActionResult GetAll()
        {
            try
            {
                List<IpoDetails> l = _repo.GetAll();
                return Ok(l);
            }
            catch (Exception ex)
            {
                return NotFound();

            }
        }

        [HttpGet]
        [Route("Get/{id}")]
        public IActionResult Get(int id)
        {

            try
            {
                IpoDetails c = _repo.Get(id);
                return Ok(c);
            }
            catch (Exception ex)
            {
                return NotFound();

            }
        }

        [HttpPost]
        [Route("Add")]
        public IActionResult Post(IpoDetails item)
        {
            try
            {
                _repo.Add(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound("Cannot Add.");

            }
        }
        [HttpPut]
        [Route("Update")]
        public IActionResult Update(IpoDetails item)
        {
            try
            {
                _repo.Update(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound();

            }
        }
    }
}
