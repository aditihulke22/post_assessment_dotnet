using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using functions.Models;
using functions.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace functions.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ManageCompanyController : ControllerBase
    {
        private readonly IManageCompanyRepository _repo;
        public ManageCompanyController(IManageCompanyRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        [Route("GetAll")]
        public IActionResult GetAll()
        {
            try
            {
                List<Company> l = _repo.GetAll();
                return Ok(l);
            }
            catch (Exception ex)
            {

                return NotFound();

            }
        }

        [HttpGet]
        [Route("Get/{name}")]
        public IActionResult Get(string name)
        {

            try
            {
                Company c = _repo.Get(name);
                return Ok(c);
            }
            catch (Exception ex)
            {
                return NotFound();

            }
        }

        [HttpPost]
        [Route("Add")]
        public IActionResult Post(Company item)
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
        public IActionResult Update(Company item)
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
