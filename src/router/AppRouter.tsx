import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '~/App';
import PageTemplate from '~/components/common/PageTemplate/PageTemplate';
import ProtectProjectRoute from '~/components/common/ProtectProjectRoute/ProtectProjectRoute';
import ProtectRoute from '~/components/common/ProtectRoute/ProtectRoute';
import { ROUTES } from '~/constants/routes';
import CreatePage from '~/pages/CreatePage/CreatePage';
import DashBoardPage from '~/pages/DashBoardPage/DashBoardPage';
import JoinPage from '~/pages/JoinPage/JoinPage';
import LandingPage from '~/pages/LandingPage/LandingPage';
import LoginPage from '~/pages/LoginPage/LoginPage';
import MeetingMinutesPage from '~/pages/MeetingMinutesPage/MeetingMinutesPage';
import MeetingMinutesRecordPage from '~/pages/MeetingMinutesRecordPage/MeetingMinutesRecordPage';
import MeetingMinutesWritePage from '~/pages/MeetingMinutesWritePage/MeetingMinutesWritePage';
import NotFoundPage from '~/pages/NotFoundPage/NotFoundPage';
import ProjectHolder from '~/pages/ProjectHolder/ProjectHolder';
import StartPage from '~/pages/StartPage/StartPage';

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: ROUTES.ROOT,
      element: <App />,
      errorElement: <NotFoundPage />,
      children: [
        { path: '', element: <LandingPage /> },
        { path: ROUTES.LOGIN, element: <LoginPage /> },
        {
          element: <ProtectRoute />,
          children: [
            {
              element: <ProtectProjectRoute />,
              children: [
                { path: ROUTES.START, element: <StartPage /> },
                { path: ROUTES.CREATE, element: <CreatePage /> },
                { path: ROUTES.JOIN, element: <JoinPage /> },
              ],
            },
            {
              element: <PageTemplate />,
              children: [
                { path: ROUTES.PROJECT_HOLDER, element: <ProjectHolder /> },
                { path: ROUTES.DASH_BOARD, element: <MeetingMinutesPage /> },
                {
                  path: ROUTES.MEETING_MINUTES,
                  element: <MeetingMinutesPage />,
                },
                {
                  path: ROUTES.MEETING_MINUTES_WRITE,
                  element: <MeetingMinutesWritePage />,
                },
                {
                  path: ROUTES.MEETING_MINUTES_RECORD,
                  element: <MeetingMinutesRecordPage />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
