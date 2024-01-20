import { ChangeEvent, FC, useState } from 'react';
import { User } from '../../shared/types';
import { useAppDispatch } from '../../shared/reduxHooks';
import { setLoggedIn } from '../../features/authSlice';
import { useNavigate } from 'react-router-dom';
import { AppRoutes, RoutePath } from '../../config/routeConfig';
import styles from './LoginPage.module.scss'

const LoginPage: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [user, setUser] = useState<User>({
    userName: '',
    password: ''
  })

  const handleUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleLogin: React.FormEventHandler<HTMLFormElement> = async (e): Promise<void> => {
    e.preventDefault()
    if (user.userName.length > 4) {
      try {
        dispatch(setLoggedIn(true))
        navigate(RoutePath[AppRoutes.GAMES])
      } catch (err) {
        console.log(err)
      }
    } else {
      alert("Введите имя")
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleLogin} className={styles.form}>
        <h2>Вход</h2>
        <input
          placeholder='Имя'
          value={user.userName}
          name='userName'
          onChange={handleUserInput} />
        <input
          placeholder='Пароль'
          value={user.password}
          name='password'
          onChange={handleUserInput} />
        <button className={styles.btn_submit}>Войти</button>
      </form>
    </div>
  );
};

export default LoginPage;