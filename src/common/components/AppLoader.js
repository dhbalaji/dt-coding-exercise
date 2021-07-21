import './appLoader.css';

function AppLoader({loading}) {
    if (!loading) {
        return null;
    }
    return (
        <>
            <div className="loader-container"/>
            <div className="loader simple-circle"/>
        </>)
}

export default AppLoader;
