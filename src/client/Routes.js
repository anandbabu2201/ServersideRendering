import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage'

export default [
{
  path :'/',
 ...HomePage,
  exact:true

},
{
  path :'/users',
  ...UsersListPage,
  exact:true

}
]


