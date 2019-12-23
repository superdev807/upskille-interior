import React, { Component } from 'react'
import Gallery from 'react-grid-gallery';
import './GridView.css'

class GridView extends Component {

    makeImageList() {
        let newImageList = []
        const { displayList } = this.props

        // let rowCnt = Math.ceil(Math.sqrt(displayList.length))

        displayList.map((value) => (
            newImageList.push({
                src: `/uploads/${value}`,
                thumbnail: `/uploads/${value}`,
                thumbnailWidth: 640,
                thumbnailHeight: 424,
                caption: value,
            })                        
        ))

        return newImageList
    }

    render() {
        return (
            <div className = 'image-grid-view'>
                <Gallery 
                    className = 'image-grid-view' 
                    images = {this.makeImageList()} 
                    enableImageSelection = {false}
                    backdropClosesModal = {true}
                />
            </div>
        )
    }
}

export default GridView