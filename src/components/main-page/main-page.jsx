import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {placesPropTypes} from '../../common/prop-types.js';
import Header from '../header/header';
import PlaceList from '../place-list/place-list';
import CityList from '../city-list/city-list';
import MainEmptyPage from '../main-empty-page/main-empty-page';
import Map from '../map/map';

const MainPage = (props) => {

  const {offers, activeCity, onMainPageRender} = props;

  useEffect(() => {
    onMainPageRender();
  }, [activeCity]);

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className={`page__main page__main--index ${offers.length === 0 && `page__main--index-empty`}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList />
          </section>
        </div>
        <div className="cities">
          {offers.length > 0 ?
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {activeCity}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex="0">
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex="0">Popular</li>
                    <li className="places__option" tabIndex="0">Price: low to high</li>
                    <li className="places__option" tabIndex="0">Price: high to low</li>
                    <li className="places__option" tabIndex="0">Top rated first</li>
                  </ul>
                </form>
                <PlaceList offers={offers} placeName="MAIN"/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map"><Map offers={offers}/></section>
              </div>
            </div>
            : <MainEmptyPage activeCity={activeCity} />};
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  onMainPageRender() {
    dispatch(ActionCreator.getOffers());
  },
});

MainPage.propTypes = {
  offers: placesPropTypes,
  activeCity: PropTypes.string.isRequired,
  onMainPageRender: PropTypes.func.isRequired
};

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
