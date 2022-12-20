import { useParams } from "react-router-dom"
// import { ambilInvoice } from "./invoice"

export default function Bills() {
    let params= useParams()
    // let invoice = ambilInvoice(params.invoiceid)
    console.log(params)
    return <h1>Invoice {params.invoiceid}</h1>
}