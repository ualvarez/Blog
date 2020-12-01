using System;
using System.Collections.Generic;

namespace BlogApi.Models
{
    public partial class Link
    {
        public int IdLink { get; set; }
        public int? IdContenido { get; set; }
        public int IdCategoria { get; set; }
        public string Titulo { get; set; }
        public string Descripcion { get; set; }

        public virtual Categoria IdCategoriaNavigation { get; set; }
        public virtual Contenido IdContenidoNavigation { get; set; }
    }
}
