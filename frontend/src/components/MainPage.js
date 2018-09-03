import React from 'react';
import PropTypes from 'prop-types';

class MainPage extends React.Component {
    static PropTypes = {
        data: PropTypes.string.isRequired,
        actions: PropTypes.shape({
            fetchData: PropTypes.func.isRequired
        })
    };

    componentWillMount() {
        this.props.actions.fetchData();
    }

    render() {
        const { data } = this.props;

        return (
            <div>Data: {data}</div>
        )
    }
}

export default MainPage;