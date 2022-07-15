import React, { useState } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Select,
  TextArea,
} from 'semantic-ui-react';
import Input from '../components/Input';
import validate from '../utils/validate';
import { setValuesForm } from '../utils/localStorage';

import '../styles/user.css';
import Alert from '../components/Alert';

const User = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    lastName: '',
    password: '',
    role: '',
    description: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    name: '',
    password: '',
    role: '',
  });

  const [showAlert, setShowAlert] = useState(false);

  const roleOptions = [
    { key: 'admin', value: 'admin', text: 'Admin' },
    { key: 'superadmin', value: 'superadmin', text: 'Superadmin' },
    { key: 'user', value: 'user', text: 'User' },
  ];

  const validations = [
    {
      name: 'email',
      type: 'email',
      value: formData.email,
    },
    {
      name: 'name',
      type: 'required',
      value: formData.name,
    },
    {
      name: 'role',
      type: 'required',
      value: formData.role,
    },
    {
      name: 'password',
      type: 'password',
      value: formData.password,
    }
  ];

  const handleOnChange = (e, data) => {
    const { name, value } = data || e.target;
    setFormData({...formData, [name]: value});
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const resValidations = validate(validations);
    if(!resValidations.pass) {
      setErrors(resValidations.errors)
      return;
    }
    setErrors({
      email: '',
      name: '',
      password: '',
      role: '',
    });
    setFormData({
      email: '',
      name: '',
      lastName: '',
      password: '',
      role: '',
      description: '',
    });
    setValuesForm(formData);
    setShowAlert(true);
  };

  return (
    <Grid>
      <Grid.Row centered>
        <Grid.Column mobile={16} tablet={12} computer={8} className="form-user">
          <Alert show={showAlert} message="User created!" />
          <Header as="h2">Create user</Header>
          <Form onSubmit={handleOnSubmit}>
            <Input
              error={errors.email}
              id="email"
              label="Email"
              name="email"
              onChange={handleOnChange}
              placeholder="Email"
              type="email"
              value={formData.email}
            />
            <Input
              error={errors.name}
              id="name"
              label="Name"
              name="name"
              onChange={handleOnChange}
              placeholder="Name"
              value={formData.name}
            />
            <Input
              id="lastName"
              label="Last Name"
              name="lastName"
              onChange={handleOnChange}
              placeholder="Last Name"
              value={formData.lastName}
            />
            <Input
              error={errors.password}
              id="password"
              label="Password"
              name="password"
              onChange={handleOnChange}
              placeholder="Password"
              type="password"
              value={formData.password}
            />
            <Form.Field>
              <label htmlFor="role">Role</label>
              <Select
                id="role"
                name="role"
                onChange={handleOnChange}
                options={roleOptions}
                placeholder="Role"
                value={formData.role}
              />
              {errors.role && <span className="input-error">{errors.role}</span>}
            </Form.Field>
            <Form.Field>
              <label htmlFor="description">Description</label>
              <TextArea
                id="description"
                name="description"
                onChange={handleOnChange}
                placeholder="Description"
                value={formData.description}
              />
            </Form.Field>
            <Button formNoValidate color="blue" type="submit">Submit</Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default User;
