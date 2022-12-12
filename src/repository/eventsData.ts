interface EventCardDataType {
    eventId: number
    eventName: string
    eventDescription: string
    eventImageUrl: string
}

const data: EventCardDataType[] = [
    {
        eventId: 1,
        eventName: 'Event 1',
        eventDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl ultricies nunc, nec ultricies nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl ultricies nunc, nec ultricies nunc nisl eget nunc.',
        eventImageUrl: 'https://picsum.photos/600/600'
    },
    {
        eventId: 2,
        eventName: 'Event 2',
        eventDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl ultricies nunc, nec ultricies nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl ultricies nunc, nec ultricies nunc nisl eget nunc.',
        eventImageUrl: 'https://picsum.photos/600/600'
    },
    {
        eventId: 3,
        eventName: 'Event 3',
        eventDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl ultricies nunc, nec ultricies nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl ultricies nunc, nec ultricies nunc nisl eget nunc.',
        eventImageUrl: 'https://picsum.photos/600/600'
    },
]

export default data