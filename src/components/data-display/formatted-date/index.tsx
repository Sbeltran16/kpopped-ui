import { enUS } from "date-fns/locale";
import { format } from "date-fns";

const AVAILABLE_FORMATS = {
  "day-of-week-date-with-time": "EEE MMM do, yyyy @ h:mm a",
  "slashed-date": "MM/dd/yyyy",
};

type AvaliableFormatTypes = keyof typeof AVAILABLE_FORMATS;

interface FormattedDateInterface {
  date?: string;
  variant: AvaliableFormatTypes;
}

export default function FormattedDate({
  date,
  variant,
}: FormattedDateInterface) {
  if (!date) return null;

  const dateObj = new Date(date);
  const formattedDate = format(dateObj, AVAILABLE_FORMATS[variant], {
    locale: enUS,
  });

  return <>{formattedDate}</>;
}
