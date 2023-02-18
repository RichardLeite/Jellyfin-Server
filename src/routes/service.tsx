import React, { useContext, useEffect, useState } from "react";
import { ServiceProps } from "../types/service";
import { Link, useLoaderData } from "react-router-dom";
import classes from "./service.module.css"
import Navbar from "../components/Navbar";

const Service = () => {

    const [service, setService] = useState<ServiceProps | null>(null);

    useEffect(() => {
    
      const loadData = async () => {
        const apiURL = import.meta.env.VITE_API || process.env.VITE_API;
        console.log(apiURL);
            const res = await fetch(apiURL as string);
            const data = await res.json();
            console.log(data);
  
            const { Jellyfin, JellySeerr, invite } = data
            const serviceData: ServiceProps = {
                Jellyfin,
                JellySeerr,
                invite,
            }
  
            setService(serviceData)
          };
  
          loadData();
          
          
        },[]);

    return (
        <div>
            <Navbar/>
            <h1>Richão Services</h1>
            <div className={classes.service}>
                <h3>Selecione um serviço abaixo:</h3>
                {service && 
                <ul className={classes.services}>
                <li>
                    <Link to={service.Jellyfin} target= "_blank">
                    <img src="https://www.openhab.org/logos/jellyfin.png" alt="Clique para acessar: Jellyfin"/>
                    <p className={classes.title}>Jellyfin</p>
                    </Link>
                    <p>Jellyfin é o serviço principal para assistir Filmes, Séries e também Animes.</p>
                </li>
                <li>
                    <Link to={service.JellySeerr} target= "_blank">
                    <img src="https://www.cyberflix.io/images/app-logos/jellyseerr.png" alt="Clique para acessar: Jellyseerr"/>
                    <p className={classes.title}>Jellyseerr</p>
                    </Link>
                    <p>Aqui é onde você pode requisitar/pedir para que uma Filme, Série ou Anime 
                        seja adicionado em nosso serviço.</p>
                </li>
                <li>
                    <Link to={service.invite} target= "_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/1063/1063809.png" alt="Clique para acessar: Criar Conta" />
                    <p className={classes.title}>Criar Conta</p>
                    </Link>
                    <p>Clique aqui para criar a sua conta caso ainda não tenha 
                        e assim poder acessar os demais serviços apresentados.</p>
                </li>
                </ul>
                    }
                <p>Observação: O serviço será aberto em uma nova aba!</p>
            </div>
        </div>
    )
}

export default Service;