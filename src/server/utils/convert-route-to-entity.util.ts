const mapping: Record<string, string> = {
  bookings: 'booking',
  cars: 'car',
  ratings: 'rating',
  reports: 'report',
  teams: 'team',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
