import {useEffect, useState} from 'react';
import useTypedNavigation from '../hooks/useTypedNavigation';
import {ImageBackground} from 'react-native';
import {SCREENS} from '../utils/constants';

const Loader = () => {
  const navigation = useTypedNavigation();
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsFirst(false);
      setTimeout(() => {
        navigation.navigate(SCREENS.Start);
      }, 2000);
    }, 2000);
  }, []);

  return (
    <ImageBackground
      source={
        // isFirst
        //   ? require('../assets/loader.png')
        //   : require('../assets/loader1.png')
        {uri:""}
      }
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
    />
  );
};
export default Loader;
