import './appLoader.css';

function AppLoader({isLoading}) {
    if (!isLoading) {
        return null;
    }
    return (
        <>
            <div className="loader-container"/>
            <div className="loader simple-circle"/>
        </>)
}

export default AppLoader;
