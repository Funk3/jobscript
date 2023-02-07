import React from 'react';
import aiRequest from '../__helpers__/aiapi';

export default function Button(props) {
  return <button onClick={aiRequest}>{props.children}</button>;
}
