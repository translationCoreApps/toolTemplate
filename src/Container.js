import React, { Component } from 'react';
import PropTypes from 'prop-types';
// components

class Container extends Component {

  render() {
    const {translate} = this.props;
    let {contextId} = this.props.contextIdReducer;
    let contextInfo = <div/>;
    if (contextId) {
      let {tool, groupId, reference} = contextId;
      contextInfo = (
        <div>
          <p>contextId.tool: {tool}</p>
          <p>contextId.groupId: {groupId}</p>
          <p>contextId.reference: {reference.bookId} {reference.chapter}:{reference.verse}</p>
        </div>
      );
    }

    return (
      <div>
        <div>{translate('hello')}</div>
        {contextInfo}
      </div>
    );
  }
}

Container.propTypes = {
  currentToolViews: PropTypes.object.isRequired,
  resourcesReducer: PropTypes.object.isRequired,
  contextIdReducer: PropTypes.object.isRequired,
  translate: PropTypes.func.isRequired
};

export default Container;
