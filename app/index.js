import React from 'react';
import ReactDOM from 'react-dom';
import getOrElse from 'get-or-else';

const data = {
  salutation: 'Mr',
  name: {
    first: 'James'
  }
};

const salutation = getOrElse({ get: [data,'salutation'], else: false });

const NameComponent = () => {
  return (
    <h1>
      We've been expecting you
      {salutation && <span> {salutation}</span>}
      <span> {getOrElse({ get:[data,'name.first'], else:''})}</span>
      <span> {getOrElse({ get:[data,'name.last'], else:''})}</span>
    </h1>
  );
};

ReactDOM.render(<NameComponent />, document.getElementById('root'));
