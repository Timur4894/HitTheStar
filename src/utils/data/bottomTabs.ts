import FIRST_T_SCREEN from '../../screens/tabs/FIRST_T';
import SECOND_T from '../../screens/tabs/SECOND_T';
import THIRD_T from '../../screens/tabs/THIRD_T';
import ZFOURTH from '../../screens/tabs/ZFOURTH';
import {SCREENS} from '../constants';
import HomeSvg from '../../assets/svg/HomeSvg.tsx';
import NotestSvg from '../../assets/svg/NotestSvg.tsx';
import CreateSvg from '../../assets/svg/CreateSvg.tsx';
import CartSvg from '../../assets/svg/CartSvg.tsx';
// import S from '../../assets/'
// import SS from '../../assets/'
//   import SSS from '../../assets/'
//   import SSSS from '../../assets/'
// Import icons and  change to your icon and all will work fine
const bottomTabs = [
  {
    name: SCREENS.FIRST_T,
     component: FIRST_T_SCREEN,
    Icon: HomeSvg
  },
  {
    name:
    SCREENS.SECOND_T,
     component: SECOND_T,
    Icon: NotestSvg
  },
  {
    name: SCREENS.THIRD_T,
    component: THIRD_T,
    Icon:CreateSvg
  },
  {
    name: SCREENS.ZFOURTH_T,
    component: ZFOURTH,
    Icon: CartSvg
  },
];

export default bottomTabs;
