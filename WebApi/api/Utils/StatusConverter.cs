using domain.Enums;

namespace api.Utils
{
    public class StatusConverter
    {
        public static STATUS ConvertStringToSTATUS(string status)
        {
            return status.ToLower().Trim() switch
            {
                "pending" => STATUS.Pending,
                "processing" => STATUS.Processing,
                "completed" => STATUS.Completed,
                "outOfDate" => STATUS.OutOfDate,
                _ => STATUS.Pending
            };
        }
    }
}
