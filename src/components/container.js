import React from 'react';
import Navbar from './helpers/navbar';
import QuestionList from './scripts/questionList'
import ClientList from './scripts/clientList'
import SurveyList from './scripts/surveyList'
import Data from './scripts/datalist'


import { Switch, Route } from 'react-router-dom'



class Container extends React.Component {
    stae = {

    }

    render() {
        return (
            <div className="container bgcolor">

                <div className="row top">

                    <Navbar />
                </div>
                <div className="row">
                    <Switch>
                        <Route exact path='/' render={() => <QuestionList />} />
                        <Route exact path='/surveys' render={() => <SurveyList />} />
                        <Route exact path='/data' render={() => <Data />} />
                        <Route exact path='/clients' render={() => <ClientList />} />

                    </Switch>
                </div>
            </div>
        )
    }
}

export default Container;