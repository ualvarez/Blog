using BlogApi.Models.Response;
using BlogApi.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogApi.Services
{
  public interface IUserService
    {
        UserResponse Auth(AuthViewModel model);
    }
}
