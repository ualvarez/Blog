using System;
using System.Collections.Generic;

namespace BlogApi.Models
{
    public partial class Contenido
    {
        public Contenido()
        {
            Link = new HashSet<Link>();
        }

        public int IdContenido { get; set; }
        public string Titulo { get; set; }
        public byte[] Html { get; set; }
        public DateTime? Fecha { get; set; }

        public virtual ICollection<Link> Link { get; set; }
    }
}
