import React, { Component, Fragment } from 'react';
import {Link, Outlet} from 'react-router-dom';
// import { getInvoices } from './data';


class Invoice extends Component{
    state={
        invoice: [],
    }

    getDataInvoice = () => {
        fetch('http://localhost:4000/invoices')
        .then(response => response.json())
        .then(json => {
            this.setState({
                invoice: json, 
            })
        })
    }

    componentDidMount() {
        this.getDataInvoice()
    }

    // ambilInvoice(number){
    //     let invoices = this.state.invoice
    //     console.log(invoices)
    //     return invoices.find(invoice => invoice.number === number)
    // }

    render(){
        console.log(this.state.invoice)
        return(
            <Fragment>
                <main>
                    <div>
                        {this.state.invoice.map(invoice => (
                            <Link className='bg-gray-200' 
                                to={`/invoice/${invoice.number}`}
                                key={invoice.number}>
                            {invoice.name}</Link>
                            ))
                        }
                    </div>
                </main>
                <Outlet></Outlet>
            </Fragment>

        )
    }
}


export default Invoice;