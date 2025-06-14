import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Dashboard from '../pages/Dashboard';
import Accounts from '../pages/Accounts';
import Brokers from '../pages/Brokers';
import Submissions from '../pages/Submissions';
import Organizations from '../pages/Organizations';
import GoalsRules from '../pages/GoalsRules';
import Admin from '../pages/Admin';

const Routes = () => {
    return (
        <Router>
            <MainLayout>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/accounts" component={Accounts} />
                    <Route path="/brokers" component={Brokers} />
                    <Route path="/submissions" component={Submissions} />
                    <Route path="/organizations" component={Organizations} />
                    <Route path="/goals-rules" component={GoalsRules} />
                    <Route path="/admin" component={Admin} />
                </Switch>
            </MainLayout>
        </Router>
    );
};

export default Routes;