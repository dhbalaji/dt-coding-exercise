import React from 'react';

function WithLoadingIndicator(Component) {
    return function WithLoadingComponent({isLoading, ...props}) {
        if (!isLoading) return <Component {...props} />;
        return <React.Fragment>
            <p>Hold on, fetching data might take some time.</p>
            <div className="loader"></div>
        </React.Fragment>;
    };
}

export default WithLoadingIndicator;
