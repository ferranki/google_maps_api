import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { routes } from '../infrastructure/routes'
import PublicRoute from '../infrastructure/components/public-route'

function App() {
    return (
        <div className="app">
            <main>
                <Suspense fallback={<h1>Loading app...</h1>}>
                    <Switch>
                        {routes.map(route => (
                            <Suspense fallback={<h1>Loading pages..</h1>}>
                                <PublicRoute
                                    key={route.path}
                                    isPublic={route.privated}
                                    exact={route.exact}
                                    path={route.path}
                                    component={route.component}
                                />
                            </Suspense>
                        ))}
                        <Redirect from="/" to="/locations" />
                        <Route>404</Route>
                    </Switch>
                </Suspense>
            </main>
        </div>
    )
}

export default App
