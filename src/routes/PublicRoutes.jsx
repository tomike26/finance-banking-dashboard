import Dashboard from "../scenes/Dashboard/dashboard";
import Invoices from "../scenes/invoices/Invoices";
import Messages from "../scenes/messages/messages";
import Wallets from "../scenes/wallets/wallets";
import Analytics from "../scenes/analytics/Analytics";
import Activity from "../scenes/activity/Activity";
import Settings from "../scenes/settings";
import Help from "../scenes/Help/help";
import { sidebarRouteLinks } from "./sidebarRoutesLinks";


export const PublicRoute = [
    {
        component: <Dashboard />,
        path: sidebarRouteLinks.dashboard,
        exact: true,
    },
    {
        component: <Invoices />,
        path: sidebarRouteLinks.invoices,
    },
    {
        component: <Messages />,
        path: sidebarRouteLinks.messages,
    },
    {
        component: <Wallets />,
        path: sidebarRouteLinks.wallets,
    },
    {
        component: <Analytics />,
        path: sidebarRouteLinks.analytics,
    },
    {
        component: <Activity />,
        path: sidebarRouteLinks.activity,
    },
    {
        component: <Settings />,
        path: sidebarRouteLinks.settings,
    },
    {
        component: <Help />,
        path: sidebarRouteLinks.help,
    },
];