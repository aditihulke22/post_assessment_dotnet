using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net.Mail;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using login.Models;
using login.Repositories;
using MailKit.Security;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using MimeKit;
using MimeKit.Text;
using MailKit.Net.Smtp;
using System.Net;
using Microsoft.AspNetCore.Identity;

namespace login.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration configuration;
        /*public LoginController(IConfiguration configuration)
        {
            this.configuration = configuration;
        }*/

        private IUserRepository repo;
       // private UserManager<User> _userManager;
        private readonly Random _random = new Random();

        public UserController(IUserRepository _repo, IConfiguration configuration)
        {
            repo = _repo;
            //this._random = random;
            this.configuration = configuration;
            //this._userManager = _userManager;
        }

        [Route("ValidateAdmin/{uname}/{pwd}")]
        public IActionResult ValidateAdmin(string uname, string pwd)
        {
            if (uname == "Admin" && pwd == "12345")
            {
                return Ok(GenerateJwtToken("Admin"));
            }
            else
                return NotFound("Invalid User");
        }

        [Route("ValidateUser/{uname}/{pwd}")]
        public IActionResult ValidateUser(string uname, string pwd)
        {
            User u = repo.Get(uname, pwd);
            if (u == null)
            {
                return NotFound("Invalid User");
            }
            else
                return Ok(GenerateJwtToken(uname));
        }

        [HttpPost]
        [Route("Add")]
        public IActionResult Post(User u)
        {
            repo.Add(u);
            //var tok = await _userManager.GenerateEmailConfirmationTokenAsync(u);
            string token = RandomString(10);

            UserToken ut = new UserToken();
            ut.Id = u.Id;
            ut.Token = token;
            repo.AddUserToken(ut);

            GenerateMail(u, token);
            //Token t = await GenerateToken(u);
            //Confirm(t);
            
            return Ok();
        }

        [HttpPut]
        [Route("Update")]
        public IActionResult Put(User u)
        {
            u.Confirmed = "no";
            repo.Update(u);
            return Ok();
        }

        

        public string RandomString(int size, bool lowerCase = false)
        {
            var builder = new StringBuilder(size);

            // Unicode/ASCII Letters are divided into two blocks
            // (Letters 65–90 / 97–122):
            // The first group containing the uppercase letters and
            // the second group containing the lowercase.  

            // char is a single Unicode character  
            char offset = lowerCase ? 'a' : 'A';
            const int lettersOffset = 26; // A...Z or a..z: length=26  

            for (var i = 0; i < size; i++)
            {
                var @char = (char)_random.Next(offset, offset + lettersOffset);
                builder.Append(@char);
            }

            return lowerCase ? builder.ToString().ToLower() : builder.ToString();
        }

        [Route("Confirm/{Id}/{token}")]
        public void Confirm(int Id, string token)
        {
            UserToken ut = repo.GetById(Id);
            if(ut.Token.ToString() == token.ToString())
            {
                User u = repo.GetByIdUser(Id);
                u.Confirmed = "yes";
                repo.Update(u);
            }
        }

        private Token GenerateJwtToken(string uname)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, uname),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, uname),
                new Claim(ClaimTypes.Role,uname)
            };
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JwtKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            // recommended is 5 min
            var expires = DateTime.Now.AddDays(Convert.ToDouble(configuration["JwtExpireDays"]));
            var token = new JwtSecurityToken(
                configuration["JwtIssuer"],
                configuration["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: credentials
            );

            var response = new Token
            {
                uname = uname,
                token = new JwtSecurityTokenHandler().WriteToken(token)
            };
            return response;
        }

        

        private void GenerateMail(User u, string t)
        {
            //string confirmationToken =
            //     GenerateEmailConfirmationTokenAsync(u).Result;

            var email = new MimeMessage();
            email.To.Add(MailboxAddress.Parse(u.Email));
            email.From.Add(MailboxAddress.Parse("to@example.com"));
            email.Subject = "Confirmation email";
            string link = "<a href=\"http://localhost:50444/api/User/Confirm/" + u.Id + "/" + t + "\">Click to confirm.</a>";
            email.Body = new TextPart(TextFormat.Html) { Text = link };

            using var smtp = new MailKit.Net.Smtp.SmtpClient();
            smtp.Connect("smtp.mailtrap.io", 2525, SecureSocketOptions.StartTls);
            smtp.Authenticate("a17be57be224dc", "b0a36fa0144c61");
            smtp.Send(email);
            smtp.Disconnect(true);
            //smtp.Connect()
        }
    }
}