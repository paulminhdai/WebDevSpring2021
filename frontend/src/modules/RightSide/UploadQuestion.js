import React, { Component } from 'react'

class UploadQuestion extends Component {
    render() {
        return (
            <>
                <div className="modalHeader">
                    <h2>Ask a Question</h2>
                </div>
                <div className="modalBody">
                    <form className="uploadForm">
                        <textarea id="questionText" className="uploadInput" placeholder="Type a Question"></textarea>
                        <select className="uploadInput typeInput" defaultValue={'DEFAULT'}>
                            <option id="optionPlaceholder" value="DEFAULT" disabled={true}>Question Type</option>
                            <option value="Housing">Housing</option>
                            <option value="Classes">Classes</option>
                            <option value="Items">Items</option>
                            <option value="Events">Events</option>
                            <option value="Others">Others</option>
                        </select>
                        <button className="uploadItem uploadModalButton siteButton">Send</button>
                    </form>
                </div>
            </>
            
        )
    }
}

export default UploadQuestion
