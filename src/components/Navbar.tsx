import { Link, useLoaderData } from 'react-router-dom';
import { useState, useEffect } from "react";
import classes from './Navbar.module.css';
import { ServiceProps } from "../types/service";

const Navbar = () => {

  const [service, setService] = useState<ServiceProps | null>(null);

    useEffect(() => {
    
      const loadData = async () => {
        const apiURL = import.meta.env.VITE_API || process.env.VITE_API;
        console.log(apiURL);
            const res = await fetch(apiURL as string);
            const data = await res.json();
            console.log(data);
  
            const { Jellyfin, JellySeerr, Invite } = data
            const serviceData: ServiceProps = {
                Jellyfin,
                JellySeerr,
                Invite,
            }

            console.log(serviceData)
  
            setService(serviceData)
          };
  
          loadData();
          
          
        },[]);

  return (
    <nav className={classes.navbar}>
        <Link to='/'>Richão Services</Link>
        <div className={classes.menu}>
            {service && 
            <>
            <Link className={classes.menuitem} to={service.Jellyfin}>Jellyfin</Link>
            <Link className={classes.menuitem} to={service.JellySeerr}>Jellyseerr</Link>
            <Link className={classes.menuitem} to={service.Invite}>Criar Conta</Link></>
            }
        </div>
    </nav>
  )
}

export default Navbar