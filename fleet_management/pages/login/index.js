import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../../layout/layout';
import styles from '../../styles/Form.module.css';
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { useFormik } from 'formik';
import login_validate from '@/lib/validate';
import { useRouter } from 'next/router';

const login = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: login_validate,
    onSubmit,
  });

  console.log(formik.errors);

  async function onSubmit(values) {
    const status = await signIn('credentials', {
      redirect: false,
      email: values.email,
      username: values.username,
      password: values.password,
      callbackUrl: '/',
    });
    if (status.ok) {
      router.push(status.url);
    } else if (status.error !== null) {
      setError(status.error);
    }
  }

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className='w-3/4 mx-auto flex flex-col gap-10'>
        <div className='title'>
          <h1 className='text-gray-800 text-4xl font-bold py-4'>Explore</h1>
          <p className='3/4 mx-auto text-gray-400'>asdasds</p>
        </div>

        <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
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
              type={`${show ? 'text' : 'password'}`}
              name='password'
              placeholder='password'
              className={styles.input_text}
              {...formik.getFieldProps('password')}
            />

            <span className='icon flex items-center px-4'>
              <HiFingerPrint
                size={25}
                onClick={() => {
                  setShow(!show);
                }}
              />
            </span>
          </div>
          {formik.errors.password && formik.touched.password ? (
            <span className='text-rose-500'>{formik.errors.password}</span>
          ) : (
            <></>
          )}
          {error !== '' ? (
            <span className='text-rose-500'>{error}</span>
          ) : (
            <></>
          )}
          <div className='input-button'>
            <button type='submit' className={styles.button}>
              Login
            </button>
          </div>
        </form>

        <p className='text-center text-gray-400'>Don't have an account yet? </p>
        <Link href={'/register'} className='text-blue-700'>
          Sign Up
        </Link>
      </section>
    </Layout>
  );
};

export default login;

{
  /* <div className='input-button'> */
}
{
  /* <img src='./assets/github.svg' alt='google' /> */
}
{
  /* <button
              onClick={() =>
                signIn('google', { callbackUrl: 'http://localhost:3000' })
              }
              type='button'
              className={styles.button_custom}
            >
              <Image src={'/assets/google.svg'} width='20' height={20}></Image>
              Sign In with Google
            </button>
          </div>
          <div className='input-button' className={styles.button_custom}>
            <Image src={'/assets/github.svg'} width='25' height={25}></Image>
            <button
              onClick={() =>
                signIn('github', { callbackUrl: 'http://localhost:3000' })
              }
              type='button'
            >
              Sign In with GitHub
            </button>
          </div> */
}
