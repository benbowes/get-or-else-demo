import React from 'react';
import ReactDOM from 'react-dom';
import getOrElse from 'get-or-else';

const nameObj = {
  salutation: 'Mr',
  name: {
    first: 'James'
  }
};

const salutation = getOrElse({  get: [nameObj,'salutation'], else: false });

const NameComponent = () => {
  return (
    <h1>
      We have been expecting you

      {salutation && <span> {salutation}</span>}

      <span> {getOrElse({ get: [nameObj,'name.first'], else: '' })}</span>

      <span> {getOrElse({ get: [nameObj,'name.last'], else: '' })}</span>
    </h1>
  );
};

ReactDOM.render(<NameComponent />, document.getElementById('root'));
