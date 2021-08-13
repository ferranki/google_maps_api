import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function PublicRoute ({ isPublic, component: Component, ...rest }) {
  if (isPublic) {
    return (
      <Route
        {...rest}
        render={props => <Component {...props} /> }
      />
    )
  }
  return <Redirect to="/locations"/>
};
