import React from 'react';

class ListForm extends React.Component{ 
    
    constructor(props) {
      super(props);
    }

    addList(){
        this.props.onAdd(this.refs.listTitle.value);
    }
    
    render() {
        return(
            <div className="add-list-modal modal">
                <div className="list-selection">
                    <div className="note-list-selection">
                        <input ref="listTitle" className="new-list" type="text" placeholder="List Title" />
                        <button className="new-list-submit cancel" onClick={this.props.onForm}>Cancel</button>
                        <button className="new-list-submit add" onClick={this.addList.bind(this)}>Add List</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default ListForm;