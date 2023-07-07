interface CalendarItem {
  id: number;
  yn: boolean;
}

interface CalendarGroup {
  total: number;
  list: Array<CalendarItem>;
}
