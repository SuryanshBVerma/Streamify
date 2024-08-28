
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, LayoutDashboard, User, Users, UserCircle, Trello, LogIn, Menu } from 'lucide-react';
import Logo from '@/components/svg/logo';
import { toggleSidebar, setMobile } from '@/store/sidebarSclice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { isExpanded, isMobile } = useSelector((state) => state.sidebar);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      dispatch(setMobile(mobile));
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [dispatch]);

  const handleToggleSidebar = () => dispatch(toggleSidebar());

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: User, label: 'User' },
    { icon: Users, label: 'Employee' },
    { icon: UserCircle, label: 'Profile' },
    { icon: Trello, label: 'Kanban' },
    { icon: LogIn, label: 'Login' },
  ];

  return (
    <>
      {/* Mobile Navbar */}
      {isMobile && (
        <nav className="fixed top-0 left-0 right-0 bg-background dark:bg-background z-40 h-16 flex items-center px-4 border-b dark:border-gray-800">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleToggleSidebar} 
            className="text-gray-700 dark:text-white"
          >
            <Menu />
          </Button>
          <div className='flex gap-2 justify-center items-center text-xl font-semibold text-gray-700 dark:text-white ml-4'>
            <Logo className="h-6 w-6"/> Streamify
          </div>
        </nav>
      )}

      {/* Overlay */}
      {isMobile && (
        <div 
          className={`fixed inset-0 bg-gray-800/50 dark:bg-black/50 backdrop-blur-sm transition-opacity z-30 
            ${isExpanded ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={handleToggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 h-full border-r bg-gray-100 dark:bg-background text-gray-700 dark:text-white transition-all duration-400 ease-in-out z-40 
          ${isExpanded ? 'w-64' : (isMobile ? 'w-0' : 'w-16')}
          ${isMobile ? (isExpanded ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full overflow-hidden">
          {!isMobile && (
            <div className="p-4 flex justify-between items-center">
              {isExpanded && <div className='flex gap-2 justify-center items-center text-xl font-semibold'><Logo className="h-6 w-6"/> Streamify</div>}
              <Button variant="ghost" size="icon" onClick={handleToggleSidebar} className="text-gray-700 dark:text-white">
                {isExpanded ? <ChevronLeft /> : <ChevronRight />}
              </Button>
            </div>
          )}

          <nav className="flex-1">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index} className={`${isExpanded ? 'm-2' : ''}`}>
                  <Button 
                    variant="ghost" 
                    className={`w-full justify-start text-gray-700 dark:text-white hover:text-green dark:hover:text-green hover:bg-gray-200 dark:hover:bg-gray-800 
                      ${!isExpanded && !isMobile && 'justify-center'}`}
                  >
                    <item.icon className="h-5 w-5 mr-2" />
                    {isExpanded && <span>{item.label}</span>}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;