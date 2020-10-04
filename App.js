import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from "./screens/SearchScreen";
import ResultShowScreen from './screens/ResultShowScreen';


const navigator = createStackNavigator({
    Search: SearchScreen,
    ResultShow: ResultShowScreen
  }, {
    inititalRoute: "Screen",
    defaultNavigationOption: {
      title: "Search"
    }
  }
);

export default createAppContainer(navigator);
