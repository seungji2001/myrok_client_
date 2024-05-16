export const ROUTES = {
  ROOT: '/',
  LOGIN: '/login',
  START: '/start',
  JOIN: '/join',
  CREATE: '/create',
  DASH_BOARD: '/dashboard',
  PROJECT_HOLDER: '/project-holder',
  MEETING_MINUTES: '/meeting-minutes',
  MEETING_MINUTES_RECORD: '/meeting-minutes/:recordId',
  MEETING_MINUTES_EDIT: '/meeting-minutes/:recordId/edit',
  MEETING_MINUTES_WRITE: '/meeting-minutes/write',
  RELOAD: 0,
} as const;
