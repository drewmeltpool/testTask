import React from 'react';
import { useWeather } from 'hooks';
import { Field, Form, Formik } from 'formik';
import Icon from 'view/common/Icon';

import addBanner from '../../../assets/image/addBanner.svg';
import searchBanner from '../../../assets/image/searchBanner.svg';
import Button from 'view/common/Button';
import Post from 'view/components/Post';
import Logo from 'view/components/Logo';
import Image from 'view/common/Image';
import { capitalize } from 'utils';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [err, data] = useWeather({ city: 'Kyiv', units: 'metric' });

  return (
    <div className="container">
      <div className="banner search-banner">
        <h3 className="search-banner__title">
          Stay always tuned with planting trends
        </h3>
        {!err && data && (
          <h5 className="search-banner__temperature">
            {`Current temperature is: ${parseInt(data.main.temp)}°C`}
          </h5>
        )}

        <Formik initialValues={{ search: '' }} onSubmit={console.log}>
          <Form>
            <div className="search-banner__input-wrapper">
              <Field
                placeholder="Search"
                name="search"
                className="search-banner__input"
              />
              <Button type="submit" className="search-banner__input-btn">
                <Icon icon="Search" />
              </Button>
            </div>
          </Form>
        </Formik>

        <div className="search-banner__image-wrapper">
          <img
            src={searchBanner}
            alt="search-banner"
            className="search-banner__image"
          />
        </div>
      </div>

      <div className="new-post">
        <div className="new-post__title">New</div>

        <div className="new-post__inner">
          <Post
            variant="l"
            src={
              'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            }
            date={Date.now()}
            title="ekekk e sdasdka sdka"
            description="asdahsdkasdb sd ad ajdsk askd jankds"
          />
        </div>
      </div>

      <section className="section">
        <h2 className="section__title">TOP of the Day</h2>

        <div className="grid grid-column-2">
          <Post
            variant="m"
            src={
              'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            }
            date={Date.now()}
            title="ekekk e sdasdka sdka"
            description="asdahsdkasdb sd ad ajdsk askd jankds"
          />
          <Post
            variant="m"
            src={
              'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            }
            date={Date.now()}
            title="ekekk e sdasdka sdka"
            description="asdahsdkasdb sd ad ajdsk askd jankds"
          />
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Interesting</h2>

        <div className="grid grid-column-3">
          <Post
            variant="s"
            src={
              'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            }
            date={Date.now()}
            title="ekekk e sdasdka sdka"
            description="asdahsdkasdb sd ad ajdsk askd jankds"
          />
          <Post
            variant="s"
            src={
              'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            }
            date={Date.now()}
            title="ekekk e sdasdka sdka"
            description="asdahsdkasdb sd ad ajdsk askd jankds"
          />
          <Post
            variant="s"
            src={
              'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            }
            date={Date.now()}
            title="ekekk e sdasdka sdka"
            description="asdahsdkasdb sd ad ajdsk askd jankds"
          />
          <Post
            variant="s"
            src={
              'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            }
            date={Date.now()}
            title="ekekk e sdasdka sdka"
            description="asdahsdkasdb sd ad ajdsk askd jankds"
          />
          <Post
            variant="s"
            src={
              'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            }
            date={Date.now()}
            title="ekekk e sdasdka sdka"
            description="asdahsdkasdb sd ad ajdsk askd jankds"
          />
          <Post
            variant="s"
            src={
              'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            }
            date={Date.now()}
            title="ekekk e sdasdka sdka"
            description="asdahsdkasdb sd ad ajdsk askd jankds"
          />
        </div>
      </section>

      <div className="banner add-banner">
        <Logo />
        <h3 className="add-banner__title">
          Get unlimited access to exclusive articles
        </h3>
        <h4 className="add-banner__subtitle">
          Get rid of limits and read everything you wish
        </h4>
        <Link className="add-banner__link link" to="/home">
          {capitalize('try for free')}
        </Link>

        <Image src={addBanner} className="add-banner__image" />
      </div>

      <section className="section"></section>
    </div>
  );
};

export default Home;
