import React, { PureComponent } from 'react';
import TextField from '@material-ui/core/TextField';

export default class FormContainer extends PureComponent {


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

