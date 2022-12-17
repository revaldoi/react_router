import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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

    render(){
        console.log(this.state.invoice)
        return(
            <main>
                <div>
                    {this.state.invoice.map(invoice => (
                        <Link className='bg-gray-200' 
                            to={`/invoices/${invoice.number}`}
                            key={invoice.number}>
                        {invoice.name}</Link>))
                    }
                </div>
            </main>
        )
    }
}


export default Invoice;