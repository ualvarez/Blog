using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogApi.Models.Response
{
    public class Response
    {
        public StatusResponse Status { get; set; }
        public string Message { get; set; }

        public object Data { get; set; }


        public Response()
        {
            this.Status = StatusResponse.Success;
        }
    }
}
