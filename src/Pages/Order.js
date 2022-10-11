import React from 'react'
import { Button } from 'react-bootstrap'
import mapsIcon from '../assets/map-icon.svg'

function Order() {
    return (
        <div>
            <h2>Geprek Bensu</h2>
            <div>
                <p>Delivery Location</p>
                <div>
                    <p>Harbour Building</p>
                    <Button className='btn-nav'>Select On Map <span>{mapsIcon}</span></Button>
                </div>
            </div>
            
        </div>
    )
}

export default Order