// assets
import { IconDashboard,  IconUsers, IconBuildingCommunity, IconFileCertificate, IconFileSettings} from '@tabler/icons-react';

// constant
const icons = { IconDashboard, IconUsers, IconBuildingCommunity, IconFileCertificate,IconFileSettings };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Sidebar',
  type: 'group',
  children: [
        {
          id: 'default',
          title: 'Dashboard',
          type: 'item',
          url: '/dashboard/default',
          icon: icons.IconDashboard,
          breadcrumbs: false
        },
        {
          id: 'users',
          title: 'Users',
          type: 'item',
          url: '/utils/util-users',
          icon: icons.IconUsers,
          breadcrumbs: false
        },
        {
          id: 'clients',
          title: 'Clients',
          type: 'item',
          url: '/utils/util-clients',
          icon: icons.IconBuildingCommunity,
          breadcrumbs: false
        },
        {
          id: 'util-shadow',
          title: 'Job Profiles',
          type: 'item',
          url: '/utils/util-profiles',
          icon: icons.IconFileCertificate,
          breadcrumbs: false
        },
        {
          id: 'util-admin',
          title: 'Administration',
          type: 'item',
          url: '/utils/util-shadow',
          icon: icons.IconFileSettings,
          breadcrumbs: false
        }
  ]
};

export default dashboard;
