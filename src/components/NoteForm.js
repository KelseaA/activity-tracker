import React from 'react';

class NoteForm extends React.Component{ 

    constructor(props) {
      super(props);
    }

    onSubmit() {
        this.props.onAdd(this.refs.noteText.value);
    }

    render() {
        return(
            //add note modal form
            <div className="add-card-modal modal">
                <div className="card-selection">
                    <div className="note-card-selection">
                        <input ref="noteText" className="note-input note yellow" type="text" placeholder="Enter note text here"></input> 
                        <button className="new-note-submit cancel" onClick={this.props.onCancel}>Cancel</button>
                        <button type="submit" className="new-note-submit add" onClick={this.onSubmit.bind(this)}>Add Note</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default NoteForm;