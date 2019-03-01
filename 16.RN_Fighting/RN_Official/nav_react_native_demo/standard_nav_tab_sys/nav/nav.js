import {createStackNavigator, createAppContainer} from 'react-navigation';
import {TabNav} from "./../tab/tab";
import DealPage from './../page/DealPage'
import MinePage from './../page/MinePage'

const App = createStackNavigator(
    {
        Main: {
            screen: TabNav,
            navigationOptions: ({navigation}) => ({})
        },
        Deal: {
            screen: DealPage
        },
        Mine: {
            screen: MinePage
        }
    },
    {
        initialRouteName: 'Main',
        headerMode: ''
    }
);

export default createAppContainer(App);