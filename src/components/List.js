import React from 'react';
import Note from './Note';

class List extends React.Component {

  constructor(props) {
    super(props);
  }
  
  editListTitle() {
      this.props.onListEditFormOpen(this.props.title);
      console.log(this.props.title);
  }
  
  deleteList() {
      this.props.onDelete(this.props.index);
  }
  
  render () {
      const notes = this.props.cards.map((card, i) => {
          return(
              <Note 
                  key={"note-" + i}
                  text={card.text}
              />
          );
      });
      return(
          <div className="column">
              <div className="column-header">
                  <p className="header-title" onClick={this.editListTitle.bind(this)}>
                      {this.props.title}
                  </p>
                  <p className="delete" onClick={this.deleteList.bind(this)}>x</p>
              </div>
              {notes}
              <button className="add-card" onClick={this.props.onForm}>+</button> 
          </div>
      );
  }
}

export default List;