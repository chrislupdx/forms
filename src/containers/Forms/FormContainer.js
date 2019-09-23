import React, { PureComponent } from 'react';
import TextField from '@material-ui/core/TextField';

export default class FormContainer extends PureComponent {
    static propTypes = {
        CreateNPC: this.propTypes.func.isRequired
    }

    render() {
        return (
            <section>
                <p>hai</p>
                <TextField
                 id="Npcname"
                 label="Name"
                 />
            </section>
        )
    }
}

