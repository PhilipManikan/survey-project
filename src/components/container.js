import React from 'react';
import Navbar from './helpers/navbar';
import QuestionList from './scripts/questionList'
import ClientList from './scripts/clientList'
import SurveyList from './scripts/surveyList'


import { Switch, Route } from 'react-router-dom'



class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCreateFeedback: true,
            showClientList: false,
        }
    }


    render() {
        return (
            <div className="container">
                <div className="row">

                    <Navbar />
                </div>
                <div className="row">
                    <Switch>
                        <Route exact path='/' render={() => <QuestionList />} />
                        <Route exact path='/surveys' render={() => <SurveyList />} />
                        <Route exact path='/clients' render={() => <ClientList />} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Container;