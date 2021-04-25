import { v4 as uuidv4 } from 'uuid'
import Home from '../screens/home'
import Photography from '../screens/photography'

const routes = [
    {
        _id: uuidv4(),
        path: '/',
        component: Home,
    },
    {
        _id: uuidv4(),
        path: '/photography',
        component: Photography,
    }
]

export default routes
