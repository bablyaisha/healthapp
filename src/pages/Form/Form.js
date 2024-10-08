import React, { useState } from 'react';
import axios from 'axios';
import { Button, Input, Form, Alert } from 'antd';  // Using Ant Design for styling

const { TextArea } = Input;

const FormComponent = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (values) => {
    try {
      // Replace with your Heroku app's URL
      const response = await axios.post('https://health-app-1cbb7f67dd1b.herokuapp.com/api/save-form', {
        name: values.name,
        phoneNumber: values.phoneNumber,
        address: values.address
      });

      // Handle success response
       setMessage('Data saved');
      setName('');
      setPhoneNumber('');
      setAddress('');
    } catch (err) {
      // Handle error response
      setError('Error saving form data.');
      console.error(err);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>Provide Your Registered Information</h2>
      {message && <Alert message={message} type="success" showIcon />}
      {error && <Alert message={error} type="error" showIcon />}
      <Form onFinish={handleSubmit}>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          label="Phone Number"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[{ required: true, message: 'Please input your address!' }]}
        >
          <TextArea value={address} onChange={(e) => setAddress(e.target.value)} rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormComponent;
