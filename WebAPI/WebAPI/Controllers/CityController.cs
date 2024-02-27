using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new[]{"paris","madrid"};
        }
        [HttpGet("{id}")]
        public IEnumerable<string> Get(int id)
        {
            return new[] { "Tokyo", "Seoul" };
        }
    }
}
