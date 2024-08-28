
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";


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
    return (
        <Table className="border w-full h-full">
            <TableHeader className="bg-muted">
                <TableRow>
                    <TableHead className="text-center">Recent Streams</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((item) => (
                    <TableRow key={item.userId}>
                        <TableCell>
                            <div className="">
                                <h1 className=""> {item.songName} </h1>
                                <p className="text-muted-foreground text-sm"> {item.artist}</p>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    )
}

export default RecentStreams