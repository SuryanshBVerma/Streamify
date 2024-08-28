import { useEffect, useState } from 'react';

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

    if (loading) {
        return <div className="flex justify-center items-center h-full">Loading top artists...</div>;
    }

    return (
        <div className="space-y-3 ">
            {artists.map(artist => (
                <div key={artist.id} className="flex items-center hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg  p-2">
                    <div className="relative h-10 w-10 rounded-full flex items-center justify-center cursor-pointer border m-1 bg-gray-300 dark:bg-slate-700">
                        <p className='capitalize'> {artist.name[0]} </p>
                    </div>
                    <div className="ml-4 space-y-1 ">
                        <p className="text-sm font-medium leading-none">{artist.name}</p>
                        <p className="text-sm text-muted-foreground">{artist.genre}</p>
                    </div>
                    <div className="ml-auto text-sm text-muted-foreground m-2">{artist.streams.toLocaleString()} streams</div>
                </div>
            ))}
        </div>
    );
}