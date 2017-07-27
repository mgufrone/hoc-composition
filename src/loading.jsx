import React from 'react';
import {Dimmer, Loader} from 'semantic-ui-react';
const LoadingComponent = (props) => (<div><Dimmer active={props.isLoading}>
  <Loader size={'massive'}>Fetching Posts...</Loader>
</Dimmer></div>);

export default LoadingComponent;
