import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Menu from './Pages/Menu';
import Schedules from './Pages/Schedules';
import Options from './Pages/Options';
import SchedulesStatus from './Pages/ScheduleStatus';

const Routes = createAppContainer(
    createSwitchNavigator({
        Menu,
        Schedules,
        Options,
        SchedulesStatus,
    })
);

export default Routes;