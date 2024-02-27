using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController(DataContext context) : ControllerBase
    {
        [HttpGet]
        [ProducesResponseType(200,Type=typeof(IList<City>))]
        [ProducesResponseType(404)]
        public IActionResult Get()
        {
            return Ok(context.Cities.ToList());
        }


        //     Dummy method
        [HttpGet("{id}")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<string>))]
        [ProducesResponseType(404)]
        public IActionResult Get(int id)
        {
            return Ok(context.Cities.Select(c => c.Name));
        }
    }
}
