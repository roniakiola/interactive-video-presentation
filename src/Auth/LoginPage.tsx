import React, { useState } from 'react';
import { onLogin } from './auth.api';
import { CorrectPassword, CorrectUsername, CorrectAdminUsername,CorrectAdminPassword } from './auth.api';


const LoginPage=()=>{

    const [{username , password}, setCredentials]=useState({
        username:'',
        password:''
    })



    const login =async (event: React.FormEvent)=>{ 
        event.preventDefault();
        console.log('jos näkee niin submit nappi toimii') //ilmoittaa käytännössä vaan että submit nappi toimii
        const response = await onLogin({ //tää on jotenkin tärkeä että ei toimi jos poistaa
            username, 
            password,
        })
        
        
    if(username==CorrectUsername && password==CorrectPassword){ //varmistaa että jos käyttäjä antaa username "kek" ja salasanaksi "lol" niin ohjaa sen hienoon admin näkymään johon ei totaalisesti pääse mitenkään muuten käsiksi
        console.log("hieno")
        window.location.replace("/Viewer"); //tätä et löydä navbarista
        var loggedinasuser=true
    }

    if(username==CorrectAdminUsername && password==CorrectAdminPassword){ //varmistaa että jos käyttäjä antaa username "kek" ja salasanaksi "lol" niin ohjaa sen hienoon admin näkymään johon ei totaalisesti pääse mitenkään muuten käsiksi
        console.log("hienoa, Olet admin")
        window.location.replace("/upload"); //tätä et löydä navbarista
        var loggedinasadmin=true
    }
    else(
        alert("Wrong username or password")
    )

    
}
    return(
        <form onSubmit={login} id="loginform">
            <label id ="UsernameForm" htmlFor='username'>Username</label>
            <input placeholder="Username" value={username} onChange={(event)=>setCredentials({ //tää kysyy käyttäjänimeä
                username: event.target.value,
                password
            })} />
            <label id ="PasswordForm" htmlFor='password'>Password</label>
            <input placeholder='Password' type="password" value={password} onChange={(event)=>setCredentials({ //tää kysyy salasanan tiedon
                username,
                password: event.target.value
               })}   />

            <button type="submit">Login</button>  
            {/* mitä luulet että tekee? */}
        </form>
        
        )
      
}

export default LoginPage;