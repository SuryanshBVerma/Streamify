import { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const data = [
    {
        "songName": "Blinding Lights",
        "artist": "The Weeknd",
        "dateStreamed": "2024-08-25",
        "streamCount": 150,
        "userId": "user_001"
    },
    {
        "songName": "Levitating",
        "artist": "Dua Lipa",
        "dateStreamed": "2024-08-24",
        "streamCount": 120,
        "userId": "user_002"
    },
    {
        "songName": "Peaches",
        "artist": "Justin Bieber",
        "dateStreamed": "2024-08-23",
        "streamCount": 90,
        "userId": "user_003"
    },
    {
        "songName": "Stay",
        "artist": "The Kid LAROI & Justin Bieber",
        "dateStreamed": "2024-08-22",
        "streamCount": 200,
        "userId": "user_004"
    },
    {
        "songName": "Good 4 U",
        "artist": "Olivia Rodrigo",
        "dateStreamed": "2024-08-21",
        "streamCount": 180,
        "userId": "user_005"
    },
]

const RecentStreams = () => {
    const [filterText, setFilterText] = useState('');
    const [sortOption, setSortOption] = useState('');

    const handleFilter = (e) => {
        setFilterText(e.target.value);
    };

    const handleSort = (value) => {
        setSortOption(value);
    };

    const getFilteredData = () => {
        let filtered = data.filter(item =>
            item.songName.toLowerCase().includes(filterText.toLowerCase()) ||
            item.artist.toLowerCase().includes(filterText.toLowerCase())
        );

        if (sortOption === 'date') {
            filtered = filtered.sort((a, b) => new Date(b.dateStreamed) - new Date(a.dateStreamed));
        } else if (sortOption === 'streamCount') {
            filtered = filtered.sort((a, b) => b.streamCount - a.streamCount);
        }

        return filtered;
    };

    return (
        <Card className="w-full p-6 shadow-lg">
            <CardContent>
                <div className="flex flex-col lg:flex-row lg:justify-between mb-6">
                    <Input
                        placeholder="Filter by song or artist"
                        value={filterText}
                        onChange={handleFilter}
                        className="w-full lg:w-1/3 mb-4 lg:mb-0"
                    />
                    <Select onValueChange={handleSort}>
                        <SelectTrigger className="w-full lg:w-1/4">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="date">Date</SelectItem>
                            <SelectItem value="streamCount">Stream Count</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <Table className="w-full border">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-left">Song Name</TableHead>
                            <TableHead className="text-left">Artist</TableHead>
                            <TableHead className="text-left">Date Streamed</TableHead>
                            <TableHead className="text-right">Stream Count</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {getFilteredData().map((item) => (
                            <TableRow key={item.userId}>
                                <TableCell className="font-medium">{item.songName}</TableCell>
                                <TableCell>{item.artist}</TableCell>
                                <TableCell>{item.dateStreamed}</TableCell>
                                <TableCell className="text-right">{item.streamCount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default RecentStreams;
