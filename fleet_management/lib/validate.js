export function login_validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (!/^(?=.*[A-Za-z])(?=.*\d).+$/i.test(values.password)) {
    errors.password =
      'Password needs to have at least one letter and one digit';
  } else if (!/^\S+$/i.test(values.password)) {
    errors.password = 'Password cannot contain any spaces.';
  } else if (!/^[A-Za-z\d]{8,}$/i.test(values.password)) {
    errors.password = 'Password needs to be at least 8 characters long.';
  }

  return errors;
}

export function register_validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (!/^(?=.*[A-Za-z])(?=.*\d).+$/i.test(values.password)) {
    errors.password =
      'Password needs to have at least one letter and one digit';
  } else if (!/^\S+$/i.test(values.password)) {
    errors.password = 'Password cannot contain any spaces.';
  } else if (!/^[A-Za-z\d]{8,}$/i.test(values.password)) {
    errors.password = 'Password needs to be at least 8 characters long.';
  }

  if (!values.username) {
    errors.username = 'Required';
  } else if (!/^[A-Za-z\d]{8,}$/i.test(values.username)) {
    errors.username = 'Username needs to be at least 8 characters long.';
  }

  if (!values.cpassword) {
    errors.cpassword = 'Required';
  } else if (values.cpassword !== values.password) {
    errors.cpassword =
      'Password needs to be the same. Please check your password.';
  }

  return errors;
}
