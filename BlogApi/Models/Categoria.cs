using System;
using System.Collections.Generic;

namespace BlogApi.Models
{
    public partial class Categoria
    {
        public Categoria()
        {
            Link = new HashSet<Link>();
        }

        public int IdCategoria { get; set; }
        public string Descripcion { get; set; }
        public string Titulo { get; set; }

        public virtual ICollection<Link> Link { get; set; }
    }
}
