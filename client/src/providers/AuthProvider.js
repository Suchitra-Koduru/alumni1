import axios from 'axios'
import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const AuthContext = createContext()

const AuthProvider = ({children}) => {
    // const [user,setUser] = useState(() => {
    //     const storedUser = localStorage.getItem('user')
    //     return storedUser ? JSON.parse(storedUser) : null
    // })
    const [token,setToken] = useState(() => {
        const storedToken = localStorage.getItem('token')
        return storedToken ? JSON.parse(storedToken) : null
    })
    const [userId,setUserId] = useState(() => {
        const storedUserId = localStorage.getItem('userId')
        return storedUserId ? JSON.parse(storedUserId) : null
    })
    const [role,setRole] = useState(() => {
        const storedRole = localStorage.getItem('role')
        return storedRole ? JSON.parse(storedRole) : null
    })
    const navigate = useNavigate()
    const loginAction  = async (data) => {
        try{
            const response = await axios.post('http://localhost:5000/user/signin',data)
            if(response.data){
                console.log(response.data)
                alert(response.data.message)
                // setUser(response.data.user)
                setToken(response.data.token)
                setUserId(response.data.userId)
                setRole(response.data.role)
                console.log(token,userId,role)
                localStorage.setItem('token',JSON.stringify(response.data.token))
                localStorage.setItem('userId',JSON.stringify(response.data.id))
                localStorage.setItem('role',JSON.stringify(response.data.role))
                console.log(response.data.role==='user')
                if(response.data.role==='user'){
                    navigate('/user')
                }
                else if(response.data.role==="alumni"){
                    //console.log('hiii')
                    navigate('/')
                }
                else if(response.data.role==='admin'){
                    navigate('/admin')
                }
                return
            }
            throw new Error(response.data.message)
        }
        catch(err){
            alert(err)
            navigate("/signup")
            console.error(err)
        }
    }
    const logout = () =>{
        // setUser(null)
        setToken(null)
        setUserId(null)
        setRole(null)
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        localStorage.removeItem('userId')
    }
    
    return (
        <AuthContext.Provider value = {{token,role, userId, loginAction, logout}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
}

// import axios from 'axios';
// import { createContext, useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//     const safeParse = (item) => {
//         try {
//             return item ? JSON.parse(item) : null;
//         } catch (e) {
//             console.error("Failed to parse item:", item, e);
//             return null; // or handle as needed
//         }
//     };

//     const [token, setToken] = useState(() => {
//         const storedToken = localStorage.getItem('token');
//         return safeParse(storedToken);
//     });

//     const [userId, setUserId] = useState(() => {
//         const storedUserId = localStorage.getItem('userId');
//         return safeParse(storedUserId);
//     });

//     const [role, setRole] = useState(() => {
//         const storedRole = localStorage.getItem('role');
//         return safeParse(storedRole);
//     });

//     const navigate = useNavigate();

//     const loginAction = async (data) => {
//         try {
//             const response = await axios.post('http://localhost:5000/user/signin', data);
//             if (response.data) {
//                 alert(response.data.message);
//                 setToken(response.data.token);
//                 setUserId(response.data.userId);
//                 setRole(response.data.role);
//                 localStorage.setItem('token', JSON.stringify(response.data.token));
//                 localStorage.setItem('userId', JSON.stringify(response.data.id)); // Fix: Use userId instead of id
//                 localStorage.setItem('role', JSON.stringify(response.data.role));
//                 if(response.data.role==='alumni'){
//                     navigate('/'); // Navigate to home after login
//                 }
//                 if(response.data.role==='user'){
//                     navigate('/user');
//                 }
//                 return;
//             }
//             throw new Error(response.data.message);
//         } catch (err) {
//             alert(err);
//             navigate("/signup");
//             console.error(err);
//         }
//     };

//     const logout = () => {
//         setToken(null);
//         setUserId(null);
//         setRole(null);
//         localStorage.removeItem('token');
//         localStorage.removeItem('role');
//         localStorage.removeItem('userId');
//     };

//     return (
//         <AuthContext.Provider value={{ token, role, userId, loginAction, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;

// export const useAuth = () => {
//     return useContext(AuthContext);
// };
