import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../../layout/layout';
import styles from '../../styles/Form.module.css';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi';
import { useFormik } from 'formik';

import Link from 'next/link';
import Image from 'next/image';
import { register_validate } from '@/lib/validate';
import { useRouter } from 'next/router';

const register = () => {
  const [show, setShow] = useState({ password: false, cpassword: false });
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      cpassword: '',
    },
    validate: register_validate,
    onSubmit,
  });
  async function onSubmit(values) {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    };
    await fetch('http://localhost:3000/api/auth/signup', options)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          router.push('http://localhost:3000/login');
        }
      });
  }

  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>

      <section className='w-3/4 mx-auto flex flex-col gap-10'>
        <div className='title'>
          <h1 className='text-gray-800 text-4xl font-bold py-4'>Register</h1>
        </div>

        <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
          <div className={styles.input_group}>
            <input
              type='text'
              name='Username'
              placeholder='username'
              className={styles.input_text}
              {...formik.getFieldProps('username')}
            />
            <span className='icon flex items-center px-4'>
              <HiOutlineUser size={25} />
            </span>
          </div>
          {formik.errors.username && formik.touched.username ? (
            <span className='text-rose-500'>{formik.errors.username}</span>
          ) : (
            <></>
          )}
          <div className={styles.input_group}>
            <input
              type='email'
              name='email'
              placeholder='email'
              className={styles.input_text}
              {...formik.getFieldProps('email')}
            />
            <span className='icon flex items-center px-4'>
              <HiAtSymbol size={25} />
            </span>
          </div>
          {formik.errors.email && formik.touched.email ? (
            <span className='text-rose-500'>{formik.errors.email}</span>
          ) : (
            <></>
          )}
          <div className={styles.input_group}>
            <input
              type={`${show.password ? 'text' : 'password'}`}
              name='password'
              placeholder='password'
              className={styles.input_text}
              {...formik.getFieldProps('password')}
            />
            <span className='icon flex items-center px-4'>
              <HiFingerPrint
                size={25}
                onClick={() => {
                  setShow({ ...show, password: !show.password });
                }}
              />
            </span>
          </div>
          {formik.errors.password && formik.touched.password ? (
            <span className='text-rose-500'>{formik.errors.password}</span>
          ) : (
            <></>
          )}
          <div className={styles.input_group}>
            <input
              type={`${show.cpassword ? 'text' : 'password'}`}
              name='cpassword'
              placeholder='confirm password'
              className={styles.input_text}
              {...formik.getFieldProps('cpassword')}
            />
            <span className='icon flex items-center px-4'>
              <HiFingerPrint
                size={25}
                onClick={() => {
                  setShow({ ...show, cpassword: !show.cpassword });
                }}
              />
            </span>
          </div>
          {formik.errors.cpassword && formik.touched.cpassword ? (
            <span className='text-rose-500'>{formik.errors.cpassword}</span>
          ) : (
            <></>
          )}
          <div className='input-button'>
            <button type='submit' className={styles.button}>
              Register
            </button>
          </div>
        </form>

        <p className='text-center text-gray-400'>Have an account? </p>
        <Link href={'/login'} className='text-blue-700'>
          Sign In
        </Link>
      </section>
    </Layout>
  );
};

export default register;
