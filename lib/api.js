import axios from 'axios';
import FuncSessions from '../lib/functions-session';

const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: { 'authorization': FuncSessions.getSession() ? FuncSessions.getSession().token : process.env.NEXT_PUBLIC_API_TOKEN }
})

export default api

