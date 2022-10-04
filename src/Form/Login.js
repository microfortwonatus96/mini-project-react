import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { API_KEY } from './Api_Key';
import '../Form/form-login.css';

async function generateRequestToken() {
  // async/await
  try {
    const response = await axios({
      method: 'get',
      url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`,
    })
    return response.data.request_token
  } catch (e) {
    console.error(e)
    return null
  }
}

const Form = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        // .min(6, 'Must be 6 characters or more')
        // .max(15, 'Must be 15 characters or less')
        .required('Required'),
      password: Yup.string()
        // .min(8, 'Must be 8 characters or more')
        // .max(20, 'Must be 20 characters or less')
        .required('Required')
      // .matches(
      //   /^.*(?=.*\d)((?=.*[a-zA-Z]){1}).*$/,
      //   "Password must contain atleast one letter and one number"
      // ),
    }),
    onSubmit: values => {
      generateRequestToken()
        .then(requestToken => {
          axios({
            method: 'post',
            url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${API_KEY}`,
            data: {
              request_token: requestToken,
              username: values.username,
              password: values.password
            }
          }).then(res => {
            const verifiedRequestToken = res.data.request_token;
            axios({
              method: 'post',
              url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}`,
              data: {
                request_token: verifiedRequestToken
              }
            }).then(resp => {
              const sessionID = resp.data.session_id
              localStorage.setItem('sessionID', sessionID)
              alert('Login Success!')
              window.location.href = '/'
            }).catch(e => {
              console.log(e)
            })
          }).catch(e => {
            console.error(e)
          })
        });
    },
  });

  useEffect(() => {
    console.log(localStorage.getItem('sessionID'))
  }, [])

  return <div class="bg-login ">
    <div class="d-flex justify-content-center align-items-center" style={{width: '100vw'}}>
        <section class="login-box">
        <h2 class="text-white">Sign In</h2>
            <form class="mt-4" onSubmit={formik.handleSubmit}>
            <div class="mb-3 bg-white rounded px-2">
                <label class="form-label small-text" htmlFor="username">Username</label>
                <input
                    class="form-control border-0 pb-1 p-0 small-text"
                    id="username"
                    name="username"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                />
            </div>
            {formik.touched.username && formik.errors.username ? (
                <div style={{color: 'red'}}>{formik.errors.username}</div>
            ) : null}
            <br></br>
            <div class="mb-3 bg-white rounded px-2">
              <label class="form-label small-text" htmlFor="password">Password</label>
              <input
                  class="form-control border-0 pb-1 p-0  small-text"
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
                <div style={{color: 'red'}}>{formik.errors.password}</div>
            ) : null}
            <br></br>
            <button class="btn btn-danger mt-3" style={{width: '100%'}} type="submit">Login</button>
            </form>
        </section>
    </div>
  </div>

  
}

export default Form;