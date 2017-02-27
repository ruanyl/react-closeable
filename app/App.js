import React, { PureComponent } from 'react'

import { enhanceWithCloseable } from '../lib'

import styles from './style.scss'

const CloseableDiv = enhanceWithCloseable(({ children, ...props }) => <div {...props}>{children}</div>)

export class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      open: true,
    }
  }

  close = () => this.setState({ open: false })

  open = () => this.setState({ open: true })

  render() {
    return (
      <div>
        <button onClick={this.open}>open</button>
        {this.state.open ? <CloseableDiv className={styles.closeable} onClose={this.close}>this is closeable component</CloseableDiv> : null}
      </div>
    )
  }
}
