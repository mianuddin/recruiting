import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="SLO Hacks"
      meta={[
        { name: 'description', content: 'SLO Hacks' },
        { name: 'keywords', content: 'san luis obispo, cal poly, hackathon, coding, software, competition, recruiting' },
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func, // eslint-disable-line react/require-default-props
};

export default TemplateWrapper;
