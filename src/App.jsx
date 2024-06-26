import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import useLocalStorage from "use-local-storage";
import Home from './pages/Home';
import Login from './pages/Login';
import { LoginoutContext } from './LoginoutContext';
import { AuthContext } from './AuthContext';
import RequireAuth from './components/RequireAuth';
import Logout from './pages/Logout';
import Profile from './pages/Profile';
import { useState } from "react";
import { TodoContext } from "./contexts/TodoContext";
import EditTodo from "./pages/EditTodo";
import AddTodo from "./pages/AddTodo";
import ErrorPage from "./pages/ErrorPage";
import AddSchedule from "./pages/AddSchedule";
import Schedule from './pages/Schedule';
import EditSchedule from './pages/EditSchedule';


//function Layout() {
//  return (
//    <>
//      <Navbar bg="light" variant="light">
//        <Container>
//          <Navbar.Brand href="/layout">Todos</Navbar.Brand>
//          <Nav className="me-auto">
//            <Nav.Link href="/home">Home</Nav.Link>            
//            <Nav.Link href="/add">Add Songs</Nav.Link> 
//            <Nav.Link href="/logout">Logout</Nav.Link>                      
//          </Nav>          
//        </Container>
//      </Navbar>
//      <Outlet />
//    </>
//  );
//}

export default function App() {
 const [token, setToken] = useLocalStorage("token", null);
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 const [todos, setTodos] = useLocalStorage("todos", []);
 const [todoSchedules, setTodoSchedules] = useLocalStorage("todoSchedules", []);

  return (
    <AuthContext.Provider value={{ token, setToken}}>
    <LoginoutContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      <TodoContext.Provider value={{ todos, setTodos, todoSchedules, setTodoSchedules }}>       
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Login />}/>         
            <Route index element={<Login />} />            
            <Route path="home" element={<Home />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="add" element={<AddTodo />} />
            <Route path="addschedule" element={<AddSchedule />} />           
            <Route path="*" element={<ErrorPage />} />
            <Route path="todo/:id" element={<EditTodo />} />
            <Route path="todoScheduleA/:id" element={<EditSchedule />} />
            <Route path='profile' element={ 
                <RequireAuth>
                  <Profile />
                </RequireAuth>
            }       
            />
            <Route path='logout' element={<Logout />} />          
        </Routes>
      </BrowserRouter>
     </TodoContext.Provider>    
    </LoginoutContext.Provider>
  </AuthContext.Provider>
  );
}

