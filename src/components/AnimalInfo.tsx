import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import '../App.css';
import GithubLogo from '../assets/GithubLogo.svg'; 
import logoText from '../assets/logoText.svg'; 

export function AnimalInfo() {
  let id = useParams();

 let key2:any;

 Object.keys(id).forEach(function(key) {
  key2=id[key]
});
  
const [animalsFromLS, SetAnimalsFromLS] = useState<any>();
  const [disable, setDisable] = React.useState(false);

  useEffect(() => {
    const animalsFromLS = JSON.parse(localStorage.getItem("My_animals")|| '{}');
          if (animalsFromLS) 
              {SetAnimalsFromLS(animalsFromLS);
          }}, []);

   

  const checkFeedAnimals = () =>{

    const feedAnimalsFromLS = JSON.parse(localStorage.getItem('My_animals')|| '{}')
    
    if(feedAnimalsFromLS){
      
      for (let i = 0; i < feedAnimalsFromLS.length; i++) {
        
        if(feedAnimalsFromLS[i].id===animalID ){
          
          let timeSinceEaten = new Date().getTime() - new Date(feedAnimalsFromLS[i].lastFed).getTime();
          let hoursSinceEaten = Math.floor(timeSinceEaten / (1000 * 60 * 60));

          if (hoursSinceEaten <= 4) {
            setDisable(true)
          } else if (hoursSinceEaten >= 3) {
            setDisable(false)
          }   
        }
      }
    }
  }


  
  useEffect(()=>{
    checkFeedAnimals() });
    



 function feedAnimal(animalId:number){
   for(var i in animalsFromLS){
     if(animalsFromLS[i].id===animalId){

          animalsFromLS[i].lastFed=new Date
          animalsFromLS[i].isFed=true

      localStorage.setItem('My_animals',JSON.stringify(animalsFromLS))
    }}}


    let lastFEDTEXT:string='';
      const lastFeed =((animalLastFed:any)=>{
      lastFEDTEXT=animalLastFed
    })
    let animalID:number=0;
  
    let resultText;
    let animialName:string="";

    let stateOfAnimal:string=''
  {  for(var i in animalsFromLS){

    if(animalsFromLS[i].id==key2){
      let timeSinceEaten = new Date().getTime() - new Date(animalsFromLS[i].lastFed).getTime();

      let hour:number=new Date(animalsFromLS[i].lastFed).getHours()
      let minut:number=new Date(animalsFromLS[i].lastFed).getMinutes();
      let seconds:number=new Date(animalsFromLS[i].lastFed).getSeconds();

      let time= (hour+3)+":"+minut+":"+seconds;

      let hoursSinceEaten = Math.floor(timeSinceEaten / (1000 * 60 * 60));
      
   
      if (hoursSinceEaten <= 4) {
         stateOfAnimal='mätt! Kom tillbaka om några timmar! Du kan tidigast mata djuret '+" "+ "kl "+ time;
      } else if (hoursSinceEaten >= 3) {
        stateOfAnimal='hungrig! Dags för mat!'
      }   
      lastFeed(animalsFromLS[i].lastFed.toString())
        animalID=animalsFromLS[i].id
        animialName=animalsFromLS[i].name
      resultText = (  <div className='resultContainer'>

            <div className='headningInfoContainer'>
              <h1 className='headningText'>{animalsFromLS[i].name} <i>{animalsFromLS[i].latinName}</i> född år {animalsFromLS[i].yearOfBirth}</h1>
            </div>

    <div className='imgAnimalInfoContainer'>
        <div className='imgContainerRight'>
          <img src={animalsFromLS[i].imageUrl} className='imgContainerForInfo' alt={animalsFromLS[i].name} /> 
              <div className='btnContainer'>
                <div className='feedBtnContainer'><button disabled={disable} onClick={()=>(feedAnimal(animalID),setDisable(true))} className='btn'>Mata djuret ( {animalsFromLS[i].name} )</button></div>
                <div className='homeBtnContainer'><Link to={`/`}><button className='btn' >Hem!</button></Link></div>
              </div> 
        </div>
      </div>
        <div className='animalInfoTextContainer'>
          <p>{animalsFromLS[i].longDescription}</p>
        </div>
    </div>)
    }
} }





  return (
    <>
    <div className='Info-container'>

        <div className='linkContainer'>
            <a href="https://github.com/wahlstrommm"><img src={GithubLogo} alt="Github" className='githubLogo'/></a>
        </div>

        <div className='logoInfoContainer'>
          <img src={logoText} alt="logotext" className='textLogo'/>
        </div>

      <div className='animalInfoContainer'>
        <div className='resultContainer'>
          {resultText}
          <div className='foodContainer'>
            <div className='textFood'>
              <h3>Senast matad: {lastFEDTEXT}</h3>
              <h3>{animialName} är {stateOfAnimal}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AnimalInfo