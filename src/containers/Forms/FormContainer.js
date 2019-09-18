import React, { PureComponent } from 'react';

class FormContainer extends PureComponent {
    
    componentDidMount() {
        this.props.fetch();
    }

    render() {
        return (
            <section>
            </section>
        )
    }
}

export default connect(
    
)(FormContainer);