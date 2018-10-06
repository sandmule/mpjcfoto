import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import About from '../components/about'
import Contact from '../components/contact'
import Design from '../components/design'
import Photography from '../components/photography'
import Video from '../components/video'
import Layout from '../components/navbar/Layout'
import Footer from '../components/footer'
import Admin from '../components/admin'

class SiteRouter extends React.Component {
  render() {
    const {resource1Data} = this.props
    return (
      <Router>
        <Layout>
          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={About} />
              <Route path='/contact' component={Contact} />
              <Route path="/photography" component={Photography} />
              <Route path="/video" component={Video} />
              <Route path="/design" component={Design} />
              <Route path="/admin" component={Admin} />
            </Switch>
            <Footer />
           </div>
        </Layout>
      </Router>
    )
  }
}

export default SiteRouter;
