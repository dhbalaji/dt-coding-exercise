import './appLoader.css';

function AppLoader({loading}) {
    if (!loading) {
        return null;
    }
    return (<div className="loader simple-circle"></div>)
}

export default AppLoader;
