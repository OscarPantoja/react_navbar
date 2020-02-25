import React from 'react'

import CardMd from './CardMd'

function GridPosts() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <CardMd />
                </div>

                <div className='col-md-4'>
                    <CardMd />
                </div>
            
                <div className='col-md-4'>
                    <CardMd />
                </div>
            </div>
        </div>
  )
}

export default GridPosts
