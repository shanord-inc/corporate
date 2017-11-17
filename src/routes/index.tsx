import * as React from 'react'
import ContactPage from '../components/pages/ContactPage/ContactPage'
import IndexPage from '../components/pages/IndexPage/index'
import NewsDetailPage from '../components/pages/NewsDetailPage'
import NewsPage from '../components/pages/NewsPage/index'
import NotFoundPage from '../components/pages/NotFoundPage/index'
import PrivacyPolicyPage from '../components/pages/PrivacyPolicyPage/index'
import WorksPage from '../components/pages/WorksPage/index'
import Helmet from '../containers/Helmet'
import Page from '../containers/Page'

type Route = {
  component: any,
  exact?: boolean,
  path: string,
}

type Routes = {[key: string]: Route}

const routes: Routes = {
  index: {
    component: () =>
      <div>
        <Helmet/>
        <IndexPage/>
      </div>
    ,
    exact: true,
    path: '/',
  },
  news: {
    component: () =>
      <Page title="NEWS">
        <NewsPage/>
      </Page>,
    exact: true,
    path: '/news',
  },
  newsDetail: {
    component: () =>
      <Page title="NEWS DETAIL">
        <NewsDetailPage/>
      </Page>,
    path: '/news/:newsId',
  },
  works: {
    component: () =>
      <Page title="WORKS">
        <WorksPage/>
      </Page>,
    exact: true,
    path: '/works',
  },
  contact: {
    component: () =>
      <Page title="CONTACT">
        <ContactPage/>
      </Page>,
    exact: true,
    path: '/contact',
  },
  privacypolicy: {
    component: () =>
      <Page title="PRIVACY POLICY">
        <PrivacyPolicyPage/>
      </Page>,
    exact: true,
    path: '/privacypolicy',
  },
  notFound: {
    component: () =>
      <Page title="404 Not Found">
        <NotFoundPage/>
      </Page>,
    path: '**',
  }
}

export default routes
