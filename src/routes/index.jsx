import {Suspense, lazy} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {PAGE_URLS} from './constants'

const AppComponent = lazy(() => import('../App'))

function Routes() {
	return (
		<Router>
			<Suspense fallback={'Loading...'}>
				<Switch>
					<Route exact path={PAGE_URLS.HOME} component={AppComponent} />
				</Switch>
			</Suspense>
		</Router>
	)
}

export default Routes
