import { useParams, useNavigate } from "react-router-dom"
import { getInvoice, deleteInvoice } from "../data"

export default function Invoice() {
    let navigate = useNavigate()        // Helps to navigate when I want to change the URL
    let params = useParams()
    let invoice = getInvoice(parseInt(params.invoiceId, 10))   // Use params are always string
    return (
        <main style={{ padding: '1rem' }}>
            <h2>Total Due: {invoice.amount}</h2>
            <p>
                {invoice.name}: {invoice.number}
            </p>
            <p>Due Date: {invoice.due}</p>
            <p>
                <button
                    onClick={() => {
                        deleteInvoice(invoice.number)
                        navigate('/invoices')
                    }}
                >
                    Delete
                </button>
            </p>
        </main>
    )
}