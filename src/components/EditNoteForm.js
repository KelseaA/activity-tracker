import React from 'react';

class EditNoteForm extends React.Component{ 

    constructor(props) {
      super(props);
    }

    toggleEditNoteForm(){
        this.props.onForm();
    }

    editNote(){
        this.props.onEditNote(this.refs.noteText.value);
    }
    
    render() {
        return(
            //edit note modal form
            <div className="edit-card-modal modal">
                <div className="card-selection">
                    <div className="note-card-selection">
                        <textarea className="note-input note yellow" type="text">{this.refs.noteText.value}</textarea> 
                        <button className="edit-note-submit cancel">Cancel</button>
                        <button className="edit-note-submit delete-button">Delete</button>
                           <button className="edit-note-submit submit">Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditNoteForm;