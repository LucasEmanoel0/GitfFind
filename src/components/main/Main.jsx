import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Imagem from "../imagem/Imagem";
import Profile from "../profile/Profile";
import Card from "../repositorios/Card";

import './Main.css'
export default function Main(){
    const [user,setUser] = useState("")
    const [currentuser,setCurrentUser] = useState("")
    const [repos,setRepos] = useState([])

   async function handleGetData(){
    const userData =    await fetch(`https://api.github.com/users/${user}`)
    const newUser = await userData.json()
    setCurrentUser(newUser);
    const userRepo = await fetch(`https://api.github.com/users/${user}/repos`)
    const repoNew = await userRepo.json()
    setRepos(repoNew)
   }

    return(
        <main className="Container">
            <Imagem></Imagem>
            <section>
               <div className="inputContainer">
                   <Input user = {user} setUser ={setUser}></Input>
                   <Button handleGetData = {handleGetData}></Button>
              </div>
                   <Profile url={currentuser.avatar_url} name={currentuser.name}  subtitle = {currentuser.login} bios = {currentuser.bio}></Profile>

                   <div className="CardContainer">
                    <h1>repositorios</h1>
                    {repos.map((repo)=>{
                        return(
                            <Card key={repo.id} name={repo.name} description= {repo.description ? repo.description : "sem descricao"}></Card>
                        )
                    })}
                   </div>




            </section>
            
        </main>
    )
}