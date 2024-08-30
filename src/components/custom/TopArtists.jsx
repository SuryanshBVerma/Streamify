import { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader } from 'lucide-react';

// Simulated fetch function (replace with actual fetch in real application)
const fetchTopArtists = async () => {
    // Simulating API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    return [
        { id: 1, name: "Taylor Swift", image: "/avatars/01.png", streams: 5000000, genre: "Pop" },
        { id: 2, name: "Drake", image: "/avatars/02.png", streams: 4500000, genre: "Hip Hop" },
        { id: 3, name: "Ariana Grande", image: "/avatars/03.png", streams: 4000000, genre: "Pop" },
        { id: 4, name: "Ed Sheeran", image: "/avatars/04.png", streams: 3500000, genre: "Pop" },
        { id: 5, name: "Billie Eilish", image: "/avatars/05.png", streams: 3000000, genre: "Alternative" },
    ];
};

export function TopArtists() {
    const [artists, setArtists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterText, setFilterText] = useState('');
    const [sortOption, setSortOption] = useState('');

    useEffect(() => {
        fetchTopArtists()
            .then(data => {
                setArtists(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching top artists:", error);
                setLoading(false);
            });
    }, []);

    const handleFilterChange = (e) => {
        setFilterText(e.target.value);
    };

    const handleSortChange = (value) => {
        setSortOption(value);
    };

    const getFilteredAndSortedArtists = () => {
        let filteredArtists = artists.filter(artist =>
            artist.name.toLowerCase().includes(filterText.toLowerCase()) ||
            artist.genre.toLowerCase().includes(filterText.toLowerCase())
        );

        if (sortOption === 'streams') {
            filteredArtists = filteredArtists.sort((a, b) => b.streams - a.streams);
        } else if (sortOption === 'name') {
            filteredArtists = filteredArtists.sort((a, b) => a.name.localeCompare(b.name));
        }

        return filteredArtists;
    };

    if (loading) {
        return <div className="flex justify-center items-center h-full"><Loader className='animate-spin'/></div>;
    }

    return (
        <div className="space-y-4">
            <div className="flex flex-col lg:flex-row justify-between mb-4">
                <Input
                    placeholder="Filter by artist or genre"
                    value={filterText}
                    onChange={handleFilterChange}
                    className="w-full lg:w-1/3 mb-4 lg:mb-0"
                />
                <Select onValueChange={handleSortChange}>
                    <SelectTrigger className="w-full lg:w-1/4">
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="name">Name</SelectItem>
                        <SelectItem value="streams">Streams</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-3">
                {getFilteredAndSortedArtists().map(artist => (
                    <div key={artist.id} className="flex items-center hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg p-2">
                        <div className="relative h-10 w-10 rounded-full flex items-center justify-center cursor-pointer border m-1 bg-gray-300 dark:bg-slate-700">
                            <p className='capitalize'> {artist.name[0]} </p>
                        </div>
                        <div className="ml-4 space-y-1">
                            <p className="text-sm font-medium leading-none">{artist.name}</p>
                            <p className="text-sm text-muted-foreground">{artist.genre}</p>
                        </div>
                        <div className="ml-auto text-sm text-muted-foreground m-2">{artist.streams.toLocaleString()} streams</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
