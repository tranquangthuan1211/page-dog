import React from "react";
import DogCard from "./DogCard";
import './Dog.scss'
const Dog = (props) => {
    const { allDogs } = props;
    return (
        <>
            <section className="dog-container">
                {allDogs.map((dog) => {
                    return (
                        <div key={dog.id}>
                            <DogCard
                                id={dog.id}
                                name={dog.name}
                                breed={dog.breed}
                                description={dog.description}
                                price={dog.price}
                                imageUrl={dog.imageUrl}
                            />
                        </div>
                    )
                })}
            </section>
        </>
    )
}
export default Dog;
//     <div key={dog.id} className="dog-card">
                    //         <DogCard
                    //             id={dog.id}
                    //             name={dog.name}
                    //             breed={dog.breed}
                    //             description={dog.description}
                    //             price={dog.price}
                    //             imageUrl={dog.imageUrl}
                    //         />
                    //     </div>