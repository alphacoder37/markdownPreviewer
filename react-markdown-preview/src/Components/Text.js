import React from 'react';
import ReactMarkdown from 'react-markdown';
import InitialText from './InitialText.md';

class Text extends React.Component {
    constructor(props) {
        super(props)
this.state = {
    input: ''
};
    }
handleChange(e) {
    this.setState({
        input: e.target.value
    })
}

componentDidMount() {
    fetch(InitialText).then((response) => response.text()).then((text) => {
      this.setState({ input: text })
    })
  }


  render() {
    return (
      <div>
        <div id="editor-div" className="center-block">
          <div id="editor-header">
            <p><i class="fab fa-free-code-camp"></i>Editor</p>
          </div>
          <textarea
            id="editor"
            onChange={this.handleChange.bind(this)}
            value={this.state.input}
          ></textarea>
        </div>
        <div id="preview-div" className="center-block">
            <div id="preview-header">
            <p><i class="fab fa-free-code-camp"></i>Markdown</p>
            </div>
            <div id="preview">
          <ReactMarkdown id="markdown-output" children={this.state.input} />
          </div>
        </div>
      </div>
    );
  }
}

export default Text;
