import React, { Component } from "react";
import MUIRichTextEditor from "mui-rte";

class Editor extends Component {
  render() {
    const save = data => {
      console.log(data.innerHtml);
    };
    return (
      <div id="Editor">
        <MUIRichTextEditor
          label="Type something here..."
          onSave={save}
          inlineToolbar={true}
        />
      </div>
    );
  }
}

export default Editor;

// filterNotebooks = e => {
//     const NotepadsStore = this.props.NotepadsStore;
//     const subject = e.target.innerHTML;
//     NotepadsStore.setCurrentSubject(subject);

// {subjects.map(s => (
//     <Link to='/Editor><Nav.Link onClick={this.filterNotebooks}>{s}</Nav.Link></Link>