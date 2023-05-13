import classes from './MainNavigation.module.css';
import {NavLink }from "react-router-dom"
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={({isActive})=>isActive ?classes.active :undefined}
               end>Home</NavLink>
          </li>
          <li>
          <NavLink to="/events" className={({isActive})=>isActive ?classes.active :undefined}
               end>Events page</NavLink>
          </li>
          <li>
          <NavLink to="/events/:id/edit" className={({isActive})=>isActive ?classes.active :undefined}
               end
            >Edit Event Page</NavLink>
          </li>
          <li>
          <NavLink to="events/new" className={({isActive})=>isActive ?classes.active :undefined}
               
            >new Event page</NavLink>
          </li>
          <li>
          <NavLink to="/events/:id" className={({isActive})=>isActive ?classes.active :undefined}
               >Event detail page</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
