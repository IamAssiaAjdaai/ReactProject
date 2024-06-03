import './Profil.css'

function getImageUrl(person, size = 's') {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        size +
        '.jpg'
    );
}

export const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
}, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
}, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
}, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
}, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
}];

export default function List(){
    const physicist = people.filter(person => 
        person.profession === 'mathematician'
    );
    const listItem = physicist.map(person =>
        <li>
            <img
            src={getImageUrl(person)}
            alt={person.name}
            />
            <p>
                <b>{person.name}</b>
                {' '+person.profession+' '}
                known for {person.accomplishment}
            </p>
        </li>
    )
    return <ul>{listItem}</ul>
}

/* export default function Profile(){
    return(
        <Card>
            <Avatar
                size={100}
                person={{
                    name:'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            >
            </Avatar>
        </Card>
    );
}

function Avatar({ person, size }){
    return(
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

function Card({ children}){
    return(
        <div className="card">
            {children}
        </div>
    )
} */