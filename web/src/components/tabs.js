import React from 'react'
import PropTypes from 'prop-types'
import Tab from './tab'
import PortableText from './portableText'

import styles from './tabs.module.css'

function Tabs(props) {
  return (
    <div className={styles.root}>
      <ul className={styles.tabList}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node._key}>
              {node.title}
            </li>
          ))
        }
      </ul>
      <div className="tabContent">
        {props.nodes &&
          props.nodes.map(node => (
            <Tab {...node} />
          ))
        }
      </div>      
    </div>
  )
}

Tabs.defaultProps = {
  title: 'title',
  nodes: [],
  browseMoreHref: ''
}

export default Tabs;
