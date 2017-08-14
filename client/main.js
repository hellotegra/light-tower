import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import 'antd/dist/antd.css';

import { Main } from '../imports/client/main';


let isRunned = false;

Meteor.startup(() => {
  Tracker.autorun((comp) => {
    if (!isRunned && (Meteor.user() || Meteor.user() === null)) {
      isRunned = true;
      render(
        <Main/>,
        document.getElementById('app')
      );
    }
  });
});
