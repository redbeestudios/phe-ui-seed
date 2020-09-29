import Health from '../components/Health/Health';
import SeedCnt from '../pages/Seed';

export default [
  {
    path: "/seed",
    component: SeedCnt,
    exact: false,
  },
  {
    path: "/health",
    component: Health,
    exact: true,
  },
];
