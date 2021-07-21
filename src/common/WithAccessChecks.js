import React from "react";
import {HIDDEN, READ_ONLY, READ_WRITE} from './constants';

const WithAccessChecks = (WrappedComponent, moduleName) => {
    class WithAccessChecksHOC extends React.Component {
        render() {
            const {
                access: {
                    [moduleName]: moduleAccess
                }, ...rest
            } = this.props;

            if (moduleAccess === HIDDEN) {
                return null;
            }

            return <WrappedComponent {...rest}
                                     isReadWrite={moduleAccess === READ_WRITE}
                                     isReadOnly={moduleAccess === READ_ONLY}
            />
        }
    }

    return WithAccessChecksHOC;
};

export default WithAccessChecks;
