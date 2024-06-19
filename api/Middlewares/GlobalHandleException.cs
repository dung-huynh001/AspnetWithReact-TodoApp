using System.Diagnostics;
using System.Text.Json;

namespace Server.Middlewares
{
    public class GlobalHandleException
    {
        private readonly RequestDelegate _next;
        public GlobalHandleException(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception ex)
            {
                string sInsBy = GetCurrentUserId(context);
                StackTrace stackTrace = new StackTrace(ex, true);
                StackFrame? frame = stackTrace.GetFrame(0);
                string? fileName = frame?.GetFileName();
                int? lineNumber = frame?.GetFileLineNumber();
                string? methodName = frame?.GetMethod()?.DeclaringType?.Name;
                string? sEventCatg = Path.GetFileName(fileName);
                string sEventMsg = $"{ex.Message}\t{ex.InnerException?.Message}";
                string sEventSrc = methodName != null ? methodName.Substring(0, methodName.LastIndexOf(">") + 1) + "\tLine:" + lineNumber : "Unknown";
                string sEventType = context.Request.Method;

                await TraceLog(sEventCatg, sEventMsg, sEventSrc, sEventType, sInsBy);
                await HandleExceptionAsync(context, ex);
            }
        }

        private string GetCurrentUserId(HttpContext? context)
        {
            if (context != null && context.User.Identity != null && context.User.Identity.IsAuthenticated && context.User.Identity.Name != null)
            {
                return context.User.Identity.Name;
            }

            return "--unknown--";
        }


        private async Task HandleExceptionAsync(HttpContext context, Exception ex)
        {
            context.Response.ContentType = "Application/json";
            var statusCode = context.Response.StatusCode;
            string errorMessage = ex.Message + "/n" + ex.InnerException?.Message;


            ErrorDetails err = new ErrorDetails()
            {
                Message = errorMessage,
                StatusCode = statusCode
            };

            await context.Response.WriteAsync(err.ToString());
        }

        private async Task TraceLog(string? sEventCatg, string sEventMsg, string? sEventSrc, string sEventType, string sInsBy)
        {
            string loggingFolderPath = CreateLoggingFolder();
            string loggingDestinationFolderPath = CreateLoggingDestinationFolder(loggingFolderPath);
            string pathSeparator = Path.PathSeparator.ToString();
            string sTraceTime = DateTime.Now.ToString("ddMMMyyyyHH");

            string sLogFormat = DateTime.Now.ToShortDateString().ToString() + " " + DateTime.Now.ToLongTimeString().ToString() + " ==>\t";
            string sTraceMsg = $"{sEventType,-6}\t{sEventCatg,-40}\t{sEventSrc,-40}\t{sInsBy,-40}\t{sEventMsg}\n";

            string sPathName = loggingDestinationFolderPath + pathSeparator + sTraceTime + ".txt";
            StreamWriter sw = new StreamWriter(sPathName, true);
            await sw.WriteLineAsync(sLogFormat + sTraceMsg);
            sw.Flush();
            sw.Close();
        }

        private string CreateLoggingFolder()
        {
            string loggingFolderPath = Path.Combine(Directory.GetCurrentDirectory(), "Logging/Exceptions");
            if (!Directory.Exists(loggingFolderPath))
            {
                Directory.CreateDirectory(loggingFolderPath);
            }
            return loggingFolderPath;
        }

        private string CreateLoggingDestinationFolder(string loggingFolderPath)
        {
            DateTime today = DateTime.Now;

            string pathSeparator = Path.DirectorySeparatorChar.ToString();
            string year = today.Year.ToString();
            string month = today.Month.ToString();
            string loggingDate = today.ToString("ddMMM");
            string sTraceTime = today.ToString("ddMMMyyyyHH");

            string destinationFolderPath = $"{loggingFolderPath}{pathSeparator}{year}{month}{pathSeparator}{loggingDate}";

            if(!Directory.Exists(destinationFolderPath))
            {
                Directory.CreateDirectory(destinationFolderPath);
            }

            return destinationFolderPath;
        }
    }

    public class ErrorDetails
    {
        public int StatusCode { get; set; }
        public string Message { get; set; } = String.Empty;
        public string StackTrace { get; set; } = String.Empty;

        public override string ToString()
        {
            return JsonSerializer.Serialize(this);
        }
    }
}
