import { useAuth } from '../../hooks/useAuth'

const Header = () => {
    const { user, setUser } = useAuth()

    return user ? (
        <>
            <h2>Welcome, {user.name}!</h2>
            <button className='btn' onClick={() => setUser(null)}>Logout</button>
        </>
    ) : (
        <button className='btn'
            onClick={() =>
                setUser({
                    name: 'Vadim',
                })
            }
        >
            Login
        </button>
    )
}

export default Header
