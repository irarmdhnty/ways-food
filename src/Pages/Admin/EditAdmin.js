import React from 'react'
import { Container} from 'react-bootstrap'
import FormEdit from '../Admin/EditAdmin'

function EditAdmin() {
    return (
        <Container>
            <h2 className='my-5'>Edit Profile Patner</h2>
            <FormEdit />
        </Container>
    )
}

export default EditAdmin