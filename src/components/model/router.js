import User from '../components/User'
import Title from '../components/Title'
import Shop from '../components/Shop'


let routes = [
    {
        path:'/',
        component:User,
        exact:true
    },
    {
        path:'/shop',
        component:Shop
    },
    {
        path:'/title',
        component:Title
    },
];

export default routes;