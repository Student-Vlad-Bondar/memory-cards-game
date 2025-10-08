export const sampleResults = [
{ id: 1, player: 'Гравець 1', moves: 10, time: '00:01:24' },
{ id: 2, player: 'Гравець 2', moves: 12, time: '00:01:45' },
]


export const placeholderCards = Array.from({ length: 8 }).map((_, i) => ({
id: i + 1,
label: `Картка ${i + 1}`,
}))