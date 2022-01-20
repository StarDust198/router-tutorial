import { useLocation, NavLink } from 'react-router-dom'

export function QueryNavLink({ to, ...props }) {        
    // Making it possible to not reset location and searchParams while clicking on NavLink 
    let location = useLocation()
    // returns something like this
    // {
    //     pathname: "/invoices",
    //     search: "?filter=sa",
    //     hash: "",
    //     state: null,
    //     key: "ae4cz2j"
    // }

    return <NavLink to={to + location.search} {...props} />
}