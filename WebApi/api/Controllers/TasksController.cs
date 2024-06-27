using api.DTOs;
using api.Models;
using api.Utils;
using domain.Entities;
using domain.Enums;
using infrastructure.Context;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Task = domain.Entities.Task;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TasksController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            List<Task> tasks = await _context.Set<Task>()
                .AsNoTracking()
                .ToListAsync();
            return Ok(tasks);
        }

        [HttpGet("GetTasksByStatus")]
        public async Task<IActionResult> GetTasksByStatus(string status)
        {
            List<Task> tasks = await _context.Set<Task>()
                .AsNoTracking()
                .Where(t => t.Status == StatusConverter.ConvertStringToSTATUS(status))
                .ToListAsync();
            return Ok(tasks);
        }

        [HttpGet("GetTasks")]
        public async Task<IActionResult> GetTasks(TaskFilter filter)
        {
            List<Task> tasks = await _context.Set<Task>()
               .AsNoTracking()
               .Where(t => t.Status.ToString() == filter.Status
               && t.DueDate <= filter.EndTime
               && t.DueDate >= filter.StartTime
               && t.Title.Contains(filter.SearchValue))
               .ToListAsync();
            return Ok();
        }

        [HttpPost("AddTask")]
        public async Task<IActionResult> AddTask(AddTaskDto dto)
        {
            Task task = new Task
            {
                Title = dto.Title,
                Description = dto.Description,
                DueDate = dto.DueTime,
                Status = STATUS.Pending
            };

            await _context.Set<Task>().AddAsync(task); 
            await _context.SaveChangeAsync();
            return Created();
        }

        [HttpPost("AddTasks")]
        public async Task<IActionResult> AddTasks(List<AddTaskDto> taskDtos)
        {
            List<Task> tasks = new List<Task>();
            taskDtos.ForEach(dto =>
            {
                Task task = new Task
                {
                    Title = dto.Title,
                    Description = dto.Description,
                    DueDate = dto.DueTime,
                    Status = STATUS.Pending
                };
                tasks.Add(task);
            });
            await _context.Set<Task>().AddRangeAsync(tasks);
            await _context.SaveChangeAsync();
            return Created();
        }

        [HttpPatch("ChangeTaskStatus")]
        public async Task<IActionResult> ChangeTaskStatus(int id, string status)
        {
            Task? task = await _context.Set<Task>().FindAsync(id);
            if(task == null)
            {
                return BadRequest();
            }
            else
            {
                task.Status = StatusConverter.ConvertStringToSTATUS(status);
                if (task.Status == STATUS.Completed)
                    task.IsCompleted = true;
                await _context.SaveChangeAsync();
                return Ok();
            }
        }

        [HttpPatch("ChangeTasksStatus")]
        public async Task<IActionResult> ChangeTasksStatus(List<int> ids, string status)
        {
            foreach (int id in ids)
            {
                Task? task = await _context.Set<Task>().FindAsync(id);
                if (task == null)
                {
                    return BadRequest();
                }
                else
                {
                    task.Status = StatusConverter.ConvertStringToSTATUS(status);
                    if (task.Status == STATUS.Completed)
                        task.IsCompleted = true;
                }
            }
            await _context.SaveChangeAsync();
            return Ok();
        }

        [HttpPatch("UpdateTask")]
        public async Task<IActionResult> UpdateTask(UpdateTaskDto dto)
        {
            Task? task = await _context.Set<Task>().FindAsync(dto.Id);
            if (task == null) return BadRequest();
            task.Status = StatusConverter.ConvertStringToSTATUS(dto.Status);
            task.Title = dto.Title;
            task.Description = dto.Description;
            task.DueDate = dto.DueTime;
            if (task.Status == STATUS.Completed)
                task.IsCompleted = true;
            await _context.SaveChangeAsync();
            return Ok();
        }
    }
}
