import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Login from './Pages/Login';
import Menu from './Pages/Menu';
import Schedules from './Pages/Calendar/Schedules';
import Options from './Pages/Options';
import SchedulesStatus from './Pages/Calendar/ScheduleStatus';
import RecoverPassword from './Pages/RecoverPassword';
import AddSchedules from './Pages/Calendar/AddSchedules';
import Questionnaires from './Pages/Questionnaires';
import Questionnaire from './Pages/Questionnaire';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        RecoverPassword,
        Menu,
        Schedules,
        Options,
        SchedulesStatus,
        AddSchedules,
        Questionnaires,
        Questionnaire
    })
);

export default Routes;