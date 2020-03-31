/**
 * @file Details page template #1 section.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { string, node } from 'prop-types';
import React from 'react';

import { Column } from 'carbon-components-react/lib/components/Grid';

import { namespace } from './UNSTABLE__DetailsPage1';

function UNSTABLE__DetailsPage1Section({ children, className, ...other }) {
  const classes = classnames(`${namespace}__section`, className);
  return (
    <Column sm={4} md={8} lg={6} className={classes} {...other}>
      {children}
    </Column>
  );
}

UNSTABLE__DetailsPage1Section.propTypes = {
  /** Component content. */
  children: node,

  /** Extra classes to add. */
  className: string,
};

UNSTABLE__DetailsPage1Section.defaultProps = {
  children: undefined,
  className: undefined,
};

export default UNSTABLE__DetailsPage1Section;
