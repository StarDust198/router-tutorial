import { 
    // NavLink, 
    Outlet,
    useSearchParams
 } from "react-router-dom"
import { getInvoices } from  '../data'
import { QueryNavLink } from '../components/QueryNavLink'

export default function Invoices() {
    let invoices = getInvoices()
    let [searchParams, setSearchParams] = useSearchParams() 
    // returning the URLSearchParams with 'filter' as one of values

    return (
        <div style={{display: 'flex'}}>
            <nav style={{
                borderRight: "solid 1px",
                padding: "1rem"
            }}>
                <input
                    value={searchParams.get('filter') || ""}
                            // just like useState but it's in URLSearchParams instead
                    onChange={event => {
                        let filter = event.target.value
                        if (filter) {
                            setSearchParams({ filter })   
                            // putting ?filter=... to the URL and re-rendering the router
                        } else {
                            setSearchParams({})
                        }
                    }}
                />
                {invoices
                    .filter(invoice => {
                        let filter = searchParams.get('filter')     // filters bases on search param
                        if (!filter) return true
                        let name = invoice.name.toLowerCase()
                        return name.startsWith(filter.toLowerCase())
                    })
                    
                    .map(invoice => (
                        <QueryNavLink
                            style={({ isActive }) => {      // Navlink passes isActive value
        // can be managed with classes className={({ isActive }) => isActive ? "red" : "blue"}
                                return {
                                    display: 'block',
                                    margin: '1rem 0',
                                    color: isActive ? 'red' : ''
                                }
                            }}
                            to={`/invoices/${invoice.number}`}
                            key={invoice.number}
                        >
                            {invoice.name}
                        </QueryNavLink>
                ))}
            </nav>
            <Outlet />
        </div>
    )
}