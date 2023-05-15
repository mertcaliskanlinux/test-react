import React from 'react';
import Form from 'react-jsonschema-form';

const schema = {
  type: 'object',
  properties: {
    id: { type: 'string', title: 'Kullanıcı ID' },
    password: { type: 'string', title: 'Şifre' },
  },
};

const uiSchema = {
  password: {
    'ui:widget': 'password',
  },
};

const FormComponent = () => {
  const handleSubmit = ({ formData }) => {
    console.log('Gönderilen veriler:', formData);
  };

  return (
    <div>
      <h2>Giriş Formu</h2>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onSubmit={handleSubmit}
      >
        <button type="submit">Gönder</button>
      </Form>
    </div>
  );
};

export default FormComponent;
