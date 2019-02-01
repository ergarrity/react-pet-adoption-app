import React from 'react';
import pf from 'petfinder-client';
import { navigate } from '@reach/router';

const petfinder = pf({
    key: process.env.API_KEY,
    secret: process.env.API_SECRET
});

class Details extends React.Component{
    state = {
        loading: true
    };

    componentDidMount () {
        console.log(this.props.id, typeof(this.props.id))
        petfinder.pet
        .getRandom({
            output: "full"
        })
        .then(data => {
            let breed;
            if (Array.isArray(data.petfinder.pet.breeds.breed)) {
              breed = data.petfinder.pet.breeds.breed.join(", ");
            } else {
              breed = data.petfinder.pet.breeds.breed;
            }
            this.setState({
              name: data.petfinder.pet.name,
              animal: data.petfinder.pet.animal,
              location: `${data.petfinder.pet.contact.city}, ${
                data.petfinder.pet.contact.state
              }`,
              description: data.petfinder.pet.description,
              media: data.petfinder.pet.media,
              breed: breed,
              loading: false
            });
          })
          .catch(err => {
            console.log(err);
          });
    }
    
    render() {
        if (this.state.loading) {
            return <h1>loading...</h1>;
        }

        const { name, animal, breed, location, description, media } = this.state;

        return (
            <div className="details">
                <Carousel media={media} />
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${location}`}</h2>
                    <p>{description}</p>
                </div>
            </div>
        );
    }
}

export default Details;