import React from 'react';
import List from './List';
import NoteForm from './NoteForm';
import ListForm from './ListForm';
import ListEditForm from './ListEditForm';
import EditNoteForm from './EditNoteForm';

class ListDashboard extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {
            lists: [
                {
                    title: 'TO DO',
                    cards: [
                        {text: 'Walk the dog'},
                        {text: 'Pick up dry cleaning'}
                    ]
                },
                {
                    title: 'IN PROGRESS',
                    cards: [
                        {text: 'Laundry'}
                    ]
                }    
            ],
            formOpen: false,
            listFormOpen: false,
            listEditFormOpen: false,
            editFormOpen: false
        }
    }

            
    toggleListForm(){
        this.setState({
            listFormOpen: !this.state.listFormOpen
        });
    }
    toggleListEditForm(listTitle){
        this.setState({
            listEditFormOpen: !this.state.listEditFormOpen,
            listTitle
        });
    }
    toggleEditNoteForm(){
        this.setState({
            editFormOpen: !this.state.editFormOpen
        });
    }
    addList(listTitle){
        this.toggleListForm();
        const lists = this.state.lists;
        lists.push({
            title: listTitle,
            cards: []
        });
        this.setState({
            lists: lists
        });
    }
    editList(listTitle){
        // this.toggleListEditForm();
        const lists = this.state.lists;
        lists[this.state.currentList].title = listTitle;
        this.setState({
            lists: lists
        });
    }
    editListForm(list, listTitle){
        this.toggleListEditForm();
        this.setState({
            currentList: list,
            listTitle
        });
    }
    deleteList(index){
        const lists = this.state.lists;
        lists.splice(index, 1);
        this.setState({
            lists: lists
        });
    }
    toggleNoteForm(){
        this.setState({
            formOpen: !this.state.formOpen
        });
    }
    openNoteForm(index){
        this.setState({
            currentList: index,
            formOpen: !this.state.formOpen
        });
    }
    addNote(noteText){
        const lists = this.state.lists;
        lists[this.state.currentList].cards.push({
            text: noteText
        });
        this.setState({
            lists: lists, formOpen: !this.state.formOpen
        });
    }
    editNote(noteText){
        this.toggleEditNoteForm();
        const lists = this.state.lists;
        lists[this.state.currentList].cards[this.state.currentCard].text=noteText;
        this.setState({
            lists: lists
        });
    }
    editNoteForm(list, card, text){
        this.toggleEditNoteForm();
        this.setState({
            currentList: list,
            currentCard: card,
            currentText: text
        });
    }
    render () {
        const lists = this.state.lists.map((list, i) => {
            return(
                <List 
                    key={"list-" + i}
                    index={i}
                    title={list.title}
                    cards={list.cards}
                    onForm={this.openNoteForm.bind(this, i)}
                    onListEditFormOpen={this.toggleListEditForm.bind(this)}
                    onEditForm={this.editNoteForm.bind(this)}
                    onListEdit={this.editListForm.bind(this)}
                    onEditNote={this.editNoteForm.bind(this)}
                    onDelete={this.deleteList.bind(this)}
                />
            );
        });
        let noteForm, listForm, editForm, listEditForm;
        if (this.state.formOpen) {
              noteForm = <NoteForm 
                            onAdd={this.addNote.bind(this)}
                            onCancel={this.toggleNoteForm.bind(this)} 
                        />;
        } else {
              noteForm = "";
        }
        if (this.state.listFormOpen) {
              listForm = <ListForm 
                            onForm={this.toggleListForm.bind(this)}
                            onAdd={this.addList.bind(this)}
                        />;
        } else {
              listForm = "";
        }
        if (this.state.listEditFormOpen) {
              listEditForm = <ListEditForm
                                onListEditFormOpen={this.toggleListEditForm.bind(this)}
                                onListEdit={this.editList.bind(this)}
                                listTitle={this.state.listTitle}
                            />;
        } else {
              listEditForm = "";
        }
        if (this.state.editFormOpen) {
              editForm = <EditNoteForm 
                            onForm={this.toggleEditNoteForm.bind(this)}
                            onEditNote={this.editNote.bind(this)}
                            currentCard={this.state.currentCard}
                            currentText={this.state.currentText}
                        />;
        } else {
              editForm = "";
        }
        return(
            <div className="wrapper">
                {lists}
                <div className="column">
                    <div className="column-header">
                        <p className="header-title">ADD LIST</p>
                    </div>
                    <button className="add-list" onClick={this.toggleListForm.bind(this)}>+</button>
                </div>
                {noteForm}
                {listForm}
                {listEditForm}
                {editForm}
            </div>
        );
    }
}

export default ListDashboard;



