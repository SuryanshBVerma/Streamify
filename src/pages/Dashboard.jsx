
import { useSelector } from 'react-redux';
import Sidebar from '@/components/custom/SideBar';
import { ModeToggle } from '@/components/ui/themeToggleButton';
import { UserNav } from '@/components/custom/userIcon';
import DashboardMetrics from '@/components/custom/DashboardMetrics';


const Dashboard = () => {
  const { isExpanded, isMobile } = useSelector((state) => state.sidebar);
  const { name } = useSelector((state) => state.user);

  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

  return (
    <div className='relative min-h-screen'>
      <Sidebar />

      <main className={`transition-all duration-300 ${isMobile ? 'mt-16 ml-0' : (isExpanded ? 'ml-64' : 'ml-16')}`}>

        <nav className='p-6 flex justify-between border-b mb-4'>
          <div>

            {/* <h1 className="text-2xl font-bold text-gray-800 dark:text-white tracking-tight">Welcome,
              <span className='first-letter:capitalize'> {name} 👋 </span>
            </h1> */}
            <h2 className="text-2xl font-bold tracking-tight">
              Hi, Welcome {capitalize(name)}👋
            </h2>
          </div>

          <div className='flex gap-3 items-center'>
            <UserNav />
            <ModeToggle />
          </div>
        </nav>

        <div className='p-3'>
          <DashboardMetrics />
        </div>

      </main>


    </div>
  );
};

export default Dashboard;