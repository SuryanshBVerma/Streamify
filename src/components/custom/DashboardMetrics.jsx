
import { CalendarDateRangePicker } from '@/components/ui/date-range-picker';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarGraph } from '../ui/charts/BarGraph';
import { AreaGraph } from '../ui/charts/AreaGraph';
import { PieGraph } from '../ui/charts/PieGraph';

import { Activity, CreditCard, DollarSign, Users } from 'lucide-react';
import { TopArtists } from './TopArtists.jsx';
import RecentStreams from './RecentStreams';

export default function Page() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch('/path-to-your-json/data.json')
  //     .then((response) => response.json())
  //     .then((jsonData) => setData(jsonData))
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []);

  // if (!data) {
  //   return <div>Loading...</div>; // Show a loading state while fetching
  // }

  const data = {
    "revenue": {
      "amount": "$45,231.89",
      "change": "+20.1% from last month"
    },
    "totalUsers": {
      "count": "+2350",
      "change": "+180.1% from last month"
    },
    "totalStreams": {
      "count": "+12,234",
      "change": "+19% from last month"
    },
    "activeNow": {
      "count": "+5735",
      "change": "+201 since last 30 days"
    }
  }


  return (
    <div className="space-y-2">
      <div className="flex items-center justify-end space-y-2">
        <div className="hidden items-center space-x-2 md:flex">
          <CalendarDateRangePicker />
          <Button>Download</Button>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics" disabled>
            Analytics
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Revenue
                </CardTitle>
                <DollarSign className='h-4 w-4 text-muted-foreground' />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data.revenue.amount}</div>
                <p className="text-xs text-muted-foreground">
                  {data.revenue.change}
                </p>
              </CardContent>
            </Card>
            <Card>

              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Users
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data.totalUsers.count}</div>
                <p className="text-xs text-muted-foreground">
                  {data.totalUsers.change}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Streams</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data.totalStreams.count}</div>
                <p className="text-xs text-muted-foreground">
                  {data.totalStreams.change}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Now
                </CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data.activeNow.count}</div>
                <p className="text-xs text-muted-foreground">
                  {data.activeNow.change}
                </p>
              </CardContent>
            </Card>
          </div>


          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
          
            <div className="col-span-4">
              <BarGraph />
            </div>

            <Card className="col-span-4 md:col-span-3">
              <CardHeader>
                <CardTitle>Top Artists</CardTitle>
              </CardHeader>
              <CardContent>
                <TopArtists/>
              </CardContent>
            </Card>

            <div className="col-span-4 h-full flex flex-col gap-3">
              <AreaGraph />
              <RecentStreams/>
            </div>

            <div className="col-span-4 md:col-span-3">
              <PieGraph />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

