import { useState } from 'react'
import AnimalCards from './AnimalsCard'

const Animal = () => {
   

    const animalsData = [
                    {
                        id: 1,
                        header: 'Whats the best thing about a Boolean?',
                        punchline: 'Even if you are wrong, you are only off by a bit',
                        status: true,
                        date: "2022-12-08"
                        
                    },
                    {
                        id: 2,
                        header: 'Why do programmers wear glasses?',
                        punchline: 'Because they need to C#',
                        date: "2022-12-08"
                    },
                    {
                        id: 2,
                        header: 'Why do programmers wear glasses?',
                        punchline: 'Because they need to C#',
                        date: "2022-12-08"
                    },
                    {
                        id: 2,
                        header: 'Why do programmers wear glasses?',
                        punchline: 'Because they need to C#',
                        date: "2022-12-08"
                    },
                    {
                        id: 2,
                        header: 'Why do programmers wear glasses?',
                        punchline: 'Because they need to C#',
                        date: "2022-12-08"
                    }
    ]

    let [animals, setAnimals] = useState(animalsData)
    
    return (
        <div className='w-full flex flex-col md:flex-row'>
            {
                animals.map((animal, i) => (

                    <div className='w-full md:w-full'> <AnimalCards key={animal.id} animal={animal} /></div>
                )
                )     
            }
        </div> 
                
    )
}

export default Animal;