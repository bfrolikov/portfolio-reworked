const cards = [
    [
        {
            id:1,
            src: require('../images/html.jpg'),
            techName: 'HTML 5',
            experience: '1 год'
        },
        {
            id:2,
            src: require('../images/css.jpg'),
            techName: 'CSS 3',
            experience: '1 год'
        },
        {
            id:3,
            src: require('../images/react.jpg'),
            techName: 'React',
            experience: '1 год'
        },
        {
            id:4,
            src: require('../images/semantic.png'),
            techName: 'Semantic UI React',
            experience: '1 год'
        }
    ],
    [
        {
            id:5,
            src: require('../images/cpp.jpg'),
            techName: 'C++',
            experience: '6 лет'
        },
        {
            id:6,
            src: require('../images/node.jpg'),
            techName: 'Node JS',
            experience: '1 год'
        },
        {
            id:7,
            src: require('../images/mongo.jpg'),
            techName: 'MongoDB',
            experience: '< 1 года'
        },
        {
            id:8,
            src: require('../images/firebase.jpg'),
            techName: 'Google Firebase',
            experience: '2 года'
        }
    ]

];

for(let i=0;i<cards.length;i++)
{
    cards[i].id = i; //thanks JavaScript
}
export default cards;