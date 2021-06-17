import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';

import Main from './components/Main';
import Menu from './components/Menu';
import Credits from './components/Credits';

import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';

export default function App() {
  const homePage = <Home></Home>;
  const aboutPage = <About></About>;
  const contactPage = <Contact></Contact>;
  const teamPage = <Team></Team>;

  const menuLinks = [
    { name: 'Home', linkTo: '/home' },
    { name: 'Equipe', linkTo: '/equipe' },
    { name: 'Sobre', linkTo: '/Sobre' },
    { name: 'Contato', linkTo: '/contato' },
  ];
  const routes = [
    { name: 'Home', path: ['/', '/home'], component: homePage, exact: true },
    { name: 'Sobre', path: '/sobre', component: aboutPage },
    { name: 'Contato', path: '/contato', component: contactPage },
    { name: 'Equipe', path: '/equipe', component: teamPage },
    {
      name: 'Error 404',
      path: '*',
      component: Error404,
    },
  ];

  return (
    <Router>
      <Header></Header>
      <Menu
        StablishmentName={'Clínica Médica Senna Joy'}
        Links={menuLinks}
      ></Menu>
      <Main>
        <Switch>
          {routes.map((route, i) => {
            return (
              <Route key={i} path={route.path} exact={route.exact}>
                {route.component}
              </Route>
            );
          })}
        </Switch>
      </Main>
      <Credits></Credits>
    </Router>
  );
}
