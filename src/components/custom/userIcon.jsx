import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import { useSelector } from 'react-redux';





export function UserNav() {
    const [session, setSession] = useState(null);
    const navigate = useNavigate();

    const {name, email} = useSelector((state) => state.user)

    useEffect(() => {
        // Simulating session retrieval, replace with your own logic for Vite + React
        const mockSession = {
            user: {
                name: name,
                email: email,
                image: null
            }
        };
        setSession(mockSession);
    }, []);

    if (session) {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild className='border bg-gray-100 dark:bg-slate-900'>
                    <div className="relative h-10 w-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-green">
                        <p className='capitalize'> {name[0]} </p>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium leading-none">
                                {session.user?.name}
                            </p>
                            <p className="text-xs leading-none text-muted-foreground">
                                {session.user?.email}
                            </p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Billing
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem>New Team</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigate('/')}>
                        Log out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }
    return null;
}


