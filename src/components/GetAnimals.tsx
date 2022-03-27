import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IAnimals } from '../models/IAnimals'
import { Animal } from '../models/Animal'
import '../App.css';
import { Link} from 'react-router-dom';

function GetAnimals() {
    const [animalAPI,SetAnimalAPI]= useState<IAnimals[]>([]);
    
  
    const getAnimalsFromAPI = () =>{      
      axios.get<IAnimals[]>('https://animals.azurewebsites.net/api/animals').then((response)=>{
        let animalListFromAPI = response.data.map((animals:IAnimals)=>{
          return new Animal(animals.id,animals.name,animals.latinName,animals.yearOfBirth,animals.shortDescription,animals.longDescription,
            animals.imageUrl,animals.medicine,animals.isFed,animals.lastFed) 
          },[])
          SetAnimalAPI(animalListFromAPI)
          saveLocalStorage(animalListFromAPI)
        });
    }

    
    useEffect(()=>{getFromLocalStorage()
    },[]
    );
    
    
    
    const getFromLocalStorage = ()=>{
      let feedAnimalsFromLS = localStorage.getItem('My_animals')
        if(!feedAnimalsFromLS){
          getAnimalsFromAPI()
        }else{

          const petData = JSON.parse(feedAnimalsFromLS)

          SetAnimalAPI(petData)
        }
        };

        const saveLocalStorage=((dataFromAPI:IAnimals[])=>{
          if(dataFromAPI.length>0){

            localStorage.setItem("My_animals", JSON.stringify(dataFromAPI))
          }
        })



    


  return (
    <div className='container'>
      <div className='notFeedText'>
        <div className='notFeedContainer'>
        <h4 className='notFeedHeading'>Djur som <b>kvar</b>  att mata är:</h4><br />

        {animalAPI.map((animalAPI,i)=>{
          if(animalAPI.isFed==false){
            return(<div key={i}>
                    <h5>{animalAPI.name},</h5>
                  </div>
          )}
        })
      }
      <h4 className='notFeedHeading' >Djuren som är <b>matade</b>  är:</h4>

            {animalAPI.map((animalAPI,i)=>{
          if(animalAPI.isFed==true){
            return(<div key={i}>
                    <h5 className='feedText'>{animalAPI.name},</h5>
                  </div>
              )}
            })
          }
      </div>
      </div>
          {animalAPI.map((animalAPI,i)=>{
        return( <div className='animalContainer' key={i}>
                  <p>
                    <img src={animalAPI.imageUrl} className="imgContainer" alt={animalAPI.name} />  
                      <br /> Namn: {animalAPI.name} <i>{animalAPI.latinName}</i> 
                      <br /> <br /> Född: {animalAPI.yearOfBirth} <br /> 
                      Beskrvning: {animalAPI.shortDescription}  <br />
                      <Link to={`/animalinfo/${animalAPI.id}`}><button className='btn' >Klicka för att mata och lära känna {animalAPI.name} !</button></Link>
                  </p> 
                </div>
      )})}
    </div>
  )
}

export default GetAnimals