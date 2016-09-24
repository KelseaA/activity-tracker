import React from 'react';

class ListEditForm extends React.Component{ 

    constructor(props) {
      super(props);
    }

    editList(){
        this.props.onListEdit(this.refs.listTitle.value);
    }
    
    render() {
        return(
            <div className="add-list-modal modal">
                <div className="list-selection">
                    <div className="note-list-selection">
                        <input ref="listTitle" className="new-list" type="text" placeholder="List Title" defaultValue={this.props.listTitle} />
                        <button className="new-list-submit cancel" onClick={this.props.onListEditFormOpen}>Cancel</button>
                        <button className="new-list-submit submit" onClick={this.editList.bind(this)}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default ListEditForm;