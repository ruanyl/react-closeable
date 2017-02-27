import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

export const enhanceWithCloseable = ComposedComponent => class extends PureComponent {

  constructor(props) {
    super(props)
    this.mounted = true
  }

  static propTypes = {
    onClose: React.PropTypes.func,
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleDocumentClick)
  }

  componentWillUnmount() {
    this.mounted = false
    document.removeEventListener('mousedown', this.handleDocumentClick)
  }

  /* eslint-disable react/no-find-dom-node */
  handleDocumentClick = e => {
    if (this.mounted && !ReactDOM.findDOMNode(this).contains(e.target)) {
      this.props.onClose()
    }
  }

  render() {
    return <ComposedComponent ref={node => { this.node = node }} {...this.props} />
  }
}
