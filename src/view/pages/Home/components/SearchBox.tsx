import React from 'react';
import { Field, Form, Formik } from 'formik';

import searchBanner from 'src/assets/image/searchBanner.svg';

import { useNavigate } from 'react-router';
import { useWeather } from 'src/hooks';
import Button from 'src/view/common/Button';
import Icon from 'src/view/common/Icon';
import Image from 'src/view/common/Image';

const SearchBox: React.FC = () => {
  const [data, err] = useWeather({ city: 'Kyiv', units: 'metric' });
  const navigate = useNavigate();

  return (
    <div className="banner search-banner">
      <h3 className="search-banner__title">
        Stay always tuned with planting trends
      </h3>
      {!err && data && (
        <h5 className="search-banner__temperature">
          {`Current temperature is: ${parseInt(data.main.temp)}°C`}
        </h5>
      )}

      <Formik
        initialValues={{ search: '' }}
        onSubmit={({ search }) => {
          navigate(`/search?text=${search}`);
        }}
      >
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

      <Image src={searchBanner} className="search-banner__image" />
    </div>
  );
};

export default SearchBox;
