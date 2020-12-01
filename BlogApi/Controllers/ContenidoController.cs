using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BlogApi.Models;
using BlogApi.Models.ViewModels;
using BlogApi.Models.Response;
using System.Text;
using System.Security.Cryptography.X509Certificates;
using Microsoft.AspNetCore.Authorization;

namespace BlogApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]

    public class ContenidoController : Controller
    {
        [HttpPost]
        public object Add(ContenidoViewModel model)
        {
            try
            {
                using (GaneshaAdriContext db = new GaneshaAdriContext())
                {
                    Contenido contenido = new Contenido();
                    contenido.Html = Encoding.ASCII.GetBytes(model.Content);
                    contenido.Titulo = model.Title;
                    db.Contenido.Add(contenido);
                    db.SaveChanges();
                    return new Response { Status = StatusResponse.Success, Message = "Succesfully Saved" };
                }
            }
            catch (Exception)
            {
                return new Response { Status = StatusResponse.Error, Message = "Invalid Data." };
            }

        }

        [HttpPut]
        public object Update(ContenidoViewModel model)
        {
            try
            {
                using (GaneshaAdriContext db = new GaneshaAdriContext())
                {
                    Contenido contenido = db.Contenido.Find(model.Id);
                    contenido.Titulo = model.Title;
                    contenido.Html = Encoding.ASCII.GetBytes(model.Content);
                    db.Entry(contenido).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                    db.SaveChanges();
                    return new Response { Status = StatusResponse.Success, Message = "Succesfully Updated" };
                }
            }
            catch (Exception)
            {
                return new Response { Status = StatusResponse.Error, Message = "Invalid Data." };                
            }
        }


        [HttpGet]
        public object Get()
        {
            using (
                GaneshaAdriContext db = new GaneshaAdriContext())
            {
                List<ContenidoViewModel> lstContenidoViewModel = new List<ContenidoViewModel>();
                foreach (var item in db.Contenido.ToList())
                {
                    ContenidoViewModel contenidoViewModel = new ContenidoViewModel
                    {
                        Id = item.IdContenido,
                        Content = item.Html == null ? string.Empty : Encoding.ASCII.GetString(item.Html),
                        Title = item.Titulo
                    };
                    lstContenidoViewModel.Add(contenidoViewModel);
                }
                return lstContenidoViewModel.ToList();
            }
        }


        [HttpGet]
        [Route("GetById")]
        public object GetById(int id)
        {
            using (GaneshaAdriContext db = new GaneshaAdriContext())
            {
                Contenido contenido = db.Contenido.Where(x => x.IdContenido == id).ToList().FirstOrDefault();
                ContenidoViewModel contenidoViewModel = new ContenidoViewModel
                {
                    Id = contenido.IdContenido,
                    Content = contenido.Html == null ? string.Empty : Encoding.ASCII.GetString(contenido.Html),
                    Title = contenido.Titulo
                };
                return contenidoViewModel;
            }
        }

        [HttpDelete("{Id}")]
        public object Delete(int Id)
        {
            try
            {
                using (GaneshaAdriContext db = new GaneshaAdriContext())
                {
                    Contenido contenido = db.Contenido.Find(Id);                    
                    db.Remove(contenido);
                    db.SaveChanges();
                    return new Response { Status =StatusResponse.Success, Message = "Succesfully Deleted" };
                }
            }
            catch (Exception)
            {
                return new Response { Status = StatusResponse.Error, Message = "Invalid Data." };
            }
        }
    }
}
