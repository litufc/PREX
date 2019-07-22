import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Login from './Pages/Login';
import Menu from './Pages/Menu';
import Schedules from './Pages/Schedules';
import Options from './Pages/Options';
import SchedulesStatus from './Pages/ScheduleStatus';
import RecoverPassword from './Pages/RecoverPassword';
import Quiz from './Pages/Quiz/Quiz';
import QuizHistoric from './Pages/Quiz/QuizHistoric';
import QuizHistoricQuestions from './Pages/Quiz/QuizHistoricQuestions';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        RecoverPassword,
        Menu,
        Schedules,
        Options,
        SchedulesStatus,
        Quiz,
        QuizHistoric,
        QuizHistoricQuestions,
    })
);

export default Routes;