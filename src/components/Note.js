import React from 'react';

class Note extends React.Component{ 

    constructor(props) {
      super(props);
    }

    toggleEditNoteForm(){
        this.props.onForm(this.props.index);
    }

    // editNoteText(){
    //     this.props.onEditNote(this.props.index, this.props.cards);
    // }

    render() {
        return(
            // <div className="note-container" onClick={this.editNoteText}>
             <div className="note-container">
                <i className="pin"></i>
                <p className="delete note-delete" onClick={this.props.onNoteDelete}>x</p>
                <p className="note yellow">
                    {this.props.text}
                </p>
            </div>
        );
    }
}

export default Note;