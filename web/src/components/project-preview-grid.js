import { Link } from 'gatsby'
import React from 'react'
import Project from './project'

import styles from './project-preview-grid.module.css'

function ProjectPreviewGrid (props) {
  return (
    <div className={styles.root}>
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <Project {...node} />
            </li>
          ))}
      </ul>
    </div>
  )
}

ProjectPreviewGrid.defaultProps = {
  nodes: [],
}

export default ProjectPreviewGrid
